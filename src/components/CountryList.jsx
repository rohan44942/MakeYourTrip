import CountryItem from "./countryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {

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
      ))}
    </ul>
  );
}

export default CountryList;
