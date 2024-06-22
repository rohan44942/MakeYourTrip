import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [params, setParams] = useSearchParams();
  // console.log(params)/;
  const lat = params.get("lat");
  const lng = params.get("lng");
  // console.log(lat, lng);
  // setting up the useNavigation for opening form components by clicking on the mapz
  const navigate = useNavigate();
  return (
    <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
      <h2>
        Map
        <p>
          <span>latitude={lat}</span>
          <span>longitude={lng}</span>
        </p>
      </h2>

      <button
        onClick={() => {
          setParams({ lat: 45, lng: 79 });
        }}
      >
        change the coordinates
      </button>
    </div>
  );
}

export default Map;
