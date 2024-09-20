import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
=======
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
<<<<<<< HEAD
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
=======
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const {currentCity} = useCities()
  const { cityName, date, emoji, id, position } = city;
  const lat = position.lat;
  const lng = position.lng;
  // console.log(position);
  // console.log(emoji);
  return (
    <li>
      <Link className={`${styles.cityItem} ${id===currentCity.id ? styles["cityItem--active"]:""}`} to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}> {emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times; </button>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
      </Link>
    </li>
  );
}

export default CityItem;
