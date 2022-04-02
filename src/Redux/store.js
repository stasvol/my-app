import dialogReducer from './dialog_reducer';
import postReducer from './prof_reducer';
import siteBarReducer from './sitebar_reducer';
// const ADD_POST = 'ADD POST';
// const ADD_CHANGE_TEXT ='ADD CHANGE TEXT';
// const ADD_MESSAGE = 'ADD MESSAGE';
// const ADD_CHANGE_NEW_MESSAGE = 'ADD CHANGE NEW MESSAGE';
let store = {
    state: {
        dialogPage: {
            DialogData: [
                {id: 1, name: 'Artur', img: 'https://avatarko.ru/img/kartinka/1/monstr_kot.jpg'},
                {id: 2, name: 'Diana', img: 'https://www.meme-arsenal.com/memes/c1e1c57e0465d02cf0b0d7f88425d2ea.jpg'},
                {
                    id: 3,
                    name: 'Lesya',
                    img: 'https://i.pinimg.com/originals/6c/c4/b4/6cc4b42d17e1716282a138d1d93028cf.jpg'
                },
                {
                    id: 4,
                    name: 'Viktor',
                    img: 'https://i.pinimg.com/736x/da/d0/a7/dad0a79db4cd810e3b3aa5c56dfc6742.jpg'
                },
                {id: 5, name: 'Andre', img: 'https://bipbap.ru/wp-content/uploads/2017/10/8cb.jpg'},
                {id: 6, name: 'Tom', img: 'https://chance2.ru/photo/img/krasivye-koshki-foto-na-avatarku-2.jpg'},
                {id: 7, name: 'Stas', img: 'https://i.pinimg.com/474x/01/b9/cf/01b9cfe00d3987af5cbb8d06688affbe.jpg'},
                {id: 8, name: 'Vova', img: 'https://www.meme-arsenal.com/memes/e0d6c17f7cdbf397eaa821e56e2c1b51.jpg'},
                {id: 9, name: 'Vovan', img: 'https://i.pinimg.com/originals/5b/1a/9a/5b1a9ab141ba1ade4ab06c8215059225.jpg'
                },
            ],
            MessageUserData: [
                {id: 1, message: 'Vse klas'},
                {id: 2, message: 'Super'},
                {id: 3, message: 'Klasno'},
                {id: 4, message: 'VOOOO !!!'},
                {id: 5, message: 'YO-YO-YO-YO'},
                {id: 6, message: 'YO-MO-YO'},
            ],
            newMessageText: 'Hi',
        },
        postPage: {
            PostData: [
                {id: 1, like: '20', message: 'Super'},
                {id: 2, like: '3', message: 'Kliovo'},
                {id: 3, like: '9', message: 'Class'},
            ],
            newText: 'Hello',
        },
        siteBar: {
            siteBarNav: [
                {
                    id: 1,
                    name: 'Andre',
                    img: 'https://i.pinimg.com/236x/f6/7b/0a/f67b0a5c466acc6456d3562523616f24.jpg'
                },
                {
                    id: 2,
                    name: 'Oleg',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRuFmGwLYEtQM33nVq8_WmqqPg5_fag4ZkA&usqp=CAU'
                },
                {
                    id: 3,
                    name: 'Ivan',
                    img: 'https://i.pinimg.com/236x/4d/fa/04/4dfa04c4070771935150bad24ac02cbf.jpg'
                },
            ],
        },


    },

    getState() {
        return this.state;
    },

    subscriber() {
        console.log('state  changed');
    },
        subscribe(observer) {                         //observer pattern наблюдатель
        this.subscriber = observer;

     },
    //  Method   DISPATCH

    dispatch(action) {// action -> object: type:'' +  data( newText, ... )

        this.state.dialogPage = dialogReducer(this.state.dialogPage, action);
        this.state.postPage = postReducer(this.state.postPage, action);
        this.state.siteBar = siteBarReducer(this.state.siteBar, action);

        this.subscriber(this.state);
        },
}

export default store

