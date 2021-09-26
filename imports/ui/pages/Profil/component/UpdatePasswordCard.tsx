import { Meteor } from 'meteor/meteor';
import { isNil } from 'ramda';
import React from 'react';
import { useForm } from 'react-hook-form';
import passwordValidator from '/imports/helpers/passwordValidator';
import useToast from '/imports/hooks/useToast';
import Button from '/imports/ui/components/Button';
import Card from '/imports/ui/components/Card';
import { PasswordInput } from '/imports/ui/components/FormInput';

type Props = {
};

const UpdatePasswordCard: React.FC<Props> = ({ }) => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
  const sendToast = useToast();

  const onSubmitHandler = ({ password }: { password: string }) => {

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

  return (
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
  );
}

UpdatePasswordCard.defaultProps = {
};

export default UpdatePasswordCard;