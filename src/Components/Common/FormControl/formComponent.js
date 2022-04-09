import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import classes from './FormControl.module.css';

const FormComponent = ({ meta, children }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? classes.error : null}>
      <div>
        {children}
        {/* <textarea  {...input} {...props} /> */}
      </div>

      {meta.touched && meta.error && <span className={classes.span}>{meta.error}</span>}
    </div>
  );
};
FormComponent.propTypes = {
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
    }),
  ).isRequired,
  children: PropTypes.node.isRequired,
  // input: PropTypes.element.isRequired,
  // child: PropTypes.node.isRequired,
};

export const Textarea = props => {
  // const {input} = props
  const { input, meta, child, ...restProps } = props;
  return (
    <FormComponent {...props}>
      <textarea {...input} {...restProps} />{' '}
    </FormComponent>
  );
};
Textarea.propTypes = {
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
    }),
  ).isRequired,
  // children: PropTypes.node.isRequired,
  input: PropTypes.element.isRequired,
  child: PropTypes.node.isRequired,
};

export const Input = props => {
  // const {input} = props
  const { input, meta, child, ...restProps } = props;
  return (
    <FormComponent {...props}>
      <input {...input} {...restProps} />{' '}
    </FormComponent>
  );
};
Input.propTypes = {
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
    }),
  ).isRequired,
  // children: PropTypes.node.isRequired,
  input: PropTypes.element.isRequired,
  child: PropTypes.node.isRequired,
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = '',
) => (
  <div>
    <Field
      component={component}
      name={name}
      placeholder={placeholder}
      validate={validators}
      {...props}
    />{' '}
    {text}
  </div>
);

// meta: { touched, error, warning }

// export const Input = ({input, meta, ...props }) => {
//
//     const hasError = meta.touched &&  meta.error;
//
//     return(
//         <div className={ hasError ? classes.error : null} >
//
//             <div >
//                 <input  {...input} {...props} />
//             </div>
//
//      { meta.touched &&  meta.error
//       && <span className={classes.span}>{meta.error}</span> }
//
//         </div>
//     )
// }
// export const Textarea = ({input, meta, ...props }) => {
//
//     const hasError = meta.touched &&  meta.error;
//
//     return(
//         <div className={ hasError ? classes.error : null} >
//
//             <div >
//                 <textarea  {...input} {...props} />
//             </div>
//
//      { meta.touched &&  meta.error &&
//      <span className={classes.span}>{meta.error}</span> }
//
//         </div>
//     )
// }
