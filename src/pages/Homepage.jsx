import { Link } from "react-router-dom";
<<<<<<< HEAD
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
=======
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav"
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684

export default function Homepage() {
  return (
    <main className={styles.homepage}>
<<<<<<< HEAD
      <PageNav />

=======
      <PageNav/>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
<<<<<<< HEAD
        <Link to="/login" className="cta">
=======
        <Link to="/app" className="cta">
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
