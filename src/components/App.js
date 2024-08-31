import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskToDelete) {
    setTasks(tasks.filter(task => task.text !== taskToDelete));
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = tasks.filter(task => 
    selectedCategory === "All" || task.category === selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;