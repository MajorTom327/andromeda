import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

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
    <div className="flex justify-center bg-gray-800 p-4 rounded-xl">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="text-center text-lg font-semibold">
            Se connecter
          </div>
          <div className="flex flex-col gap-1">
            <input type="text" {...register('username', { required: true })} placeholder="Utilisateur" />
            {errors.username && <span className="error-message">Ce champs est requis</span>}
          </div>

          <div className="flex flex-col gap-1">
            <input type="password" {...register('password', { required: true })} placeholder="Mot de passe" />
            {errors.password && <span className="error-message">Ce champs est requis</span>}
          </div>

          <Button onClick={handleSubmit(onSubmit)}>
            Se connecter
          </Button>
        </div>
      </div>
    </div>
  );
}

Login.defaultProps = {
};

export default Login;