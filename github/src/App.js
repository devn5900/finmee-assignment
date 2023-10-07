import './App.css';
import LeftPanel from './components/LeftPanel';
import Navbar from './components/Navbar';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div >
        <Navbar/>
        <div className='flex'>
          <LeftPanel/>
          <RightPanel/>
        </div>
    </div>
  );
}

export default App;
