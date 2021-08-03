import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

type Props = {
};

const Profil: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();

  const onSubmitHandler = ({ password }) => {

    Meteor.call('account.setpassword', { password }, (err) => {
      if (err) {
        window.alert("Quelque chose ne va pas...");
        console.log(err);
      } else {
        reset({});
      }
    })

  }

  const validateRepeat = (value: string): boolean => {
    const { password } = getValues();

    return password === value
  }

  return (<div className="flex justify-center">
    <div className="container">
      <h1 className="text-3xl font-semibold">Mon Profil</h1>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="text-lg">Changer de mot de passe:</h2>
        <input type="password" {...register('password', { required: true })} placeholder="Mot de passe" />
        {errors.password && <span className="error-message">Ce champs est requis</span>}

        <input type="password" {...register('password_2', { required: true, validate: validateRepeat })} placeholder="Repeter le mot de passe" />
        {errors.password_2 && <span className="error-message">Ce champs est requis et doit être le même mot de passe.</span>}

        <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Changer le mot de passe</Button>
      </div>
    </div>
  </div>);
}

Profil.defaultProps = {
};

export default Profil;