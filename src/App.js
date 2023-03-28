import React from "react";
import FilteredList from "./FilteredList";

const App = () => {
  const items = ["apple", "banana", "cherry", "date", "elderberry"];

  return <FilteredList items={items} />;
};

export default App;
