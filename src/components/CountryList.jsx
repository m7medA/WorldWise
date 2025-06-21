import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, city) => {
    return !arr.map((el) => el.country).includes(city.country)
      ? [...arr, { country: city.country, emoji: city.emoji }]
      : arr;
  }, []);

  return isLoading ? (
    <Spinner />
  ) : !cities.length ? (
    <Message message="Add your first city by clicking on a city on the map." />
  ) : (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
