<<<<<<< HEAD
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
=======
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  // console.log(cities);
  const { cities, isloading } = useCities();
  if (isloading) {
    return <Spinner />;
    
    
  }
  if (!cities.length) {
    return (
      <Message
        message={"start adding the cites in the list by clicking on the map"}
      />
    );
  }
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} />
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
      ))}
    </ul>
  );
}

export default CityList;
