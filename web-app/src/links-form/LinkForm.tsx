import React from 'react';
import { Formik, Form, Field } from 'formik';

const defaultNumOfFields = 3;

type props = {
  onSubmit: (links: Array<string>) => Promise<void>;
};

const LinkForm: React.FC<props> = ({ onSubmit }) => (
  <div>
    <Formik
      onSubmit={async (values): Promise<void> => {
        await onSubmit(values.links);
      }}
      initialValues={{
        links: ['https://www.facebook.com/', 'https://www.google.com/']
      }}
    >
      <Form>
        {new Array(defaultNumOfFields).map(index => (
          <Field key={index} type="text" />
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default LinkForm;
