"use client";
import { Hero, CustomFilter, SearchBar, Carcard, ShowMore } from "@/components";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { FilterProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { OptionProps } from "@/types";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const allCars = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setCars(allCars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, model, limit, manufacturer]);

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
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter
              title="Fuel"
              options={fuels}
              setFilterFuel={setFuel}
              setFilterYear={function (value: SetStateAction<number>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <CustomFilter
              title="Year"
              options={yearsOfProduction}
              setFilterYear={setYear}
              setFilterFuel={function (value: SetStateAction<string>): void {}}
            />
          </div>
        </div>

        {cars.length === 0 ? (
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
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={15}
                  height={15}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > cars.length}
              setLimit={setLimit}
            />
          </section>
        )}
      </div>
    </main>
  );
}
