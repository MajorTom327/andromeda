import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { A } from 'hookrouter';
import { Meteor } from 'meteor/meteor';
import { compose, path, propOr } from 'ramda';
import React from 'react';
import Button from './Button';
import gravatar from '/imports/helpers/gravatar';
import useUser from '/imports/hooks/useUser';

type Props = {
  onToggleDrawer: () => {}
};

const getAvatar = compose(
  (email: string) => gravatar(email),
  propOr('', 'address'),
  path<Meteor.UserEmail | undefined>(['emails', 0]),
);

const Navbar: React.FC<Props> = ({ onToggleDrawer }) => {
  const user = useUser();

  const avatarUrl = getAvatar(user);

  return (
    <div className="navbar bg-neutral text-neutral-content w-full">
      {user && (
        <Button className="flex text-xl" onClick={onToggleDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      )}
      <A href="/" className="flex-1 px-2 mx-2 font-bold text-lg text-center">Andromeda</A>
      {user && (
        <A href="/profil" className="flex-none gap-4 btn btn-ghost">
          <div>
            {user.username}
          </div>
          <div className="avatar">
            <div className="rounded-full w-10 h-10">
              <img src={avatarUrl} alt="" />
            </div>
          </div>
        </A>
      )}
    </div>
  );
}

Navbar.defaultProps = {
};

export default Navbar;
