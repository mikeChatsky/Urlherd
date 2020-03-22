import React, { FC } from "react";
import { InputField } from "@kiwicom/orbit-components";
import { ButtonLink } from "@kiwicom/orbit-components";
import {
  Link as LinkIcon,
  MinusCircle
} from "@kiwicom/orbit-components/lib/icons";

interface LinkFieldProps {
  name: string;
  register: (ref: Element | null) => void;
  onRemove: () => void;
  isRemovable?: boolean;
  error?: string;
}

const LinkField: FC<LinkFieldProps> = ({
  name,
  onRemove,
  isRemovable = true,
  register,
  error
}) => (
  <InputField
    type="text"
    name={name}
    placeholder="http://www.your.link.here"
    ref={register}
    error={!!error && <span>{error}</span>}
    spaceAfter="largest"
    prefix={
      <LinkIcon size="small" color={!!error ? "critical" : "secondary"} />
    }
    suffix={
      isRemovable && (
        <ButtonLink
          iconLeft={<MinusCircle ariaHidden />}
          onClick={onRemove}
          title="remove link"
          color="critical"
          type="secondary"
          transparent
        />
      )
    }
  />
);

export default LinkField;
