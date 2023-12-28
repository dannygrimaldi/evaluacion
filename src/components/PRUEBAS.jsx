import React, { useState } from 'react';
import '../styles/add.css';
const TodoList2 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState(['', '', '']);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = () => {
    // Verifica si alguno de los nuevos todos está vacío
    const isEmpty = newTodos.some((todo) => todo.trim() === '');

    if (!isEmpty) {
      const trimmedTodos = newTodos.map((todo) => todo.trim());
      setTodos([...todos, trimmedTodos]);
      setNewTodos(['', '', '']); // Reinicia los valores de los nuevos todos
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
            
      <table className="todo-table">
        <thead>
          <tr>
            {[...Array(3)].map((_, i) => (
              <th key={i}>Column {i + 1}</th>
            ))}
            <th>Actions</th></tr>
        </thead>
        <tbody>
          <tr>
            {[...Array(3)].map((_, i) => (
              <td key={i}>
                <input className="todo-input" 
                  type="text"
                  value={newTodos[i]}
                  onChange={(e) => {
                    const updatedNewTodos = [...newTodos];
                    updatedNewTodos[i] = e.target.value;
                    setNewTodos(updatedNewTodos);
                  }}
                  placeholder={`Enter  ${i + 1}`}                 
                />
              </td>
            ))}
            <td>

            <div className="button-container">
              <button className="button-styled" onClick={addTodo}>
              <span>+</span>
              <label htmlFor="">Agregar</label>
              </button>
            </div>

            </td>
          </tr>
          {todos.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((todo, colIndex) => (
                <td key={colIndex}>{todo}</td>
              ))}
              <td>
                <button
                  onClick={() => removeTodo(rowIndex)}
                  style={{ color: selectedTodo === rowIndex ? 'purple' : 'blue', marginLeft: '8px' }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList2;
