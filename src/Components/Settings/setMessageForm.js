import {Field, reduxForm} from "redux-form";

import {Textarea} from "../News/FormControl";
import {required} from "../News/NewSetFormValidators";
import {maxLength30, minLength3} from "./validatorSetting";

import classes from "./Setting.module.css";

const SetMessageForm = (props) =>{

    const {handleSubmit} = props

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field  name={'newPostMesText'} component={Textarea} placeholder={'add post2'}
                        validate={[required,minLength3,maxLength30]} />
            </div>
            <div>
                <button  className={classes.button} >Add Post</button>
            </div>

        </form>
    )
}
export const SetMessageFormRedux = reduxForm({
    form: 'setTwo'
})(SetMessageForm);