import { A, navigate } from 'hookrouter';
import { Accounts } from 'meteor/accounts-base';
import { isNil } from 'ramda';
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { EmailInput, PasswordInput, TextInput } from '../../components/FormInput';
import Tooltip from '../../components/Tooltip';
import { passwordValidator, validatePasswordWithRepeat, formRequire, emailValidator } from '../../../helpers/formValidator';
import useToast from '/imports/hooks/useToast';
type Props = {
};

type SignInForm = {
  username: string
  email: string
  password: string;
  password_2: string;
}

const Signin: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<SignInForm>();

  const onSigninHandler = ({ username, email, password }: SignInForm) => {
    const sendToast = useToast();

    Accounts.createUser({
      username,
      email,
      password,
    }, (error) => {
      if (isNil(error)) {
        navigate('/');
        return;
      }
      const { reason } = error as { reason: string };

      if (reason === 'Email already exists.') {
        sendToast({ title: 'L\'adresse Email est déjà utilisée !', type: 'error' });
      } else if (reason === 'Username already exists.') {
        sendToast({ title: 'Le nom d\'utilisateur est déjà utilisé !', type: 'error' });
      } else {
        sendToast({ title: 'Impossible de se creer un compte', type: 'error' });

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
          error={errors.username}
          register={register('username', formRequire())}
        />
        <EmailInput
          label={'Email'}
          error={errors.email}
          register={register('email', formRequire({validate: emailValidator}))}
        />

        <Tooltip
          tip="1 caractere special, 1 lettre en majuscule, 1 lettre en minuscule, 1 nombre et une longueur minimale de 8 caracteres"
          direction="bottom"
        >
          <PasswordInput
            label={'Mot de passe'}
            error={errors.password}
            register={register('password', formRequire({ minLength: 8, validate: passwordValidator }))}
          />
        </Tooltip>
        <Tooltip
          tip="1 caractere special, 1 lettre en majuscule, 1 lettre en minuscule, 1 nombre et une longueur minimale de 8 caracteres"
          direction="bottom"
        >
          <PasswordInput
            label={'Confirmer le mot de passe'}
            error={errors.password_2}
            register={register('password_2', { validate: validatePasswordWithRepeat(getValues) })}
          />
        </Tooltip>


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