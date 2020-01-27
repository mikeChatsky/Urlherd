import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import Input from '../components/LinkInput';
import { Button, Box, Boxer } from "@smooth-ui/core-sc";
import StretchingBoxer from "../components/StretchingBoxer";

type props = {
  onSubmit: (links: Array<string>) => Promise<void>;
};

const LinksForm: React.FC<props> = ({ onSubmit }) => (
  <StretchingBoxer row justifyContent="center" alignItems="center">
    <Formik
      onSubmit={async (values): Promise<void> => {
        await onSubmit(values.links);
      }}
      initialValues={{
        links: ['https://www.facebook.com/', 'https://www.google.com/']
      }}
    >
      {props => (
        <Box row justifyContent="center" forwardedAs={Form}>
          <Boxer col={3 / 6}>
            <FieldArray name="links" render={arrayHelpers =>
              (props.values.links && props.values.links.length) ? (props.values.links.map((link, index) => (
                <Field name={`links.${index}`} render={({ field, meta }) => (
                  <Input type="text" placeholder="http://www.google.com" {...field}></Input>
                )} />
              ))) : (<span>add new</span>)
            } />
          </Boxer>
          <Box col={1 / 6} justifyContent="center" alignItems="center" row>
            <Button type='submit'>Submit</Button>
          </Box>
        </Box>
      )}
    </Formik>
  </StretchingBoxer>
);

export default LinksForm;
