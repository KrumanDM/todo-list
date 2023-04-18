import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
  isDone: boolean;
}

const Input: React.FC = () => {
  const [tasks, setTasks] = useState<Item[]>([
    { id: 1, name: "Task 1", isDone: false },
    { id: 2, name: "Task 2", isDone: true },
    { id: 3, name: "Task 3", isDone: false },
  ]);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredItems = tasks.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.isDone ? "Done" : "Not done"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Input;