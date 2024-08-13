import './App.css';
import CV from './Components/CV/CV';
import MusicBand from './Components/MusicBand/MusicBand';
import Recipe from './Components/Recipe/Recipe';

function App() {
    return (
        <main>
            <div className="main-div" style={{ flexDirection: 'column' }}>
                <CV></CV>
            </div>
            <div className="main-div">
                <MusicBand></MusicBand>
            </div>
            <div className="main-div">
                <Recipe></Recipe>
            </div>
        </main>
    );
}

export default App;
