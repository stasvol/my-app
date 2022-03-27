import React from 'react';

import Paginator from "./Paginator";
import User from "./user";

const UsersF = ({currentPage,onChangePage,totalUsersCount,
                    pageSize,users,disableButton,unFollowThunkCreator,
                    FollowThunkCreator,...props}) => (

        <div>
             <Paginator currentPage={currentPage} onChangePage={onChangePage}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            {
                    users.map((user,i) => <User key={i} user={user}
                                                disableButton={disableButton}
                                                unFollowThunkCreator={unFollowThunkCreator}
                                                FollowThunkCreator={FollowThunkCreator}/>
                                                )

            }
        </div>
    )

export default UsersF