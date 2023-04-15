import './App.css';
import SideBar from '../features/SideBar/SideBar';
import Header from '../features/Header/Header';
import Todos from '../features/todos/Todos';

function App() {
  return (
    <div className="App">
      <SideBar />
      <main>
        <Header />
        <Todos />
      </main>
    </div>
  );
}

export default App;
