import './App.css';
import SideBar from '../features/SideBar/SideBar';
import Header from '../features/Header/Header';
import TodoList from '../features/todos/TodoList';
import { Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import  { selectAllCategories } from '../features/SideBar/categoriesSlice'
function App() {
  const categories = useSelector(selectAllCategories)

  return (
    <div className="App">
      <SideBar />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList category={'Дом'}/>}/>
          {
            categories.map( (category, index) => {
              return <Route key={index} path={'/' + category.title} element={<TodoList category={category.title}/>} />
            })
          }

        </Routes>
          
      
      </main>
    </div>
  );
}

export default App;
