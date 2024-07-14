import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  php: Yup.boolean(),
  expertise: Yup.string().when('php', {
    is: true,
    then: Yup.string().required('Please select your expertise').oneOf(['beginner', 'intermediate', 'expert'], 'Invalid expertise level'),
    otherwise: Yup.string().nullable().default(null)
  }).nullable()
});




const MyForm = () => (
  <Formik
    initialValues={{ php: false, expertise: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ values }) => (
      <Form>
        <div>
          <label htmlFor="php">PHP</label>
          <Field type="checkbox" name="php" id="php" />
          <ErrorMessage name="php" component="div" style={{ color: 'red' }} />
        </div>

        {values.php && (
          <div>
            <label>Expertise</label>
            <div>
              <Field type="radio" name="expertise" value="beginner" id="beginner" />
              <label htmlFor="beginner">Beginner</label>
            </div>
            <div>
              <Field type="radio" name="expertise" value="intermediate" id="intermediate" />
              <label htmlFor="intermediate">Intermediate</label>
            </div>
            <div>
              <Field type="radio" name="expertise" value="expert" id="expert" />
              <label htmlFor="expert">Expert</label>
            </div>
            <ErrorMessage name="expertise" component="div" style={{ color: 'red' }} />
          </div>
        )}

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default MyForm;