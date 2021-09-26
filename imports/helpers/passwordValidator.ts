export const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[!@#$%^&*()])(?=\S*?[0-9]).{8,})\S$/;

export const passwordValidator = (password: string): boolean => {
  return passwordRegex.test(password);
}

export default passwordValidator
