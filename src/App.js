import './App.css';
import NowPlaying from './NowPlaying/NowPlaying';
import Button from './Button/Button';

function App() {
  return (
    <div className="App">
    <NowPlaying />
    <Button text="Logout" />
    </div>
  );
}

export default App;
