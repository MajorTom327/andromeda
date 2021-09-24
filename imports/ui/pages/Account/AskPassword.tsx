import { isNil } from 'ramda';
import React from 'react';
import { useForm } from 'react-hook-form';
import { A } from 'hookrouter'
import Button from '../../components/Button';
import Card from '../../components/Card';
import { EmailInput } from '../../components/FormInput';
import { Meteor } from 'meteor/meteor';

type Props = {
};

type FormAskPassword = {
  email: string;
}

const AskPassword: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormAskPassword>();

  const onSubmit = ({ email }: FormAskPassword) => {
    console.log(email);

    Meteor.call('account.askResetPassword', { email });
  }
  return (
    <Card>
      <div className="card-title text-center">
        <h1 className="text-4xl">J'ai oublié mon mot de passe</h1>
      </div>
      {isSubmitSuccessful ? (
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-2xl">Un email vous a été envoyé</h2>
          <p>Vérifiez votre boîte de réception</p>
          <div className="link text-xl mt-8">
            <A href="/">Retour à la connexion</A>
          </div>
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            error={!isNil(errors.email)}
            label="Mon adresse email"
            register={register("email", { required: true })}
          />
          <Button>Demander un lien de reinitialisation</Button>
        </form>
      )}
    </Card>
  );
}

AskPassword.defaultProps = {
};

export default AskPassword;