import React from "react";

import classes from './Post.module.css'

const Post = ({message,like}) =>(

        <div>
            <div className={classes.post}>Post: {message}</div>
            <img className={classes.imgAvat} src={'https://memax.' +
             'club/wp-content/uploads/2019/06/Krasivye_avatarki_dlya_kartinki_1_09074657.jpg'}/>
            <span>Like: </span> {like}

        </div>
    )

export default Post