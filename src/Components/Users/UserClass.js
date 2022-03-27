import React, {Component, useEffect} from 'react'
import * as axios from "axios";

import photo from "../../Photo/Images/user.png";
import classes from "./user.module.css";


const Users = (props) => {

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?
    //     page=${this.props.currentPage}&count=${this.props.pageSize}`)
    //         .then(response => {
    //         this.props.setUsers(response.data.items);
    //         this.props.setTotalUsersCount(response.data.totalCount);
    //     });
    // }
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
            page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
            });
    }, [])

    const onChangePage = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            props.setUsers(response.data.items);
        });

    }

    let pageCount = Math.ceil((props.totalUsersCount / props.pageSize) / 200)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (

        <div>
            <div className={classes.pagesNum}>
                {pages.map(p => {

                    return <span className={props.currentPage === p && classes.pagin}
                                 onClick={(e) => {
                                     onChangePage(p)
                                 }}> {p} </span>
                })}

            </div>

            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        {/*<img src={user.photoUrl} className={classes.photo}/>*/}
                        <img src={user.photos.small != null ? user.photos.small : photo} className={classes.photo}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
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

export default Users