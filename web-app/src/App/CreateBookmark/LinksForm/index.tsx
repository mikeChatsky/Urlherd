import React, { FC } from "react";
import * as yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import { Button, Stack } from "@kiwicom/orbit-components";
import { Plus, Send } from "@kiwicom/orbit-components/lib/icons";
import styled from "styled-components";

import LinkField from "./LinkField";
import { useBookmark } from "../../../api/bookmark";

const validationSchema = yup.object().shape({
  links: yup
    .array(
      yup
        .string()
        .required("")
        .url("should be a valid url like: http://google.com")
    )
    .required()
});

type LinksSchema = yup.InferType<typeof validationSchema>;

const SubmitButton = styled(Button)`
  align-self: flex-end;
`;

const LinksForm: FC = () => {
  const { register, control, handleSubmit, errors } = useForm<LinksSchema>({
    defaultValues: { links: [""] },
    validationSchema,
    mode: "onBlur"
  });

  const { fields, append, remove } = useFieldArray({ control, name: "links" });

  const { submitBookmark } = useBookmark();

  return (
    <form
      onSubmit={handleSubmit(({ links }) => {
        submitBookmark(links);
      })}
    >
      <Stack direction="column">
        <Stack spacing="none">
          {fields?.map((link, index) => (
            <LinkField
              key={link.id}
              name={`links[${index}]`}
              isRemovable={fields.length > 1}
              onRemove={() => remove(index)}
              register={register}
              error={errors?.links && errors.links[index]?.message}
            />
          ))}
          <Button
            title="add"
            type="primary"
            iconLeft={<Plus />}
            onClick={() => append({})}
          />
        </Stack>
        <SubmitButton
          bordered
          title="submit"
          type="primary"
          submit
          iconLeft={<Send />}
        >
          Submit
        </SubmitButton>
      </Stack>
    </form>
  );
};

export default LinksForm;
