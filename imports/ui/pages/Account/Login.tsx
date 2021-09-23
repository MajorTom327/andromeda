import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useForm } from 'react-hook-form';
import { A } from 'hookrouter';
import Alert from '../../components/Alert';
import Button from '../../components/Button';

type Props = {
};

type UserForm = {
  username: string,
  password: string
}

const Login: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserForm>();


  const onSubmit = ({ username, password }: UserForm) => {
    Meteor.loginWithPassword(username, password);
  }

  return (
    <div className="card bordered shadow-2xl">
      <div className="card-body">
        <div className="card-title text-center text-lg font-semibold">
          Se connecter
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <input className="input input-bordered" type="text" {...register('username', { required: true })} placeholder="Utilisateur" />
            {errors.username && <Alert>Ce champs est requis</Alert>}
          </div>

          <div className="flex flex-col gap-1">
            <input className="input input-bordered" type="password" {...register('password', { required: true })} placeholder="Mot de passe" />
            {errors.password && <Alert>Ce champs est requis</Alert>}
          </div>

          <div className="flex justify-end gap-4">
            <A href="/signin" className="btn btn-ghost">S'inscrire</A>
            <Button>Se connecter</Button>
          </div>
          <div className="text-center">
            <a href="#" className="link">J'ai oublié mon mot de passe</a>
          </div>

        </form>
      </div>
    </div>
  );
}

Login.defaultProps = {
};

export default Login;