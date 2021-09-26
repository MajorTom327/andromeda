import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { A } from 'hookrouter';
import { Accounts } from 'meteor/accounts-base';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

type Props = {
  token: string
};

const Verify: React.FC<Props> = ({ token }) => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    Accounts.verifyEmail(token, (error: any) => {
      if (!error) {
        setIsVerified(true);
      }
      else {
        setHasError(true);
      }
    });
  }, []);

  if (isVerified) {
    return (
      <div className="flex flex-col text-center gap-8">
        <h1 className="text-4xl">Votre email a été vérifié !</h1>
        <div className="flex justify-center">
          <div className="h-64 w-64 p-4 bg-gray-300 rounded-full flex justify-center overflow-hidden">
            <div className="flex flex-col justify-center">
              <img className="h-2/3" src="/img/verify.svg" alt="verified" />
            </div>
          </div>
        </div>

        <A className="link text-lg" href="/profil">
          Retour à mon profil
        </A>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex flex-col text-center gap-8">
        <h1 className="text-4xl">Oups !</h1>
        <h2 className="text-2xl">Impossible de valider votre email. Reessayez plus tard !</h2>
        <div className="flex justify-center">
          <div className="h-64 w-64 p-4 bg-gray-300 rounded-full flex justify-center overflow-hidden">
            <div className="flex flex-col justify-center">
              <img className="h-2/3" src="/img/error.svg" alt="error" />
            </div>
          </div>
        </div>

        <A className="link text-lg" href="/profil">
          Retour à mon profil
        </A>
      </div>
    );
  }
  return (
    <div className="flex flex-col text-center gap-8">
      <h1 className="text-4xl">Votre email est en cours de verification...</h1>
      <Loading />
    </div>
  )

}

Verify.defaultProps = {
};

export default Verify;