// eslint-disable-next-line no-unused-vars
import React from 'react';
import setReducer, {
  addNewMessageAC,
  deleteMessageAC,
} from '../Components/Settings/Set_reducers/setReducer';

const state = {
  message: [
    { id: 1, message: 'Hello', like: 3 },
    { id: 2, message: 'Hi, friend', like: 9 },
  ],
};
it('should add new message', () => {
  const action = addNewMessageAC("I'm Cool");
  const newSetState = setReducer(state, action);
  expect(newSetState.message.length).toBe(3);
});
it('should add text message ', () => {
  const action = addNewMessageAC("I'm Cool");
  const newMessage = setReducer(state, action);
  expect(newMessage.message[2].message).toBe("I'm Cool");
});
it('should delete element message', () => {
  const action = deleteMessageAC(2);
  const delMessage = setReducer(state, action);
  expect(delMessage.message.length).toBe(1);
});
it('should id is incorrect', () => {
  const action = deleteMessageAC(100);
  const delMessage = setReducer(state, action);
  expect(delMessage.message.length).toBe(2);
});
