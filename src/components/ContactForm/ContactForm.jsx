import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';
import data from '../../dataUsers.json';

const initialValues = {
  name: '',
  number: '',
  id:'',
};

export default function ContactForm() {
  const FieldId = useId();
  const contactSchema = yup.object().shape({
    name: yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required field"),
    number:yup.string().min(3, "Too Short!").max(10, "Too Long!").required("Required field")
  });
  
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    
    // const addContact = (newContact)=>{

    // }
    
    data.push(JSON.stringify(values));






    console.log(values);
   
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
      <Form className={css.form}>
        <label htmlFor={`${FieldId}-name`}>Name</label>
        <Field className={css.field} type="text" name="name" id={`${FieldId}-name`} />
        <ErrorMessage className={css.error} name='name' component='span' />
        <label htmlFor={`${FieldId}-number`}>Number</label>
        <Field
          className={css.field}
          type="tel"
          name="number"
          placeholder="xxx-xx-xx"
          id={`${FieldId}-number`}
        />
        <ErrorMessage className={css.error} name='number' component='span' />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
