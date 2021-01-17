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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Promotion Développeur alternant #42</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Promotion Développeur alternant #42</h1>

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
