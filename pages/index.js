import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { students } from '../data/promo';
import { Student } from '../src/components/student.component';
import { StudentsGrid } from '../src/components/studentGrid.component';

const TITLE = 'Promo développeur.ses avancé.es web et mobile';
const SUB_TITLE = 'Alternance avril 2021 - avril 2022';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{TITLE}</h1>
        <h2 className={styles.subtitle}>{SUB_TITLE}</h2>

        {students && students.length ? (
          <StudentsGrid>
            {students.map(student => (
              <Student {...student} key={student.name} />
            ))}
          </StudentsGrid>
        ) : (
          <p>très prochainement...</p>
        )}
      </main>

      <footer className={styles.footer}>
        <p>
          Done by <a href="https://florentbarriol.com">Florent Barriol</a>.
        </p>
      </footer>
    </div>
  );
}
