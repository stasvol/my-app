import React from "react";
import {Field, reduxForm} from "redux-form";

import {required} from "../News/NewSetFormValidators";
import {maxLength30, minLength3} from "./validatorSetting";
import {Textarea} from "../News/FormControl";

const SettingForm =({handleSubmit}) =>(
        <div>
            <form onSubmit={handleSubmit}>
                <Field name={'newMessage'}  component={Textarea} placeholder={'add data'}
                                             validate={[required,minLength3,maxLength30]}/>
                <div>
                    <button>ADD</button>
                </div>
            </form>
        </div>

    )

const SettingFormContainer = reduxForm({
    form: 'setOne'
})(SettingForm)

export default SettingFormContainer