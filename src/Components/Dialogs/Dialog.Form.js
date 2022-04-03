import React from 'react'
import { Field, reduxForm } from 'redux-form';

import {Textarea} from "../Common/FormControl/formComponent";
import { maxLength30, minLength3, required} from "../../Utility/ValidateForm/validator";

import classes from "./Dialog.module.css";

// const maxLength30 =  maxLength(30);
// const minLength2 =  minLength(2);

let DialogForm = ({ handleSubmit }) =>(

         <form onSubmit={handleSubmit}>
             <div >
                 {/*<label htmlFor="dialog">Add Message</label>*/}
             <Field name={'newMessageText'} component={Textarea}
                  validate={[required,maxLength30,minLength3]} placeholder={'add message'} />
             </div>
             <button  className={classes.btn}>Add Message</button>

         </form>

     )

  DialogForm = reduxForm ({
    form: 'dialogMessage'
})(DialogForm);

export default DialogForm