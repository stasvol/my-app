import { useEffect, useState } from 'react';

export const useProfilStatusHook = (status, updateStatus) => {
  const [editMode, setEditMode] = useState(false);
  const [statusNew, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deActiveEditMode = () => {
    setEditMode(false);
    updateStatus(statusNew);
  };

  const changeStatus = e => {
    setStatus(e.target.value);
  };
  return { editMode, activeEditMode, deActiveEditMode, changeStatus, statusNew };
};
