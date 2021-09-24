import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { pathOr } from 'ramda';

const sitename = pathOr('Andromeda', ['sitename'], Meteor.settings);

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return `${sitename} - Verification de votre adresse email`;
  },
  text(user, url) {
    return `Bonjour,

Veuillez cliquer sur le lien ci-dessous pour activer votre compte:

${url}

Cordialement,
L'équipe ${sitename}`;
  },
  html(user, url) {
    return `<p>Bonjour,</p>
<p>Veuillez cliquer sur le lien ci-dessous pour activer votre compte:</p>
<p><a href="${url}">${url}</a></p>
<p>Cordialement,</p>
<p>L'équipe ${sitename}</p>`;
  }

}

