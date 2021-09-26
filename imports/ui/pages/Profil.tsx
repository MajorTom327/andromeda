import { Meteor } from 'meteor/meteor';
import { isNil } from 'ramda';
import React from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../components/Alert';
import Button from '../components/Button';
import Card from '../components/Card';
import { PasswordInput } from '../components/FormInput';
import passwordValidator from '/imports/helpers/passwordValidator';
import useToast from '/imports/hooks/useToast';

type Props = {
};

const Profil: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
  const sendToast = useToast();

  const onSubmitHandler = ({ password }) => {

    Meteor.call('account.setpassword', { password }, (err) => {
      if (err) {
        sendToast({ title: "Quelque chose ne va pas...", type: "error" })
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

  const onLogoutHandler = () => {
    Meteor.logoutOtherClients((err) => {
      if (err) {
        sendToast({ title: "Une erreur est survenue lors de la déconnexion", type: "error" })
        console.log(err);
      } else {
        sendToast({ type: 'success', title: "Vous êtes déconnecté" });
      }
    })
  }

  return (<div className="flex justify-center">
    <div className="container">
      <h1 className="text-4xl text-center font-semibold">Mon Profil</h1>

      <div className="flex flex-col gap-4 py-4">
        <Card>
          <div className="card-title">
            <h2 className="text-2xl">Changer de mot de passe</h2>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmitHandler)}>
            <PasswordInput
              label="Ancien mot de passe"
              error={!isNil(errors.password)}
              register={register("password", { required: true, validate: passwordValidator })}
            />
            <PasswordInput
              error={!isNil(errors.password_2)}
              label="Nouveau mot de passe"
              register={register("password", { required: true, validate: validateRepeat })}
            />

            <Button type="success" >Changer le mot de passe</Button>

          </form>

        </Card>

        <Card>
          <div className="card-title">
            <h2 className="text-2xl">Sécurité</h2>
          </div>
          <Button className="btn rounded-btn" onClick={onLogoutHandler}>Se déconnecter de tous les autres appareils</Button>
        </Card>

      </div>
    </div>
  </div>);
}

Profil.defaultProps = {
};

export default Profil;
