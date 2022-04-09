import { connect } from 'react-redux';

import { addChangeText, addPost } from '../../../Redux/prof_reducer';
import MyPost from './MyPost';
// import MyContext from "../../../MyContext";
// const MyPostContainer1 = (props) => {
//     // let newPostText = React.createRef();
//
//     // const addNewPost = () => {
//     //     // let newPost = newPostText.current.value;
//     //     // props.addPost();
//     //     // newPostText.current.value = '';
//     //     // props.addChangeText('')
//     //     let action = addNewPostActionCreator();
//     //     props.store.dispatch(action);
//     // }
//     //
//     // const handleChange = (newPost) => {
//     //     // let newPost = newPostText.current.value;
//     //     // props.addChangeText(newPost)
//     //     props.store.dispatch(handleChangeActionCreator(newPost));
//     // }
//
//
//     return (
//         <MyContext.Consumer>
//             {
//                 (store) => {
//                     const addNewPost = () => {
//                         let action = addNewPostActionCreator();
//                         store.dispatch(action);
//                     }
//                     const handleChange = (newPost) => {
//                         store.dispatch(handleChangeActionCreator(newPost));
//                     }
//                     return (
//
//     <MyPost addChangeText={handleChange}
//     addPost={addNewPost} PostData={props.PostData}
//                                 newText={props.newText} post={'MY POSTS'}/>
//                     )
//                 }
//             }
//         </MyContext.Consumer>
//     )
//
// }
//
//
// export default MyPostContainer1

const mapStateToProps = ({ profPage: { PostData, newText }, post }) => ({
  PostData,
  newText,
  post,
});

const mapDispatchToProps = dispatch => {
  return {
    addChangeText: newPost => {
      dispatch(addChangeText(newPost));
    },

    addPost: newText => {
      const action = addPost(newText);
      dispatch(action);
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
