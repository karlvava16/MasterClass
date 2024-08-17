function MoreInfo({ achievements }) {
    return (
        <div className="element">
            <h2 style={{ textAlign: 'center' }}>Medals:</h2>
            {achievements.medals.map((medal, index) => (
                <div key={index}>
                    <label>{medal.name}: </label>
                    <p>{medal.amount}</p>
                </div>
            ))}
            <h2 style={{ textAlign: 'center' }}>Cups:</h2>
            {achievements.cups.map((cup, index) => (
                <strong key={index}>
                    <p>{cup}</p>
                </strong>
            ))}
            <h2 style={{ textAlign: 'center' }}>Goals:</h2>
            <strong>
                <h2>{achievements.goalsScored}</h2>
            </strong>
        </div>
    );
}
export default MoreInfo;
