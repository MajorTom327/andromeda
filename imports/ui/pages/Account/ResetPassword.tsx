import { navigate } from 'hookrouter';
import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { useForm } from 'react-hook-form';
import { formRequire, passwordValidator, validatePasswordWithRepeat } from '../../../helpers/formValidator';
import useToast from '../../../hooks/useToast';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { PasswordInput } from '../../components/FormInput';

type Props = {
  token: string
};

type FormResetPassword = {
  password: string,
  repeatPassword: string
}

const ResetPassword: React.FC<Props> = ({ token }) => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<FormResetPassword>();
  const sendToast = useToast()

  const onSubmit = ({ password }: FormResetPassword) => {

    console.log('token', token)
    Accounts.resetPassword(token, password, (error) => {
      if (error) {
        sendToast({
          type: 'error',
          title: 'Impossible de changer le mot de passe'
        })
        console.log(error)
      } else {
        navigate('/')
        sendToast({
          type: 'success',
          title: 'Mot de passe changé avec succès',
        })
      }
    });
  }

  return (
    <Card>
      <div className="card-title">
        <h1 className="text-2xl text-center">Reinitialisation du mot de passe</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <PasswordInput
          label="Nouveau mot de passe"
          register={register("password", formRequire({ validate: passwordValidator }))}
          error={errors.password}
        />

        <PasswordInput
          label="Repetez le mot de passe"
          register={register("repeatPassword", formRequire({ validate: validatePasswordWithRepeat(getValues) }))}
          error={errors.repeatPassword}
        />

        <Button>Changer mon mot de passe</Button>
      </form>
    </Card>
  );
}

ResetPassword.defaultProps = {
};

export default ResetPassword;