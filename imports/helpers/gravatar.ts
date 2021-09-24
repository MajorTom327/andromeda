import md5 from 'crypto-js/md5';

// get the url of the gravatar image for the given email address
export function gravatar(email: string, size: number = 40): string {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
}

export default gravatar;