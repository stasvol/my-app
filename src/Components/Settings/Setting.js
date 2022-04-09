import React from 'react';
import PropTypes, { number } from 'prop-types';
// import classes from './Setting.module.css';
// import {createRef} from "react";
// import state, {addNewMessage, addNewMessageAC,
// addNewText, updateNewText, updateNewTextAC} from './Set_reducers/setReducer'
// import SettingMessage from "./SettingMessage";
// import Store from "./State";
// import SetReducer from "./Set_reducers/setReducer";
import SettingMessageContainer from './SettingMessageContainer';
import SettingUsersContainer from './SettingUsersContainer';
import SettingFormContainer from './settingForm';
import { useSetting } from '../../Hook/useSetting';
import Store from './State';

const Setting = ({ message, addNewMessage, posts }) => {
  //
  //     // let state = {
  //     //     user: [{id: 1, name: 'Ivan', age: 25},
  //     {id: 2, name: 'Andre', age: 40}, {id: 3, name: 'Tom', age: 50}],
  //     //     message: [{id: 1, message: 'Hello'},
  //     {id: 2, message: 'Hi, friend'}],
  //     //     newMessage: 'Hello World'
  //     // }
  //     // let addUser = state.user.map((obj, i) =>
  //     <li key={i}>name: {obj.name}, age: {obj.age}</li>);
  //     // let addMessage = state.message.map((text, i) =>
  //     <li key={i}>{text.message}</li>)
  //     //
  //     // // let newMessage = React.createRef()
  //     //
  //     // const handleClick = () => {
  //     //     let userNew = {id: 4,
  //     name: 'Lesya', age: 19, message: state.newText}
  //     //     state.user.push(userNew)
  //     //
  //     //     console.log(state.user)
  //     // }
  //     // const handleChange = (e) => {
  //     //     let newText = e.target.value
  //     //     state.message = newText
  //     //
  //     //     console.log(newText)
  //     // }
  //
  //     // const addChangeText = (newText) => {
  //     //     state.message = newText
  //     //
  //     //     console.log(newText)
  //     // }
  //    // const addUser = props.state.user.map((user,i) =>
  //    <li key={i}><div>name: {user.name} </div>
  //    //     <div>age: {user.age}</div></li>)
  //
  //  const addMessage = message.map((mes,i)=>
  //  <li key={i}> <div>{mes.message}</div>
  //      <div>like : {mes.like}</div>  </li> )
  //
  // //     const  newText = createRef()
  // //
  // // const handleChange =()=>{
  // //
  // //      const newTextMes = newText.current.value
  // //     props.updateNewText(newTextMes);
  // //      const action = {type: 'UPDATE_NEW_TEXT',newTextMes:newTextMes}
  // //       props.dispatch(action)
  // //     props.dispatch(updateNewTextAC(newTextMes));
  // //
  // // }
  //
  // const  handleClick = (value)=>{
  //     // let text = document.getElementById('ref').value
  //     // const text = newText.current.value
  //      addNewMessage(value.newMessage)
  //     console.log(value)
  //  }
  const { addMessage, handleClick } = useSetting(message, addNewMessage);

  return (
    <div>
      <h3>Setting</h3>
      <SettingFormContainer onSubmit={handleClick} />
      {/* <div> */}
      {/*    <textarea onChange={handleChange}
      ref={newText}  placeholder={'add data'} value={ props.newMessage } /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <button onClick={handleClick}>ADD</button> */}
      {/* </div> */}
      <ul>
        {/* <h4>USERS</h4> */}
        {/* {addUser} */}
        {/* <h4>POSTS</h4> */}
        {addMessage}
        <SettingMessageContainer posts={posts} Store={Store} />
        <SettingUsersContainer Store={Store} />
      </ul>
    </div>
  );
};

Setting.propTypes = {
  message: PropTypes.arrayOf(PropTypes.shape({ message: PropTypes.string, like: number }))
    .isRequired,
  addNewMessage: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Setting;
