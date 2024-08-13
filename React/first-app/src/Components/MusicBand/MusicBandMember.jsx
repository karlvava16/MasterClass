function Member({ name, role, image }) {
    return (
        <div className="element">
            <img src={image} alt={name} style={{ width: '90px' }} />
            <label>{role}</label>
            <p>{name}</p>
        </div>
    );
}

export default Member;
