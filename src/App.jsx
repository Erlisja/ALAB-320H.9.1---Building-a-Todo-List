import { Routes, Route,Link} from "react-router";
import "./App.css";
import Welcome from './pages/Welcome'
import ToDoList from './pages/ToDoList'

function App() {
return (
  <>
  <Routes>
    <Route path ='/' element= {<Welcome />} />
    <Route path ='/todo' element= {<ToDoList />} />
   
  </Routes>
    
  </>
)
}
export default App;
