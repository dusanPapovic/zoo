import React, { useState } from "react";

const AnimalList = () => {
  const animals = [
    { id: 1, type: "sisar", name: "medved", date: new Date() },
    { id: 2, type: "vodozemac", name: "zaba", date: new Date() },
    { id: 3, type: "sisar", name: "majmun", date: new Date() },
    { id: 4, type: "kicmenjak", name: "guster" },
    {
      id: 5,
      type: "kicmenjak",
      name: "krokodil",
      date: new Date(),
    },
  ];

  const [listAnimals, setAnimals] = React.useState(animals);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(listAnimals.length);
    const newAnimal = {
      id: listAnimals.length + 1,
      type: type,
      name: name,
      date: new Date(birthDate.toString()),
    };
    const newList = listAnimals;
    console.log(newAnimal);
    newList.push(newAnimal);
    console.log(newList);
    setAnimals(newList);
  };
  const remove = (id) => {
    const newList = listAnimals.filter((item) => item.id !== id);
    setAnimals(newList);
  };
  const moveToTop = (id) => {
    const newList = listAnimals.filter((item, index) => item.id !== id);
    const selectedAnimal = listAnimals.filter((item) => item.id === id)[0];
    console.log(selectedAnimal);
    console.log(newList);
    newList.unshift(selectedAnimal);
    setAnimals(newList);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter type:
            <input
              type="text"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </label>
          <label>
            Enter name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Enter birth date:
            <input
              type="date"
              value={birthDate}
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul>
        {listAnimals.map((item, index) => (
          <li key={index}>
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
