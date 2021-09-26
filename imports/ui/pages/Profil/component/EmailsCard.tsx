import classNames from 'classnames';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import useToast from '/imports/hooks/useToast';
import useUser from '/imports/hooks/useUser';
import Card from '/imports/ui/components/Card';

type Props = {
};

type EmailProp = {
  address: string;
  verified: boolean;
}

const BadgeStatus: React.FC<{ email: EmailProp }> = ({ email }) => {
  const sendToast = useToast()
  const { address, verified } = email;

  const onClickHandler = () => {
    if (!verified) {
      Meteor.call('account.askVerifyEmail', address, (err) => {
        if (err) {
          sendToast({
            title: 'Impossible de demander la vérification!',
            type: 'error'
          })
        } else {
          sendToast({
            title: 'Votre demande à été prise en compte',
            type: 'success'
          });
        }
      });
    }
  }
  return (
    <div onClick={onClickHandler} className={classNames("badge", {
      "badge-success": verified,
      "badge-danger cursor-pointer": !verified,
    })}>
      {verified ? 'Vérifié' : 'Non vérifié'}
    </div>
  )
};

const EmailsCard: React.FC<Props> = ({ }) => {
  const user = useUser();

  return (
    <Card>
      <div className="card-title">
        <h2 className="text-2xl">Mes emails</h2>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {(user?.emails || []).map((email, index) => (
            <tr key={index}>
              <td>{email.address}</td>
              <td><BadgeStatus email={email} /></td>
            </tr>
          ))}
        </tbody>

      </table>
    </Card>
  );
}

EmailsCard.defaultProps = {
};

export default EmailsCard;