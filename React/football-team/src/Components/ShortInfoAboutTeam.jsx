function ShortInfo({ logo, name, city, createDate }) {
    return (
        <div className="elements">
            <div className="element">
                <img src={logo} alt={name} />
            </div>
            <div className="element">
                <label>Team Name:</label>
                <p>{name}</p>
            </div>
            <div className="element">
                <label>City:</label>
                <p>{city}</p>
            </div>
            <div className="element">
                <label>Create Date:</label>
                <p>{createDate}</p>
            </div>
        </div>
    );
}

export default ShortInfo;
