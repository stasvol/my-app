import React from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';

import {
    disableButtonFol, follow, FollowThunkCreator, getUsersThunkCreator,
    setCurrentPage, setTotalUsersCount, setUsers, togglePreloader,
    unfollow, unFollowThunkCreator,} from "../../Redux/user_reducer";
import UsersF from './UserF';
import Preloader from "../Common/preloader/preloader";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {
    currentPageSelector, disableButtonSector,
    getUsersSelector, isLoadingSelector,
    pageSizeSelector,
    totalUsersCountSelector,
} from "../../Redux/users_selectors";


class UsersApiContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onChangePage = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber)

    }


    render() {

        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <UsersF onChangePage={this.onChangePage} currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                        users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                        disableButtonFol={this.props.disableButtonFol} disableButton={this.props.disableButton}
                        FollowThunkCreator={this.props.FollowThunkCreator}
                        unFollowThunkCreator={this.props.unFollowThunkCreator} />
            </>
        )

    }
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