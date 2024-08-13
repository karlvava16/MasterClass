import profilePicture from '../../assets/profile_photo.jpg';

function Cv() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '10px',
            }}
        >
            <div
                className="element"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img src={profilePicture} alt="Profile" />
            </div>
            <div className="element">
                <label>Name: </label>
                <p>Vladyslav</p>
            </div>
            <div className="element">
                <label>Surname: </label>
                <p>Karlinskyi</p>
            </div>
            <div className="element">
                <label>Age: </label>
                <p>20</p>
            </div>
            <div className="element">
                <label>Number: </label>
                <p>+380000000000</p>
            </div>
            <div className="element">
                <label>Email: </label>
                <p>test1test.com</p>
            </div>
            <div className="element">
                <label>Country: </label>
                <p>Ukraine</p>
            </div>
            <div className="element">
                <label>City: </label>
                <p>Odesa</p>
            </div>
        </div>
    );
}

export default Cv;
