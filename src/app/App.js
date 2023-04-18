import './App.css';
import SideBar from '../features/SideBar/SideBar';
import Header from '../features/Header/Header';
import TodoList from '../features/todos/TodoList';
import { Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import  { selectAllCategories } from '../features/SideBar/categoriesSlice'
import MyModal from '../common/components/MyModal/MyModal';
import AddCategoryModal from '../features/SideBar/AddCategoryModal';
import AddTodoForm from '../features/Header/AddTodoForm';
import React, {useState} from 'react';
import Layout from './Layout';

function App() {
  const categories = useSelector(selectAllCategories)
  const [modal, setModal] = useState(true);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<TodoList category="Дом" />} />
            {
              categories.map( (category, index) => {
                return (
                  <Route key={index}
                        path={`/categories/${category.title}`} 
                        element={<TodoList category={category.title}/>} 
                  />
                )
              })
            }
          </Route>
        </Routes>
    </div>
  );
}

export default App;
