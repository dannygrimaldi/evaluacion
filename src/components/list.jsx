import React, { useState } from 'react';
import '../styles/add.css';
import { useTheme } from 'next-themes';


const TodoList = () => {

  
  const { theme } = useTheme();
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
      <h2>AGREGAR ASESOR</h2>
      <table className={`todo-table ${theme}`}>
        <thead>
          <tr>
            <th>Nombre del asesor</th>
            <th>Registro</th>
            <th>Gerente</th>
            <th>
              <div className="button-container">
                <button className="button-styled" onClick={addTodo}>
                  <span>+</span>
                  <label htmlFor="">¡Agregar!</label>
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {[...Array(3)].map((_, i) => (
              <td key={i}>
                <input
                  className="todo-input"
                  type="text"
                  value={newTodos[i]}
                  onChange={(e) => {
                    const updatedNewTodos = [...newTodos];
                    updatedNewTodos[i] = e.target.value;
                    setNewTodos(updatedNewTodos);
                  }}
                  placeholder={`${i === 0 ? 'Ej. Laura Gabriela Rosales Castillo' : i === 1 ? 'Ej. 450####9' : 'Ej. Roberto Lara'}`}
                />
              </td>
            ))}
            <td></td>
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

export default TodoList;