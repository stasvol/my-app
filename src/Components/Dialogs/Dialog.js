import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect, NavLink } from 'react-router-dom';

import DialogUser from './DialogUser/DialogUser';
import MessageUser from './MessageUser/MessageUser';
import DialogForm from './Dialog.Form';
// import {addNewMessageActionCreator, handleChangeDialogActionCreator}
// from '../../Redux/dialog_reducer';
import classes from './Dialog.module.css';

const Dialogs = ({ DialogData, MessageUserData, addMessage }) => {
  // let state = props.store.getState().dialogPage
  //
  // let DialogUserData = DialogData.map(({name,id,img}) =>
  // <DialogUser name={name} id={id} img={img} key={id}/>);
  // let MessageData = MessageUserData.map(({message,id}) =>
  // <MessageUser message={message} id={id} key={id}/>);
  //
  // let newMessage = React.createRef();
  // const addNewMessage = () =>{
  //     // let messageText = newMessage.current.value;
  //     props.addMessage();
  //     // newMessage.current.value = '';
  //    // props.addChangeNewMessage('');
  //    //  props.dispatch(addNewMessageActionCreator());
  // }
  //
  // const handleChange = (e) =>{
  //     let messageText = e.target.value;
  //     props.addChangeNewMessage(messageText)
  //     // props.dispatch(handleChangeDialogActionCreator(messageText));
  // }
  // if (!props.isAuth) return <Redirect to={'/Login'} />

  const onSubmit = value => {
    // alert(value.newMessageText)
    addMessage(value.newMessageText);
  };

  return (
    <div className={classes.bg}>
      <div className={classes.dialog}>
        {DialogData.map(({ name, id, img }) => (
          <DialogUser key={id} id={id} img={img} name={name} />
        ))}
        {/* <DialogUser name={avatar[8].name}
         id={avatar[8].id}  img={avatar[8].img}/> */}
        {/* <DialogUser name={DialogData[1].name} id={DialogData[1].id}/> */}
        {/* <DialogUser name={DialogData[2].name} id={DialogData[2].id}/> */}
        {/* <DialogUser name={'Viktor'} id={'4'}/> */}
        {/* <DialogUser name={'Andre'} id={'5'}/> */}
        {/* <DialogUser name={'Tom'} id={'6'}/> */}
        {/* <DialogUser name={'Stas'} id={'7'}/> */}
        {/* <DialogUser name={'Vova'} id={'8'}/> */}
      </div>
      <div className={classes.messsages}>
        <DialogForm onSubmit={onSubmit} />

        {/* <textarea  onChange={handleChange}
        value={props.state.newMessageText}
        placeholder={'add message'}> </textarea> */}
        {/* <button onClick={ addNewMessage }
        className={classes.btn}>Add Message</button> */}
        {/* <div className={classes.circle}> */}
        <div className={`${classes.circle} ${classes.active}`}>
          {MessageUserData.map(({ message, id }) => (
            <MessageUser key={id} id={id} message={message} />
          ))}
        </div>
        {/* </div> */}
        {/* <MessageUser message={MessageUserData[0]
        .message} id={MessageUserData[0].id}/> */}
        {/* <MessageUser message={MessageUserData[1]
        .message} id={MessageUserData[1].id}/> */}
        {/* <MessageUser message={MessageUserData[2].message}/> */}
        {/* <MessageUser message={MessageUserData[3].message}/> */}
        {/* <MessageUser message={MessageUserData[4].message}/> */}
      </div>
    </div>
  );
};
Dialogs.propTypes = {
  DialogData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
    }),
  ).isRequired,
  MessageUserData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default Dialogs;
