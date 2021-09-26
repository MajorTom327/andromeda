import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useForm } from 'react-hook-form';
import { A } from 'hookrouter';
import Button from '../../components/Button';
import { isNil } from 'ramda';
import useToast from '/imports/hooks/useToast';
import { navigate } from 'hookrouter';
import { PasswordInput, TextInput } from '../../components/FormInput';

type Props = {
};

type UserForm = {
  username: string,
  password: string
}

const Login: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserForm>();
  const sendToast = useToast();

  const onSubmit = ({ username, password }: UserForm) => {
    Meteor.loginWithPassword(username, password, (err) => {
      if (isNil(err)) {
        navigate('/');
        return;
      }
      console.log(err)

      sendToast({
        type: 'error',
        title: 'Impossible de se connecter...'
      });
    });
  }

  return (
    <div className="card bordered shadow-2xl">
      <div className="card-body">
        <div className="card-title text-center text-lg font-semibold">
          Se connecter
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email ou nom d'utilisateur"
            error={!isNil(errors.username)}
            register={register('username', { required: true })}
          />
          <PasswordInput
            label="Mot de passe"
            error={!isNil(errors.password)}
            register={register('password', { required: true })}
          />

          <div className="flex justify-between">

            <A href="/ask-password" className="link">J'ai oublié mon mot de passe</A>

            <div className="flex justify-end gap-4">
              <A href="/signin" className="btn btn-ghost">S'inscrire</A>
              <Button>Se connecter</Button>
            </div>

          </div>

        </form>
      </div>
    </div>
  );
}

Login.defaultProps = {
};

export default Login;