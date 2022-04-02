import React from "react";

export const useSettingMessage = (posts,addText) => {
    const addPostNewMes = posts.map((el,i) => <li key={i}>{el.post} </li>)
    // let newPostMesText = props.newPostMesText
    // const handleChangeText = (e) =>{
    //     let textNew = e.target.value
    //     props.changeText(textNew)
    //     // console.log(textNew)
    // }
    const handleAddText = (value) =>{
        // let textNew = e.target.value
        addText(value.newPostMesText)
        console.log(value.newPostMesText)
    }
    return {addPostNewMes,handleAddText}
}