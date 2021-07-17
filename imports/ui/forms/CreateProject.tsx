import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../components/Button';

type Props = {
};

const CreateProject: React.FC<Props> = ({ }) => {
  const { register, control, handleSubmit } = useForm();

  const onSubmitHandler = (value) => {
    console.log(value);
  }
  return (<div className="flex flex-col gap-3">
    <input type="text" {...register('name')} placeholder="Nom du projet" />

    <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Valider</Button>
  </div>);
}

CreateProject.defaultProps = {
};

export default CreateProject;