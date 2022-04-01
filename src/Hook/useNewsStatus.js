import {useEffect, useState} from "react";

export const useNewsStatus = (newPutStatusThunk,status) => {
    const [editMod, setEditMod] = useState(false);
    const [statusNew, setStatus] = useState(status);

    useEffect(()=>{
        setStatus(status)
    }, [status])


    const activeEditMod = () => {
        setEditMod(true);
    }

    const deActiveEditMod = (value) => {
        setEditMod(false);
        newPutStatusThunk(value.newPutStatus)
    }
 return {editMod, statusNew, activeEditMod, deActiveEditMod}

}