// window.store = store;
//  Create  ActionCreator   REDUCE;
//
// dispatch(action) {
//     if(action.type===ADD_POST){
//         let newPost = {
//             id: 4,
//             like: '0',
//             message: this._state.postPage.newText    // (message)-parametr funktion
//         };
//         this._state.postPage.PostData.push(newPost);
//         this._state.postPage.newText = '';
//
//         this._subscriber(this._state);
//
//     } else if (action.type=== ADD_CHANGE_TEXT ) {
//         this._state.postPage.newText = action.newText
//
//         this._subscriber(this._state);
//
//     }else if (action.type=== ADD_MESSAGE) {
//         let textMessage = {
//             id: 7,
//             message: this._state.dialogPage.newMessageText,          // (newMessage)-parametr funktion
//         };
//         this._state.dialogPage.MessageUserData.push(textMessage);
//         this._state.dialogPage.newMessageText = '';                  // addNewMessage('')
//
//         this._subscriber(this._state);
//     } else  if (action.type=== ADD_CHANGE_NEW_MESSAGE ) {
//         this._state.dialogPage.newMessageText = action.newMessageText;
//
//         this._subscriber(this._state);
//     }
// }
// export  const addNewPostActionCreator =() => ({ type: ADD_POST  });
//
// export  const handleChangeActionCreator =(newPost) => ({ type:ADD_CHANGE_TEXT, newText:newPost });
//
// export  const addNewMessageActionCreator =() =>({ type: ADD_MESSAGE });
//
// export  const handleChangeDialogActionCreator =(messageText) =>
//     ({type: ADD_CHANGE_NEW_MESSAGE, newMessageText: messageText});
//
//
// ___________________________________________________________________________________________________________________

//  In object =store= add medchod  DISPATCH
//
// addPost() {          // (message)-parametr funktion
//     let newPost = {
//         id: 4,
//         like: '0',
//         message: this._state.postPage.newText    // (message)-parametr funktion
//     };
//     this._state.postPage.PostData.push(newPost);
//     this._state.postPage.newText = '';
//     this._subscriber(this._state);
// },
//
// addChangeText(newText) {
//     this._state.postPage.newText = newText
//
//     this._subscriber(this._state);
// },
//
// addMessage() {                                                    // (newMessage)-parametr funktion
//     let textMessage = {
//         id: 7,
//         message: this._state.dialogPage.newMessageText,          // (newMessage)-parametr funktion
//     };
//     this._state.dialogPage.MessageUserData.push(textMessage);
//     this._state.dialogPage.newMessageText = '';                  // addNewMessage('')
//
//     this._subscriber(this._state);
// },
//
// addChangeNewMessage(newMessageText) {
//     this._state.dialogPage.newMessageText = newMessageText;
//
//     this._subscriber(this._state);
// },
//
// _____________________________________________________________________________________________________________________

// function Components функции до object =store=
//
// export const addPost = () => {               // (message)-parametr funktion
//     let newPost = {
//         id: 4,
//         like: '0',
//         message: state.postPage.newText    // (message)-parametr funktion
//     };
//     state.postPage.PostData.push(newPost);
//     state.postPage.newText = '';
//     rerenderEntireTree(state);
// }
//
// export const addChangeText = (newText) =>{
//     state.postPage.newText = newText
//     rerenderEntireTree(state);
// }
//
//
// export const addMessage = () =>{                // (newMessage)-parametr funktion
//     let textMessage ={
//         id: 7,
//         message: state.dialogPage.newMessageText,   // (newMessage)-parametr funktion
//     };
//     state.dialogPage.MessageUserData.push(textMessage);
//     state.dialogPage.newMessageText = '';
//     // addNewMessage('')
//     rerenderEntireTree(state);
// }
//
// export  const addChangeNewMessage = (newMessageText) =>{
//     state.dialogPage.newMessageText = newMessageText;
//     rerenderEntireTree(state);
// }
//
// export const Subscribe = (observer) =>{  //observer pattern наблюдатель
//     rerenderEntireTree = observer;
