// import {useEffect} from "react";
//
// export const useNewsContainer = (match,history,props) => {
//     const  methodMontUpdate = () => {
//         props.newAuthThunk(props.userId,props.email,props.login)
//
//         let userId = match.params.userId
//         if (!userId){
//             userId = props.idAuth
//             if (!userId) {
//                 history.push("/News")
//             }
//         }
//
//         props.setProfThunk(userId)
//         props.newGetStatusThunk(userId)
//     }
//     useEffect(()=>{
//         methodMontUpdate()
//     },[match.params.userId])
//     return {methodMontUpdate}
// }