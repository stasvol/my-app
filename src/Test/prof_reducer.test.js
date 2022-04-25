import profReducer, { addPost, deletePost } from '../Redux/prof_reducer';

const state = {
  PostData: [
    { id: 1, like: 20, message: 'Super' },
    { id: 2, like: 3, message: 'Kliovo' },
    { id: 3, like: 9, message: 'Class' },
  ],
};

test('add new post', () => {
  //  1.  data => start test
  const action = addPost('Hello World');
  //  2.  create action
  const newState = profReducer(state, action);
  //  3.  expectation
  // newState.PostData.length = 4;
  expect(newState.PostData.length).toBe(4);
});
test("add new message 'Hello World' in post", () => {
  //  1.  data => start test
  const action = addPost('Hello World');
  //  2.  create action
  const newState = profReducer(state, action);
  //  3.  expectation
  // newState.PostData.length = 4;

  expect(newState.PostData[3].message).toBe('Hello World');
});

test('deleted in post and  length  decrement in post ', () => {
  //  1.  data => start test
  const action = deletePost(1);
  //  2.  create action
  const newState = profReducer(state, action);

  //  3.  expectation
  // newState.PostData.length = 4;
  expect(newState.PostData.length).toBe(2);
});
