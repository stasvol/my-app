import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';

import {
    disableButtonFol, follow, FollowThunkCreator, getUsersThunkCreator,
    setCurrentPage, setTotalUsersCount, setUsers, togglePreloader,
    unfollow, unFollowThunkCreator,} from "../../Redux/user_reducer";
import UsersF from './UserF';
import Preloader from "../Common/preloader/preloader";
import {withAuthRedirect} from "../../Hock/withAuthRedirect";
import {
    currentPageSelector, disableButtonSector,
    getUsersSelector, isLoadingSelector,
    pageSizeSelector,
    totalUsersCountSelector,
} from "../../Redux/users_selectors";

const UsersApiContainer = (props) => {

    // componentDidMount() {
    //
    //     this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    //
    // }
    useEffect(()=>{
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    },[props.getUsersThunkCreator,props.currentPage, props.pageSize])


   const onChangePage = (pageNumber) => {
        props.getUsersThunkCreator(pageNumber)
    }

    return (
            <>
                {props.isLoading ? <Preloader/> : null}
                <UsersF onChangePage={onChangePage} currentPage={props.currentPage}
                        totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                        users={props.users} follow={props.follow} unfollow={props.unfollow}
                        disableButtonFol={props.disableButtonFol} disableButton={props.disableButton}
                        FollowThunkCreator={props.FollowThunkCreator}
                        unFollowThunkCreator={props.unFollowThunkCreator} />
            </>
        )
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isLoading: isLoadingSelector(state),
        disableButton: disableButtonSector(state)
    }
}

export default compose(
    withAuthRedirect,
    connect (mapStateToProps, {follow, unfollow, setUsers,
             setCurrentPage, setTotalUsersCount, togglePreloader,
             disableButtonFol, getUsersThunkCreator, FollowThunkCreator,
             unFollowThunkCreator  }))
(UsersApiContainer);