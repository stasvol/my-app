import React from 'react';
import PropTypes from 'prop-types';

import { useProfilStatus } from '../../../Hook/useProfilStatus';

import classes from './ProfilInfo.module.css';

const ProfilStatus = ({ updateStatus, ...props }) => {
  //  const [editMode, setEditMode] = useState(false);
  //  const [status, setStatus] = useState(status);
  //  //  state = {
  //  //      editMode: false,
  //  //      status: this.props.status
  //  // }
  //
  // const activeEditMode = () => {
  //     // console.log(this)
  //     //   this.setState({
  //     //       editMode: true
  //     //   })
  //      // this.state.editMode=true;
  //      // this.forceUpdate();
  //      // console.log(this.state.editMode)
  //     setEditMode(true)
  //   }
  // const deActiveEditMode = () => {
  //     // this.setState({
  //      //     editMode: false
  //      // })
  //      // this.state.editMode=true;
  //      // this.forceUpdate();
  //     // this.props.updateStatus(this.state.status);
  //     setEditMode(false)
  //     updateStatus(status)
  //
  //   }
  //
  // const changeStatus = (e) => {
  //       // this.setState({
  //       //      status: e.target.value
  //       // })
  //     setStatus({status: e.target.value})
  //
  //  }
  //  // componentDidUpdate(prevProps, prevState, snapshot) {
  //  //
  //  //   if (prevProps.status !== this.props.status ) {
  //  //       this.setState({
  //  //           status: this.props.status
  //  //       })
  //  //   }
  //  // }
  //  useEffect(()=>{
  //      if(status !== props.status){
  //          setStatus({status: props.status})
  //      }
  //  },[status,props.status])
  // if (!this.props.profile){return <Preloader />}
  const { editMode, activeEditMode, deActiveEditMode, changeStatus } = useProfilStatus(
    updateStatus,
    ...props,
  );
  const { status } = props;
  return (
    <div>
      {!editMode ? (
        <div className={classes.status}>
          <span onDoubleClick={activeEditMode}>
            <i>STATUS:</i>

            {status || "'Noy status'"}
          </span>
        </div>
      ) : (
        <div className={classes.status}>
          <input
            // autoFocus
            onBlur={deActiveEditMode}
            onChange={changeStatus}
            type="text"
            value={status}
          />
        </div>
      )}
    </div>
  );
};
ProfilStatus.propTypes = {
  updateStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default ProfilStatus;
