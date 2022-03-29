import React from 'react';
import {connect} from "react-redux";

import {addNewPostAC, newPostMesTextAC} from "./Set_reducers/setMesreducer";
import SettingMessage from "./SettingMessage";

// import {addNewPostAC, newPostMesTextAC} from "./State";

// const SettingMessageContainer = (props) => {
//
//     const changeText = (textNew) =>{
//         // let textNew = e.target.value
//         props.Store.dispatch(newPostMesTextAC(textNew))
//         // console.log(textNew)
//     }
//
//     const addText = () =>{
//         // let textNew = e.target.value
//         props.Store.dispatch(addNewPostAC())
//
//
//     }
//
//
//     return (
//           <SettingMessage state={props.Store.getState()} changeText={changeText}
//                           addText={addText} newPostMesText={props.Store.getState().newPostMesText}/>
//     )
//
//     }

    const mapStateToPros = ({posts:{posts,newPostMesText}}) => ({posts, newPostMesText})

    const mapDispatchToProps = (dispatch) =>{
            return {
                changeText: (textNew) => {
                    dispatch(newPostMesTextAC(textNew))
                },
                addText: (newPostMesText) => {
                    dispatch(addNewPostAC(newPostMesText))
                }
            }
    }

    const SettingMessageContainer = connect(mapStateToPros, mapDispatchToProps)(SettingMessage)

export default SettingMessageContainer