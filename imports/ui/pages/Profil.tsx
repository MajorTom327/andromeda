import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../components/Alert';
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

        <input className="input input-bordered" type="password" {...register('password', { required: true })} placeholder="Mot de passe" />
        {errors.password && <Alert>Ce champs est requis</Alert>}

        <input className="input input-bordered" type="password" {...register('password_2', { required: true, validate: validateRepeat })} placeholder="Repeter le mot de passe" />
        {errors.password_2 && <Alert>Ce champs est requis et doit être le même mot de passe.</Alert>}

        <Button type="success" onClick={handleSubmit(onSubmitHandler)}>Changer le mot de passe</Button>
        <button className="btn rounded-btn" onClick={() => Meteor.logout()}>Se déconnecter</button>
      </div>
    </div>
  </div>);
}

Profil.defaultProps = {
};

export default Profil;
