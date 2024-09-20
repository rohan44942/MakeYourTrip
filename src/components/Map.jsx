import { useNavigate, useSearchParams } from "react-router-dom";
<<<<<<< HEAD
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Button from "./Button";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}

      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
=======
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
          <span> latitude={lat} {console.log(lat)}</span>
          <span> longitude={lng}</span>
        </p>
      </h2>

      <button
        onClick={() => {
          setParams({ lat: 405, lng: 579 });
        }}
      >
        change the coordinates
      </button>
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
    </div>
  );
}

<<<<<<< HEAD
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

=======
>>>>>>> f7112c7bd9c89e866c531280b021c38d2e416684
export default Map;
