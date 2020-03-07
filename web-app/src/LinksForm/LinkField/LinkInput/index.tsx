import React, { FC } from 'react';
import { Input } from '@smooth-ui/core-sc';
import { FieldProps } from 'formik';

const LinkInput: FC<{ field?: FieldProps<any> }> = ({ field }) => {
  return (
    <Input
      type="text"
      placeholder="http://www.your.link.here"
      {...field}
    ></Input>
  );
};

export default LinkInput;
