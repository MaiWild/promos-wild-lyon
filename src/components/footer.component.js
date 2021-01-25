import React from 'react';
import { Box } from '@material-ui/core';

import theme from '../theme';

export const Footer = () => (
  <Box
    component="footer"
    borderTop={1}
    borderColor={theme.palette.border}
    align="center"
    mt={8}
  >
    <p>
      Done by <a href="https://florentbarriol.com">Florent Barriol</a>.
    </p>
  </Box>
);
