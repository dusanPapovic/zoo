import React, { useState } from "react";

const AnimalList = () => {
  const animals = [
    { id: 1, type: "sisar", name: "medved", date: new Date(2000, 10, 10) },
    { id: 2, type: "vodozemac", name: "zaba", date: new Date(2010, 10, 10) },
    { id: 3, type: "sisar", name: "majmun", date: new Date(2015, 10, 10) },
    { id: 4, type: "kicmenjak", name: "guster" },
    {
      id: 5,
      type: "kicmenjak",
      name: "krokodil",
      date: new Date(2008, 10, 10),
    },
  ];

  const [listAnimals, setAnimals] = React.useState(animals);

  const remove = (id) => {
    const newList = listAnimals.filter((item) => item.id !== id);
    setAnimals(newList);
  };
  const moveToTop = (id) => {
    const newList = listAnimals.filter((item) => item.id !== id);
    const selectedAnimal = listAnimals.filter((item) => item.id === id);
    newList.concat(selectedAnimal);
    setAnimals(newList);
  };
  return (
    <div>
      <h1>To do:</h1>
      <ul>
        {listAnimals.map((item) => (
          <li key={item.id}>
            <div>
              {item.type}- {item.name}
            </div>

            <div>
              birth date: {item.date ? item.date.toString() : "Nepoznat"}
            </div>
            <button onClick={() => remove(item.id)}>Remove</button>
            <button onClick={() => moveToTop(item.id)}>Move to top</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
