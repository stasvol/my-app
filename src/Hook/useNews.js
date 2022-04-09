import { useState } from 'react';

export const useNews = (
  SetCurPage,
  countUsersSet,
  pageSizeSet,
  showPhoto,
  saveContacts,
) => {
  const [editMod, setEditMod] = useState(false);

  const onCurPageSet = currentPageSet => {
    SetCurPage(currentPageSet);
  };

  const countPagesSet = Math.ceil(countUsersSet / pageSizeSet / 100);
  const pagesSet = [];
  for (let i = 1; i <= countPagesSet; i++) {
    pagesSet.push(i);
  }

  const addPhoto = e => {
    if (e.target.files.length) {
      showPhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    saveContacts(formData);
    setEditMod(false);
  };

  const handleClick = page => onCurPageSet(page);
  const handleEditContactNew = () => {
    setEditMod(true);
  };

  return {
    editMod,
    setEditMod,
    onCurPageSet,
    pagesSet,
    countPagesSet,
    addPhoto,
    onSubmit,
    handleClick,
    handleEditContactNew,
  };
};
