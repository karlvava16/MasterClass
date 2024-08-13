function Album({ name, image }) {
    return (
        <>
            <div className="element">
                <div style={{ width: '260px', overflow: 'hidden' }}>
                    <img
                        src={image}
                        alt={name}
                        style={{ objectFit: 'cover', width: '100%' }}
                    />
                </div>

                <p>{name}</p>
            </div>
        </>
    );
}

export default Album;
