import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
function CityList({ cities, isloading }) {
  // console.log(cities);
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
      ))}
    </ul>
  );
}

export default CityList;
