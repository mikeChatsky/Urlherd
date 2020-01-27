import React from 'react';
import styled from 'styled-components';
import { Input } from "@smooth-ui/core-sc";

const LinkInput: React.FC = props => <Input {...props} />;

const styledInput = styled(LinkInput)`
  margin: 10px 0;
  color: ${props => props.theme.colors.secondary};
`;

export default styledInput;
