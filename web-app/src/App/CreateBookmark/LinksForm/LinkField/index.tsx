import React, { FC } from 'react';
import { GoLink } from 'react-icons/go';
import { AiFillMinusCircle } from 'react-icons/ai';
import styled from 'styled-components';
import InputField from '@kiwicom/orbit-components/lib/InputField';

import IconWrapper from '../../../../components/IconWrapper';

const DeleteIcon = styled(AiFillMinusCircle)`
  margin: 0 10px;
  color: ${({
    theme: {
      colors: { error }
    }
  }) => error};
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const PaddedBox = styled.div`
  padding: 0 10px;
`;

interface LinkFieldProps {
  name: string;
  register: (ref: Element | null) => void;
  onRemove: () => void;
  isRemovable?: boolean;
  error?: any;
}

const LinkField: FC<LinkFieldProps> = ({
  name,
  onRemove,
  isRemovable = true,
  register,
  error
}) => (
  <>
    <PaddedBox>
      <IconWrapper Icon={GoLink} error={!!error} height="50px">
        <InputField
          type="text"
          name={name}
          placeholder="http://www.your.link.here"
          ref={register}
        />
      </IconWrapper>
      {isRemovable && <DeleteIcon size="20" onClick={onRemove} />}
    </PaddedBox>
  </>
);

export default LinkField;
