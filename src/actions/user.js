export const userVerifySuccessAction = (user) => {
  return {
    type: 'user-verify-success',
    user,
  };
};

export const userSignUpSuccessAction = (user) => {
  return {
    type: 'user-sign-up-success',
    user,
  };
};

export const userSignInSuccessAction = (user) => {
  return {
    type: 'user-sign-up-success',
    user,
  };
};

export const userSignOutSuccessAction = (user) => {
  return {
    type: 'user-sign-out-success',
    user,
  };
};

export const userVerifyErrorAction = (error) => {
  return {
    type: 'user-verify-error',
    error,
  };
};

export const userSignUpErrorAction = (error) => {
  return {
    type: 'user-sign-up-error',
    error,
  };
};

export const userSignInErrorAction = (error) => {
  return {
    type: 'user-sign-up-error',
    error,
  };
};

export const userSignOutErrorAction = (error) => {
  return {
    type: 'user-sign-out-error',
    error,
  };
};
