import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useCities();

  return isLoading ? (
    <Spinner />
  ) : !cities.length ? (
    <Message message="Add your first city by clicking on a city on the map." />
  ) : (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
