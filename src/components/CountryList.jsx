import CountryItem from "./countryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
function CountryList({ cities, isloading }) {
  // console.log(countries);
  // const countries =[];
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []);
  if (isloading) {
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
