import './App.css';
import Navbar from './Components/Navbar';
import Url from './Components/Url';
import Likes from './Components/Likes';


const App = () => {
  return (
    <div className="App">
     <Navbar/>
     <Url/>
     <Likes/>

    </div>
  );
}

export default App;
