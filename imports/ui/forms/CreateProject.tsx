import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { IProject } from '/imports/api/types/Project';
import { formRequire } from '../../helpers/formValidator';

type Props = {
  onSubmit: (id?: string) => void
};

const CreateProject: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<IProject>();

  const onSubmitHandler = (value: IProject) => {
    Meteor.call('projects.create', value, (err: any, id?: string) => {
      if (!err) {
        console.log("Everything is ok", id);
        onSubmit(id);
      } else {
        console.error("Everything died", err);

      }
    });
  }
  return (
  <div className="flex flex-col gap-3">
    <h1 className="text-center text-lg font-semibold">Création d'un projet</h1>
    <input className="input input-bordered" type="text" {...register('name', formRequire())} placeholder="Nom du projet" />

    <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Valider</Button>
  </div>);
}

CreateProject.defaultProps = {
};

export default CreateProject;