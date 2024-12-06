import React, { FC } from "react";
import { Apod, getApods } from "./utils";
import styles from "@/app/(with-navbar)/nasa/Nasa.module.css";

const APODS_COUNT = 5;

interface ApodComponentProps {
  apod: Apod;
}

const ApodComponent: FC<ApodComponentProps> = ({ apod }) => {
  return (
    <div className={styles.nasaApod}>
      <h3>{apod.title}</h3>
      <div className={styles.nasaApodDetails}>
        <p>{apod.date}</p>
        <img src={apod.url} alt={apod.title} />
        <p>{apod.explanation}</p>
      </div>
    </div>
  );
};

export default async function NasaPage() {
  const apods = await getApods(APODS_COUNT);

  return (
    <div className={styles.nasaContainer}>
      {apods.map((apod) => (
        <ApodComponent key={apod.url} apod={apod} />
      ))}
    </div>
  );
}
