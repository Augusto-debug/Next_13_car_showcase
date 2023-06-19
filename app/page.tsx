"use client"
import { Hero, CustomFilter, SearchBar, Carcard } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = allCars.length < 1 || !Array.isArray(allCars)|| !allCars; 

  console.log(allCars);
  

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
            <CustomFilter title=" Custom Filter" />
            <CustomFilter title="Custom Filter" />
          </div>
        </div>

          {isDataEmpty ? (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Ops, we have no cars.</h2>
            </div>
          ) : (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <Carcard key={car} car={car} />
                ))}
              </div>
            </section> 
          )}
        </div>
    </main>
  );
}
