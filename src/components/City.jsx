<<<<<<< HEAD
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import BackButton from "./BackButton";
import styles from "./City.module.css";
import Spinner from "./Spinner";
=======
import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButton from "./BackButton";
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
<<<<<<< HEAD
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
=======
  // TEMP DATA
  const { id } = useParams();
  console.log(id);
  const { getCity, currentCity,isLoading } = useCities();

  // write the effect here
  useEffect(() => {
    getCity(id);
  }, [id]);

  
  const { cityName, emoji, date, notes } = currentCity;
 if(isLoading) return <Spinner/>;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name {`${id}`}</h6>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
<<<<<<< HEAD
        <h6>Learn more</h6>
=======
        <h6>Learn more </h6>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

<<<<<<< HEAD
      <div>
        <BackButton />
      </div>
=======
      <div> <BackButton /></div>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
    </div>
  );
}

export default City;
