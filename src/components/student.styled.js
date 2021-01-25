import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

import theme from '../theme';

export const AvatarStyled = styled(Avatar)`
  width: ${theme.spacing(14)}px;
  height: ${theme.spacing(14)}px;
  margin: 0 auto ${theme.spacing(2)}px;
`;
