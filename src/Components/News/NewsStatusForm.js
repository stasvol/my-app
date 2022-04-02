import React from "react";
import {Field, reduxForm} from "redux-form";

import {minLength3, maxLength30, required} from "./NewSetFormValidators";
import {Input} from "./FormControl";

const NewsStatusForm = ({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
            <Field name={'newPutStatus'} component={Input} placeholder={'add status'}
                   validate={[required, maxLength30, minLength3]} />
        </form>
    )

export const NewsStatusFormRedux = reduxForm({form: 'newsForm'})(NewsStatusForm)

