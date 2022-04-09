import React from 'react';
import PropTypes from 'prop-types';

import { useProfilStatusHook } from '../../../Hook/useProfilStatusHook';

import classes from './ProfilInfo.module.css';

const ProfilStatusHook = ({ status, updateStatus }) => {
  // const [editMode, setEditMode] = useState(false);
  // const [status, setStatus] = useState(status);
  //
  // useEffect(() => {
  //     setStatus(status)
  // },[status]);
  //
  // const activeEditMode = () => {
  //     setEditMode(true);
  // }
  //
  // const deActiveEditMode = () => {
  //     setEditMode(false);
  //     updateStatus(status)
  // }
  //
  // const changeStatus = (e) => {
  //     setStatus(e.target.value);
  // }
  const {
    editMode,
    activeEditMode,
    deActiveEditMode,
    changeStatus,
    statusNew,
  } = useProfilStatusHook(status, updateStatus);
  return (
    <div>
      {!editMode ? (
        <div className={classes.status}>
          <span onDoubleClick={activeEditMode}>
            <i>STATUS :</i> {status}{' '}
          </span>
        </div>
      ) : (
        <div className={classes.status}>
          <input
            onBlur={deActiveEditMode}
            onChange={changeStatus}
            type="text"
            value={statusNew}
          />
        </div>
      )}
    </div>
  );
};
ProfilStatusHook.propTypes = {
  status: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
};
export default ProfilStatusHook;
