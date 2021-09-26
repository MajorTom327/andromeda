import { Meteor } from 'meteor/meteor';
import React from 'react';
import useToast from '/imports/hooks/useToast';
import Button from '/imports/ui/components/Button';
import Card from '/imports/ui/components/Card';

type Props = {
};

const Security: React.FC<Props> = ({ }) => {
  const sendToast = useToast();

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
  return (
    <Card>
      <div className="card-title">
        <h2 className="text-2xl">Sécurité</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Button className="rounded-btn" onClick={onLogoutHandler}>Se déconnecter de tous les autres appareils</Button>
        <Button type="danger" className="rounded-btn" onClick={() => Meteor.logout()}>Se déconnecter</Button>
      </div>
    </Card>
  );
}

Security.defaultProps = {
};

export default Security;