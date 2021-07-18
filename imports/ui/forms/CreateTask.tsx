import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import ITask from '/imports/api/types/Task';
import useAllProjects from '/imports/hooks/useAllProjects';
import { DateTime } from 'luxon'
import { Meteor } from 'meteor/meteor';

type Props = {
  onSubmit: (id?: string) => void
}

const CreateTask: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ITask>({
    defaultValues: {
      date: DateTime.local().toISODate()
    }
  });

  const [isProjectsReady, projects] = useAllProjects();

  const onSubmitHandler = (value: ITask) => {
    Meteor.call('tasks.create', value, (err, id?: string) => {
      if (!err) {
        onSubmit(id);
      }
    })
  }

  return (<div className="flex flex-col gap-3">
    <input type="text" {...register("label", { required: true })} placeholder="Nom de la tache" />
    {errors.label && <span className="error-message">Ce champs est requis</span>}

    <select {...register('project', { required: true })}>
      {isProjectsReady
        ? projects.fetch().map((project) => <option key={project._id} value={project._id}>{project.name}</option>)
        : (<option disabled>Chargement en cours...</option>)
      }
    </select>

    <textarea rows={10} {...register("detail")} placeholder="Détails de la tache" />

    <input type="date" {...register("date", { required: true })} placeholder="Date de la tache" />
    {errors.date && <span className="error-message">Ce champs est requis</span>}


    <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Valider</Button>
  </div>);
}

CreateTask.defaultProps = {
};

export default CreateTask;