import './App.css';
import ShortInfo from './Components/ShortInfoAboutTeam';
import MoreInfo from './Components/InfoAboutTeam';
import Members from './Components/Members';

const team = {
    name: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
    city: 'Manchester',
    createDate: '13.11.1880',
    achievements: {
        medals: [
            { name: 'Premier League Titles', amount: 9 },
            { name: 'FA Cups', amount: 7 },
            { name: 'League Cups', amount: 8 },
            { name: 'Community Shields', amount: 6 },
            { name: 'Champions League Titles', amount: 1 },
        ],
        cups: [
            'Premier League',
            'FA Cup',
            'League Cup',
            'Community Shield',
            'UEFA Champions League',
        ],
        goalsScored: 2300,
    },
    members: [
        { name: 'Kevin De Bruyne', position: 'Midfielder', number: 17 },
        { name: 'Erling Haaland', position: 'Forward', number: 9 },
        { name: 'Phil Foden', position: 'Midfielder', number: 47 },
        { name: 'Rúben Dias', position: 'Defender', number: 3 },
        { name: 'Ederson', position: 'Goalkeeper', number: 31 },
        { name: 'Jack Grealish', position: 'Midfielder', number: 10 },
        { name: 'Ilkay Gündogan', position: 'Midfielder', number: 8 },
        { name: 'Bernardo Silva', position: 'Midfielder', number: 20 },
        { name: 'João Cancelo', position: 'Defender', number: 7 },
        { name: 'John Stones', position: 'Defender', number: 5 },
        { name: 'Rodri', position: 'Midfielder', number: 16 },
        { name: 'Kyle Walker', position: 'Defender', number: 2 },
        { name: 'Riyad Mahrez', position: 'Forward', number: 26 },
        { name: 'Aymeric Laporte', position: 'Defender', number: 14 },
    ],
};

// Generate a random background color (red or blue)
const backgroundColor = Math.random() > 0.5 ? 'red' : 'blue';

function App() {
    return (
        <div className="App">
            <div
                className="element"
                style={{
                    backgroundColor,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                }}
            >
                <ShortInfo
                    name={team.name}
                    logo={team.logo}
                    city={team.city}
                    createDate={team.createDate}
                />
                <MoreInfo achievements={team.achievements} />
            </div>
            <div
                style={{
                    backgroundColor,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                }}
            >
                <Members members={team.members} />
            </div>
        </div>
    );
}

export default App;
