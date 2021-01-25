import Head from 'next/head';

import { students } from '../data/promo';
import { Student } from '../src/components/student.component';
import { StudentsGrid } from '../src/components/studentGrid.component';
import { Box, Typography } from '@material-ui/core';

const TITLE = 'Promo développeur.ses avancé.es web et mobile';
const SUB_TITLE = 'Alternance avril 2021 - avril 2022';

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box m={8}>
        <Typography component="h1" variant="h3" align="center" m={1}>
          {TITLE}
        </Typography>
        <Typography component="h2" variant="h6" align="center" m={2}>
          {SUB_TITLE}
        </Typography>
      </Box>

      {students && students.length ? (
        <StudentsGrid>
          {students.map(student => (
            <Student {...student} key={student.name} />
          ))}
        </StudentsGrid>
      ) : (
        <p>très prochainement...</p>
      )}
    </>
  );
}
