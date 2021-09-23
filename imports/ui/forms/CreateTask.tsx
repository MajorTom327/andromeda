import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import ITask from '/imports/api/types/Task';
import useAllProjects from '/imports/hooks/useAllProjects';
import { DateTime } from 'luxon'
import { Meteor } from 'meteor/meteor';
import Alert from '../components/Alert';

type Props = {
  onSubmit: (id?: string) => void
}

const CreateTask: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<ITask>({
    defaultValues: {
      date: DateTime.local().toISODate()
    }
  });

  const [isProjectsReady, projects] = useAllProjects();

  const onSubmitHandler = (value: ITask) => {
    Meteor.call('tasks.create', value, (err: any, id?: string) => {
      if (!err) {
        onSubmit(id);
      }
    })
  }

  return (
  <div className="flex flex-col gap-3">
    <h1 className="text-center text-lg font-semibold">Création d'une tâche</h1>
    <input className="input input-bordered" type="text" {...register("label", { required: true })} placeholder="Nom de la tache" />
    {errors.label && <Alert>Ce champs est requis</Alert>}

    <select className="select select-bordered" defaultValue="" {...register('project', { required: true, validate: (v) => v.length > 0 })}>
      {isProjectsReady
        ? (
          <>
            <option value="">Aucune valeur selectionnée...</option>
            {projects.fetch().map((project) => <option key={project._id} value={project._id}>{project.name}</option>)}
          </>
        )
        : (<option value="" disabled>Chargement en cours...</option>)
      }
    </select>
    {errors.project && <Alert>Ce champs est requis</Alert>}

    <textarea className="textarea textarea-bordered" rows={10} {...register("detail")} placeholder="Détails de la tache" />

    <input className="input input-bordered" type="date" {...register("date", { required: true })} placeholder="Date de la tache" />
    {errors.date && <Alert>Ce champs est requis</Alert>}


    <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Valider</Button>
  </div>);
}

CreateTask.defaultProps = {
};

export default CreateTask;
