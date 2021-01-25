import React from 'react';
import { Box, Grid } from '@material-ui/core';

export const StudentsGrid = ({ children }) => (
  <Box mt={4} mb={4}>
    <Grid container spacing={4}>
      {React.Children.map(children, child => (
        <Grid item xs={6} md={4} lg={3}>
          {child}
        </Grid>
      ))}
    </Grid>
  </Box>
);
