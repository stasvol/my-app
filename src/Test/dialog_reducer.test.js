// eslint-disable-next-line no-unused-vars
import React from 'react';
import dialogReducer, { addMessage, deleteMessage } from '../Redux/dialog_reducer';

const state = {
  MessageUserData: [
    { id: 1, message: 'Vse klas' },
    { id: 2, message: 'Super' },
    { id: 3, message: 'Klasno' },
    { id: 4, message: 'VOOOO !!!' },
    { id: 5, message: 'YO-YO-YO-YO' },
    { id: 6, message: 'YO-MO-YO' },
  ],
};
test('add new message and length decremented', () => {
  const action = addMessage('Hello Friend');
  const newDialog = dialogReducer(state, action);
  expect(newDialog.MessageUserData.length).toBe(7);
});

test('add new message and length increment', () => {
  const action = addMessage('Hello Friend');
  const newDialog = dialogReducer(state, action);
  expect(newDialog.MessageUserData[6].message).toBe('Hello Friend');
});

test('deleted  post id and  length  increment in post ', () => {
  const action = deleteMessage(6);
  const newDialog = dialogReducer(state, action);
  expect(newDialog.MessageUserData.length).toBe(5);
});
