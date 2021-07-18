import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../components/Button';
import { IProject } from '/imports/api/types/Project';

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
  return (<div className="flex flex-col gap-3">
    <input type="text" {...register('name', { required: true })} placeholder="Nom du projet" />

    <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Valider</Button>
  </div>);
}

CreateProject.defaultProps = {
};

export default CreateProject;