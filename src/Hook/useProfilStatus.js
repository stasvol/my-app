import {useEffect, useState} from "react";

export const useProfilStatus = (updateStatus,...props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(status);

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        updateStatus(status)

    }

    const changeStatus = (e) => {
        setStatus({status: e.target.value})

    }

    useEffect(()=>{
        if(status !== props.status){
            setStatus({status: props.status})
        }
    },[status,props.status])

    return {editMode,status,activeEditMode,deActiveEditMode,changeStatus}
}