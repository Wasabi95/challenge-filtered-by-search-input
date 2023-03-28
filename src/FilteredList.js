// Challenge: Write a React component that displays a list of items that can be filtered by a search input. The list should update in real-time as the user types into the search input.
// In this solution, we start by defining two functional components: ListItem and List. ListItem is a simple component that takes an item as a prop and renders it inside an li tag. List is a more complex component that takes an array of items as a prop and renders them as a list of ListItem components.
// We then define a component called FilteredList that takes an array of items as a prop. This component defines a state variable called searchTerm using the useState hook. This variable stores the current value of the search input and is initially set to an empty string. We also define an event handler called handleSearchTermChange that is called whenever the search input value changes. This event handler updates the searchTerm state with the new value.
// We then filter the items array based on the searchTerm state using the filter method. We convert both the search term and the item to lowercase before comparing them to make the search case-insensitive.
// Finally, we render a div that contains an input for the search term and a List component that takes the filtered items as a prop. We attach the onChange event handler to the input to call handleSearchTermChange whenever the input value changes.

import React, { useState } from "react";

const ListItem = ({ item }) => {
  return <li>{item}</li>;
};

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

const FilteredList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      <List items={filteredItems} />
    </div>
  );
};

export default FilteredList;
