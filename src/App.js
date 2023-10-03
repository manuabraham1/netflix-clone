import './App.css'
import {originals,actions, adventure, animation, crime} from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from "./Components/NavBar/NavBar";
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={adventure} title='Adventure' isSmall/>
      <RowPost url={animation} title='Animation' isSmall/>
      <RowPost url={crime} title='Crime' isSmall/>

    </div>
  );
}

export default App;
