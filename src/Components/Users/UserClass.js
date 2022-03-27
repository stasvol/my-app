import React, {Component} from 'react'
import * as axios from "axios";
import photo from "../../Photo/Images/user.png";
import classes from "./user.module.css";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });

    }


    render() {

         let pageCount = Math.ceil((this.props.totalUsersCount/this.props.pageSize)/200)
         let  pages = [];
         for (let i=1;  i <= pageCount; i++ ){
                 pages.push(i);
         }

        return (

            <div>
                <div className={classes.pagesNum}>
                    { pages.map(p => {

                      return  <span className={ this.props.currentPage === p  && classes.pagin}
                      onClick={(e) =>{this.onChangePage(p)}}> {p} </span>}) }

                </div>

                {
                    this.props.users.map(user => <div key={user.id}>
                        <div>
                            {/*<img src={user.photoUrl} className={classes.photo}/>*/}
                            <img src={user.photos.small != null ? user.photos.small : photo} className={classes.photo}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>

                    </div>)
                }
            </div>
        )

    }
}

export default Users