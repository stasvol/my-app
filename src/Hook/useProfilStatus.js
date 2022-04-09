import { useEffect, useState } from 'react';

export const useProfilStatus = (updateStatus, ...props) => {
  const [editMode, setEditMode] = useState(false);
  const [statusNew, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deActiveEditMode = () => {
    setEditMode(false);
    updateStatus(statusNew);
  };

  const changeStatus = e => {
    setStatus({ status: e.target.value });
  };

  useEffect(() => {
    if (statusNew !== props.status) {
      setStatus({ status: props.status });
    }
  }, [statusNew, props.status]);

  return { editMode, statusNew, activeEditMode, deActiveEditMode, changeStatus };
};
