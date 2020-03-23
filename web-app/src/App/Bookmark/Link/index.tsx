import React, { FC } from 'react';
import {
  NewWindow,
  Link as LinkIcon
} from '@kiwicom/orbit-components/lib/icons';
import { TextLink } from '@kiwicom/orbit-components';
import IconWrapper from '../../../components/IconWrapper';

interface LinkProps {
  link: string;
}

const Link: FC<LinkProps> = ({ link }) => {
  return (
    <IconWrapper icon={LinkIcon}>
      <TextLink
        href={link}
        size="large"
        type="primary"
        external
        icon={<NewWindow />}
      >
        {link}
      </TextLink>
    </IconWrapper>
  );
};

export default Link;
