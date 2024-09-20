<<<<<<< HEAD
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
=======
import CountryItem from "./countryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
<<<<<<< HEAD
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
=======

  // console.log(countries);
  // const countries =[];
  const {cities,isLoading} = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    
    return arr;
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  if (!countries.length) {
    return (
      <Message
        message={
          "start adding the countries in the list by clicking on the map"
        }
      />
    );
  }
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
      ))}
    </ul>
  );
}

export default CountryList;
