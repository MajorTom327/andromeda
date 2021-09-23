import { Accounts } from 'meteor/accounts-base';
import React, { useState } from 'react';
import { A, navigate } from 'hookrouter';
import { useForm } from 'react-hook-form';
import { EmailInput, PasswordInput, TextInput } from '../../components/FormInput';
import { isNil } from 'ramda';
import Card from '../../components/Card';
import Button from '../../components/Button';
import useToast from '/imports/hooks/useToast';
type Props = {
};

type SignInForm = {
  username: string
  email: string
  password: string;
}

const Signin: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>();

  const onSigninHandler = ({ username, email, password }) => {
    const sendToast = useToast();

    Accounts.createUser({
      username,
      email,
      password,
    }, (error) => {
      if (isNil(error)) {
        navigate('/login')
      }
      const { reason } = error as { reason: string };

      if (reason === 'Email already exists.') {
        sendToast({ title: 'L\'adresse Email est déjà utilisée !', type: 'error' });
      } else if (reason === 'Username already exists.') {
        sendToast({ title: 'Le nom d\'utilisateur est déjà utilisé !', type: 'error' });
      }
    })


  }
  return (
    <Card>
      <div className="card-title text-center">
        <h1 className="text-2xl font-bold">S'enregistrer</h1>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSigninHandler)}>
        <TextInput
          label={'Nom d\'utilisateur'}
          error={!isNil(errors.username)}
          register={register('username', { required: true })}
        />
        <EmailInput
          label={'Email'}
          error={!isNil(errors.email)}
          register={register('email', { required: true })}
        />

        <PasswordInput
          label={'Mot de passe'}
          error={!isNil(errors.password)}
          register={register('password', { required: true, minLength: 8 })}
        // Todo: add rules for secure password + informations
        />


        <div className="flex justify-end gap-4">
          <A className="btn btn-ghost" href="/login">J'ai déjà un compte</A>
          <Button>S'inscrire</Button>
        </div>



      </form>

    </Card>
  );
}

Signin.defaultProps = {
};

export default Signin;