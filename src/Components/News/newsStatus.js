import React from "react"
// import {Field, reduxForm} from "redux-form";
// import {maxLength, minLength, required} from "./NewSetFormValidators";
// import {Input, Textarea} from "./FormControl";
// import {useState, useEffect} from "react";
import {NewsStatusFormRedux} from "./NewsStatusForm";
import {useNewsStatus} from "../../Hook/useNewsStatus";
// class NewsStatus extends React.Component {
//
//     state = {
//         editMod: false,
//         status: this.props.status
//     }
//
//     activeEditMod(){
//
//         this.setState({
//             editMod: true
//         })
//         // this.props.newSetStatusThunk()
//     }
//     deActiveEditMod(value){
//         this.setState({
//             editMod: false
//         })
//         this.props.newPutStatusThunk(value.newPutStatus)
//         // (this.state.status)
//         // console.log(value.newPutStatus)
//     }
//     // updateChangeStatus=(e)=>{
//     //
//     //     this.setState({
//     //         status: e.target.value
//     //     })
//     //
//     // }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//         if(prevProps.status !== this.props.status) {
//             this.setState({
//                 status:this.props.status
//             })
//         }
//     }
//
//     render(){
//         return(
//             <div>
//                 {!this.state.editMod
//                     ?
//                 <div>
//                     <span onDoubleClick={this.activeEditMod.bind(this)}>{this.props.status  ? this.props.status : "I'm COOL !"}</span>
//                 </div>
//                      :
//                 <div>
//                     <NewsStatusFormRedux onSubmit={this.deActiveEditMod.bind(this)}/>
//                     {/*<input onChange={this.updateChangeStatus} autoFocus={true}*/}
//                     {/*       onBlur={this.deActiveEditMod.bind(this)} value={this.state.status }/>*/}
//                 </div>
//                 }
//             </div>
//         )
//     }
// }
//
// const maxLength30 = maxLength(30);
// const minLength3 =  minLength(3);
//
// const NewsStatusForm = (props) =>{
//
//
//
//     const {handleSubmit} = props
//
//     return(
//         <form  onSubmit={handleSubmit}>
//             <Field name={'newPutStatus'} component={Input} placeholder={'add status'}
//                   validate={[required,maxLength30,minLength3]} />
//         </form>
//     )
// }
// const NewsStatusFormRedux = reduxForm({ form:'newsForm'})(NewsStatusForm)
//
//
// export default NewsStatus

const NewsStatus = ({newPutStatusThunk,status}) => {

    // const [editMod, setEditMod] = useState(false);
    // const [statusNew, setStatus] = useState(status);
    //
    // useEffect(()=>{
    //     setStatus(status)
    // }, [status])
    //
    //
    // const activeEditMod = () => {
    //
    //     setEditMod(true);
    //
    //     // this.props.newSetStatusThunk()
    // }
    // const deActiveEditMod = (value) => {
    //     setEditMod(false);
    //     newPutStatusThunk(value.newPutStatus)
    //     // (this.state.status)
    //     // console.log(value.newPutStatus)
    // }
const {editMod, statusNew, activeEditMod, deActiveEditMod} = useNewsStatus(newPutStatusThunk,status)

    return (
        <div>
            {!editMod
                ?
                <div>
                    <span onDoubleClick={activeEditMod}>{status ? status : "I'm COOL !"}</span>
                </div>
                :
                <div>
                    <NewsStatusFormRedux  onSubmit={deActiveEditMod} value={statusNew}/>
                    {/*<input onChange={this.updateChangeStatus} autoFocus={true}*/}
                    {/*       onBlur={this.deActiveEditMod.bind(this)} value={this.state.status }/>*/}
                </div>
            }
        </div>
    )

}

export default NewsStatus
// const maxLength30 = maxLength(30);
// const minLength3 = minLength(3);
//
// const NewsStatusForm = (props) => {
//
//
//     const {handleSubmit} = props
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field name={'newPutStatus'} component={Input} placeholder={'add status'}
//                    validate={[required, maxLength30, minLength3]} />
//         </form>
//     )
// }
// const NewsStatusFormRedux = reduxForm({form: 'newsForm'})(NewsStatusForm)
//
//
// export default NewsStatus
