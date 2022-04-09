import React, { useState } from 'react';

import Preloader from '../Components/Common/preloader/preloader';

export const useProfilInfo = (profile, savePhoto, editProfile) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) return <Preloader />;

  const onPhotoChange = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    editProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  const handleGoToEditMode = () => setEditMode(true);

  return { editMode, onPhotoChange, onSubmit, handleGoToEditMode };
};
