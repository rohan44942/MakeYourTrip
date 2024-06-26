import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

const BASE_URL = " http://localhost:3000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  // use efftect state

  useEffect(() => {
    async function fetchcity() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        throw new Error("data is not fetched");
      } finally {
        setIsLoading(false);
      }
    }
    fetchcity();
  }, []);

  async function getCity(id) {
    try {
      //try and catch
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      throw new Error("data is not fetched");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, getCity, currentCity }}>
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new console.error(
      "trying to access the context from wrong children component"
    );
  }
  return context;
}
export { CitiesProvider, useCities };
