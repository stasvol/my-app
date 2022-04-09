import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import classes from './News.module.css';

export const FormControl = ({ meta, children }) => {
  const someError = meta.touched && meta.error;

  return (
    <div>
      <div className={someError && classes.divError}>
        {children}
        {/* <textarea {...input} {...props} /> */}
      </div>
      <div>{someError && <span className={classes.spanError}>{meta.error}</span>}</div>
    </div>
  );
};
FormControl.propTypes = {
  // input: PropTypes.element.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

// export const Textarea = ({input,meta, ...props})=>{
//
//     const someError =  meta.touched && meta.error
//
//    return (
//        <div>
//            <div className={ someError &&  classes.divError}>
//            <textarea {...input} {...props} />
//            </div>
//            <div>
//  { someError  &&   <span className={classes.spanError}>{meta.error}</span>}
//            </div>
//        </div>
//    )
//
// }
export const Textarea = props => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
Textarea.propTypes = {
  input: PropTypes.element.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export const Input = props => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
Input.propTypes = {
  input: PropTypes.element.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
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
