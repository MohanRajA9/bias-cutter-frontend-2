import './App.css';
import { NavBar } from './components/NavBar';
import { ShiftDetails } from './components/ShiftDetails';
import { RecipeDetails } from './components/RecipeDetails';
import { AngleWidth } from './components/AngleWidth';
import { MachineLossTime } from './components/MachineLossTime';
import { HourBasedProduction } from './components/HourBasedProduction';
import { MachineDownTime } from './components/MachineDownTime';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="check-length" >

        <div className="first-half" >
          <ShiftDetails />
          <AngleWidth />
          <HourBasedProduction />
        </div>

        <div className='second-half' >
          <RecipeDetails />
          <MachineLossTime />
          <MachineDownTime />
        </div>

      </div>

    </div>
  );
}

export default App;
