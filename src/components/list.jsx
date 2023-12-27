
import React, { useState } from 'react';
import '../styles/add.css';

;  // Importa el archivo de estilo CSS

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    setSelectedTodo(index);
    setTimeout(() => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      setSelectedTodo(null);
    }, 500);
  };

  return (
    
    <div>
      
      <h2>Agregar asesor</h2>
      <input className="todo-input" 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
        // Aplica la clase del archivo de estilo CSS
      />
      <button className="button-styled" onClick={addTodo}>
      <span>+</span>
      <label htmlFor="">Agregar</label>
      </button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button 
              onClick={() => removeTodo(index)}
              style={{ color: selectedTodo === index ? 'purple' : 'black' }}
            >
              Remove
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;