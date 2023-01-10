export const postCandidateEditStartAction = () => {
  return {
    type: 'post-candidate-edit-start',
  };
};

export const postCandidateEditCancelAction = () => {
  return {
    type: 'post-candidate-edit-cancel',
  };
};

export const postCandidateEditChangeBodyAction = (body) => {
  return {
    body,
    type: 'post-candidate-edit-change-body',
  };
};

export const postCandidateCreateErrorAction = (error) => {
  return {
    error,
    type: 'post-candidate-create-error',
  };
};

export const postCandidateCreateSuccessAction = () => {
  return {
    type: 'post-candidate-create-success',
  };
};

export const postCandidateCreateStartAction = () => {
  return {
    type: 'post-candidate-create-error',
  };
};
