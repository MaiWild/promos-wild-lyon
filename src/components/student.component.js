import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Typography,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardActionsStyled } from './student.styled';

export const Student = ({ name, github, mail, stack, cv, portrait }) => (
  <Card>
    <CardActionArea>
      <CardMedia component="img" image={portrait} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <div>
          {stack.map(icon => (
            <FontAwesomeIcon icon={['fab', icon]} size="2x" />
          ))}
        </div>
      </CardContent>
    </CardActionArea>
    <CardActionsStyled disableSpacing>
      <Link href={github}>
        <FontAwesomeIcon icon={['fab', 'github']} /> {github}
      </Link>
      <Link href={`mailto:${mail}`}>
        <FontAwesomeIcon icon={['fas', 'at']} /> {mail}
      </Link>
      <Button size="small" color="primary">
        Voir le C.V.
      </Button>
    </CardActionsStyled>
  </Card>
);
