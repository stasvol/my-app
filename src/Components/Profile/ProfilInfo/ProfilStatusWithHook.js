import React from "react";

import {useProfilStatusHook} from "../../../Hook/useProfilStatusHook";

import classes from './ProfilInfo.module.css';

const  ProfilStatusHook = ({status,updateStatus}) =>{

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
    const {editMode,activeEditMode,deActiveEditMode,changeStatus}
        = useProfilStatusHook(status,updateStatus)
        return (
            <div>
                {!editMode
                    ?
                    <div className={classes.status}>
                        <span onDoubleClick={activeEditMode} ><i>STATUS :</i>  {status} </span>
                    </div>

                    :
                        <div className={classes.status}>
                            <input  onChange={changeStatus}
                                    onBlur={deActiveEditMode} type={'text'} value={status} />
                        </div>
                }
            </div>
        )

}

export default ProfilStatusHook