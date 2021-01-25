import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { students } from '../data/promo';

const People = ({ name, github, mail, stack, cv, portrait }) => (
  <div className={styles.card}>
    <img src={portrait} className={styles.portrait} />
    <h2>{name}</h2>
    <ul className={styles.stack}>
      {stack.map(icon => (
        <li>
          <FontAwesomeIcon icon={['fab', icon]} size="2x" key={icon} />
        </li>
      ))}
    </ul>
    <p>
      <a href={github}>{github}</a>
    </p>
    <p>
      <a href={`mailto:${mail}`}>{mail}</a>
    </p>
    <a href={cv} className={styles.button}>
      Voir le C.V.
    </a>
  </div>
);

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

        <div className={styles.grid}>
          {students.map(student => (
            <People {...student} key={student.name} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        Done by <a href="https://florentbarriol.com"> Florent Barriol</a>.
      </footer>
    </div>
  );
}
