function Members({ members }) {
    return (
        <>
            <div className="elements">
                <h2 style={{ textAlign: 'center' }}>Members:</h2>

                <div className="members">
                    {members.map((member, index) => (
                        <div className="element" key={index}>
                            <div>
                                <label>Name: </label>
                                <p>{member.name}</p>
                            </div>
                            <div>
                                <label>Position: </label>
                                <p>{member.position}</p>
                            </div>
                            <div>
                                <label>Number: </label>
                                <p>{member.number}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Members;
