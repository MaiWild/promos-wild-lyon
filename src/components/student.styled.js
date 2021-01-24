import { CardActions } from '@material-ui/core';
import styled from 'styled-components';
import theme from '../theme';

export const CardActionsStyled = styled(CardActions)`
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: ${theme.spacing()}px;
  }
`;
