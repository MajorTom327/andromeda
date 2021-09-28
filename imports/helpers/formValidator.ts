import { equals } from 'ramda';
export const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[!@#$%^&:*()])(?=\S*?[0-9]).{8,})\S$/;
export const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const formRequire = (options?: any) => ({
  required: 'Ce champ est requis',
  ...(options ? options : {})
})

export const emailValidator = (email: string) => {
  return emailRegex.test(email) || 'Email non valide'
}
export const passwordValidator = (password: string): boolean | string => {
  return passwordRegex.test(password) || 'Le format n\'est pas valide'
}

export const validatePasswordWithRepeat = (getValues: () => any) => (value: string) => {
  const { password } = getValues();
  return equals(value, password) || 'N\'est pas identique avec le mot de passe';
}

