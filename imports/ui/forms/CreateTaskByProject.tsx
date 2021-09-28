import { DateTime } from 'luxon';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../components/Alert';
import Button from '../components/Button';
import ITask from '/imports/api/types/Task';
import { formRequire } from '../../helpers/formValidator';

type Props = {
  onSubmit: (id?: string) => void
  projectId: string
}

const CreateTaskByProject: React.FC<Props> = ({ projectId, onSubmit }) => {
  const defaultValues = {
    date: DateTime.local().toISODate(),
    label: '',
    detail: ''
  }
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ITask>({
    defaultValues
  });

  const onSubmitHandler = (value: ITask) => {
    Meteor.call('tasks.create', { ...value, project: projectId }, (err: any, id?: string) => {
      if (!err) {
        reset(defaultValues);
        onSubmit(id);
      }
    })
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center text-lg font-semibold">Création d'une tâche</h1>
      <input className="input input-bordered" type="text" {...register("label", formRequire())} placeholder="Nom de la tache" />
      {errors.label && <Alert>Ce champ est requis</Alert>}

      <textarea className="textarea textarea-bordered" rows={10} {...register("detail")} placeholder="Détails de la tache" />

      <input className="input input-bordered" type="date" {...register("date", formRequire())} placeholder="Date de la tache" />
      {errors.date && <Alert>Ce champ est requis</Alert>}


      <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Valider</Button>
    </div>);
}

CreateTaskByProject.defaultProps = {
};

export default CreateTaskByProject;
