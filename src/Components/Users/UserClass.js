// import React, { useEffect } from 'react';
// import * as axios from 'axios';
//
// import PropTypes from 'prop-types';
// import photo from '../../Photo/Images/user.png';
// import classes from './user.module.css';
//
// const Users = ({
//   users,
//   currentPage,
//   pageSize,
//   setUsers,
//   setTotalUsersCount,
//   setCurrentPage,
//   totalUsersCount,
//   unfollow,
//   follow,
// }) => {
//   // componentDidMount() {
//   //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?
//   //     page=${this.props.currentPage}&count=${this.props.pageSize}`)
//   //         .then(response => {
//   //         this.props.setUsers(response.data.items);
//   //         this.props.setTotalUsersCount(response.data.totalCount);
//   //     });
//   // }
//   useEffect(() => {
//     axios.get(
//       `https://social-network
//       .samuraijs.com/api/1.0/users?
//        page=${currentPage}&
//        count=${pageSize}`.then(response => {
//   setUsers(response.data.items);
//         setTotalUsersCount(response.data.totalCount);
// }),
//     );
//   }, [currentPage, pageSize, setTotalUsersCount, setUsers]);
//
//   const onChangePage = pageNumber => {
//     setCurrentPage(pageNumber);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?
//         page=${pageNumber}&count=${pageSize}`,
//       )
//       .then(response => {
//         setUsers(response.data.items);
//       });
//   };
//
//   const pageCount = Math.ceil(totalUsersCount / pageSize / 200);
//   const pages = [];
//   for (let i = 1; i <= pageCount; i++) {
//     pages.push(i);
//   }
//
//   return (
//     <div>
//       <div className={classes.pagesNum}>
//         {pages.map((page, i) => {
//           return (
//             <span
//               key={page[i]}
//               className={currentPage === page && classes.pagin}
//               onClick={() => {
//                 onChangePage(page);
//               }}
//             >
//               {' '}
//               {page}
//             </span>
//           );
//         })}
//       </div>
//       {users.map(({ id, photos, followed, name, status }) => (
//         <div key={id}>
//           <div>
//             {/* <img src={user.photoUrl} className={classes.photo}/> */}
//             <img
//               alt=""
//               className={classes.photo}
//               src={photos.small != null ? photos.small : photo}
//             />
//           </div>
//           <div>
//             {followed ? (
//               <button
//                 onClick={() => {
//                   unfollow(id);
//                 }}
//               >
//                 UnFollow
//               </button>
//             ) : (
//               <button
//                 onClick={() => {
//                   follow(id);
//                 }}
//               >
//                 Follow
//               </button>
//             )}
//           </div>
//           <div>{name}</div>
//           <div>{status}</div>
//           <div>user.location.country</div>
//           <div>user.location.city</div>
//         </div>
//       ))}
//     </div>
//   );
// };
// Users.propTypes = {
//   users: PropTypes.shape({
//     id: PropTypes.number,
//     photos: PropTypes.string,
//     followed: PropTypes.bool,
//     name: PropTypes.string,
//     status: PropTypes.string,
//     map: PropTypes.func.isRequired,
//   }).isRequired,
//   currentPage: PropTypes.number.isRequired,
//   setUsers: PropTypes.func.isRequired,
//   unfollow: PropTypes.bool.isRequired,
//   follow: PropTypes.bool.isRequired,
//   totalUsersCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   setTotalUsersCount: PropTypes.func.isRequired,
//   setCurrentPage: PropTypes.func.isRequired,
// };
//
// export default Users;
