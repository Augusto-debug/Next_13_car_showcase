"use client";
import { Hero, CustomFilter, SearchBar, Carcard } from "@/components";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home({ searchParams }) {
  
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    const fetchCarsData = async () => {
      const result = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        model: searchParams.model || "",
        year: searchParams.year || "2022",
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || "10",
      });
      setCars(result);
    };
    fetchCarsData();
  }, []);

  const isDataEmpty = cars.length < 1 || !Array.isArray(cars) || !cars;

  // console.log(cars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__tex-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters ">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Ops, we have no cars.
            </h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car) => (
                <Carcard key={car} car={car} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
