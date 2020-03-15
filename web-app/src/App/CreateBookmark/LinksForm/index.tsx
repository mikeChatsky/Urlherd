import React, { FC } from 'react';
import * as yup from 'yup';
import { useForm, useFieldArray } from 'react-hook-form';
import { GoPlus } from 'react-icons/go';
import { Button } from '@kiwicom/orbit-components';

import LinkField from './LinkField';
import { useBookmark } from '../../../api/bookmark';

const validationSchema = yup.object().shape({
  links: yup.array(yup.string().url())
});

const LinksForm: FC = () => {
  const { register, control, handleSubmit, errors } = useForm({
    defaultValues: { links: [''] },
    validationSchema,
    mode: 'onBlur'
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'links' });

  const { phase } = useBookmark();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
          <>
            {fields?.map((link, index) => (
              <LinkField
                key={link.id}
                name={`links[${index}]`}
                isRemovable={fields.length > 1}
                onRemove={() => remove(index)}
                register={register}
                error={errors && errors.links && errors.links[index]}
              ></LinkField>
            ))}
            {/* <Button title="add" type="secondary" onClick={() => append('')}>
              <GoPlus />
            </Button> */}
          </>
          {/* <Button title="submit" type="submit">
            Submit
          </Button> */}
    </form>
  );
};

export default LinksForm;
