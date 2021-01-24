import React from 'react';
import { Grid } from '@material-ui/core';

export const StudentsGrid = ({ children }) => (
  <Grid container spacing={4}>
    {React.Children.map(children, child => (
      <Grid item xs>
        {child}
      </Grid>
    ))}
  </Grid>
);
