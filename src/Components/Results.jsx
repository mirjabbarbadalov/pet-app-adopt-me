import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city} ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
}
