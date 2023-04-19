import React from 'react';
import { Routes, Route} from 'react-router-dom'
import TodoList from '../features/todos/TodoList';
import Layout from './Layout';
import './App.css';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<TodoList category="Дом" />} />
            <Route path="/categories/:category" element={<TodoList />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
