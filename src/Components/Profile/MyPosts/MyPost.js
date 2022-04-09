import React from 'react';

import PropTypes from 'prop-types';
import Post from './Post/Post';
import MyPostForm from './MyPostForm';

import classes from './MyPost.module.css';

const MyPost = ({ PostData, addPost, post }) => {
  // console.log('RENDER')
  // let PostUser = PostData.map(({like,message,id,}) =>
  // <Post like={like} message={message} id={id} key={id}/>);
  // let newPostText = React.createRef();
  // const addNewPost = () => {
  //     // let newPost = newPostText.current.value;
  //     props.addPost();
  //     // newPostText.current.value = '';
  //     // props.addChangeText('')
  //     // let action = addNewPostActionCreator();
  //     // props.dispatch(action);
  // }
  //
  // const handleChange = () => {
  //     let newPost = newPostText.current.value;
  //     props.addChangeText(newPost)
  //     // props.dispatch(handleChangeActionCreator(newPost));
  //     console.log(newPost)
  // }

  const onSubmit = value => {
    addPost(value.newText);
  };

  return (
    <div className={classes.posts}>
      <h4 className={classes.head}>{post}</h4>

      <MyPostForm onSubmit={onSubmit} />
      {PostData.map(({ like, message, id }) => (
        <Post key={id} id={id} like={like} message={message} />
      ))}

      {/* <div> */}
      {/* <div className={classes.block}> */}
      {/*     <textarea ref={newPostText} onChange={handleChange}
            value={props.newText} placeholder={'add post'}/> */}
      {/*     <button onClick={addNewPost}
             className={classes.btn}>Add post</button> */}
      {/* </div> */}
      {/* <Post like={PostData[0].like}
            message={PostData[0].message} /> */}
      {/* <Post like={PostData[1].like}
            message={PostData[1].message}/> */}
      {/* /!*<Post like={PostData[2].like}
            message={PostData[2].message}/>*!/ */}
      {/* </div> */}
    </div>
  );
};
MyPost.propTypes = {
  PostData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      like: PropTypes.number,
      message: PropTypes.string,
    }),
  ).isRequired,
  addPost: PropTypes.func.isRequired,
  post: PropTypes.arrayOf().isRequired,
};
export default React.memo(MyPost);

//  CLASS COMPONENT - OPTIMISATION =>
//  "shouldComponentUpdate" end "PureComponent"
// class MyPost extends PureComponent {  // OPTIMISATION - noy RENDER
//
//     // shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //   return   nextProps !== this.props  ||  nextState !== this.state
//     // }
//
//     render() {
//         // console.log('RENDER')
//         let PostUser = this.props.PostData.map(p =>
//         <Post like={p.like} message={p.message} id={p.id} key={p.id}/>);
//
//         // let newPostText = React.createRef();
//
//         // const addNewPost = () => {
//         //     // let newPost = newPostText.current.value;
//         //     props.addPost();
//         //     // newPostText.current.value = '';
//         //     // props.addChangeText('')
//         //     // let action = addNewPostActionCreator();
//         //     // props.dispatch(action);
//         // }
//         //
//         // const handleChange = () => {
//         //     let newPost = newPostText.current.value;
//         //     props.addChangeText(newPost)
//         //     // props.dispatch(handleChangeActionCreator(newPost));
//         //     console.log(newPost)
//         // }
//
//         const onSubmit = (value) => {
//
//             this.props.addPost(value.newText)
//         }
//
//         return (
//             <div className={classes.posts}>
//                 <h4 className={classes.head}>{this.props.post}</h4>
//
//                 <MyPostForm onSubmit={onSubmit}/>
//                 {PostUser}
//
//                 {/*<div>*/}
//                 {/* <div className={classes.block}>*/}
//                 {/*     <textarea ref={newPostText} onChange={handleChange}
//                 value={props.newText} placeholder={'add post'}/>*/}
//   {/*     <button onClick={addNewPost}
//   className={classes.btn}>Add post</button>*/}
//                 {/* </div>*/}
//     {/* <Post like={PostData[0].like} message={PostData[0].message} />*/}
//    {/* <Post like={PostData[1].like} message={PostData[1].message}/>*/}
//   {/* /!*<Post like={PostData[2].like} message={PostData[2].message}/>*!/*/}
//                 {/*</div>*/}
//
//             </div>
//
//         )
//
//     }
// }
//
//
// export default MyPost
