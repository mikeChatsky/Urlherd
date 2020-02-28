import React from 'react';
import { Input } from '@smooth-ui/core-sc';
import { FieldProps } from 'formik';

const LinkInput: React.FC<{ field?: FieldProps<any> }> = ({ field }) => {
  return (
    <Input
      type="text"
      placeholder="http://www.your.link.here"
      {...field}
    ></Input>
  );
};

export default LinkInput;
