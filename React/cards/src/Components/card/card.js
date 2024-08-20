import React from 'react';

function Card({
    mainText,
    priceText,
    planFeatures,
    buttonPlanSelect,
    color,
    onData,
}) {
    function handleClick() {
        onData([mainText, priceText]);
    }

    return (
        <div className="card-container">
            <div
                className="main-text-container"
                style={{ backgroundColor: color }}
            >
                <h2 className="main-text">{mainText}</h2>
            </div>
            <div className="price-text-container">
                <h3 className="price-text">{priceText}</h3>
            </div>
            <div className="plan-features">
                {planFeatures.map((feature, index) => (
                    <div className="feature-block" key={index + feature.name}>
                        <div
                            className="feture-icon"
                            style={{
                                width: '25px',
                                height: '25px',
                                backgroundImage: `url(${
                                    feature.isPresent
                                        ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/600px-Green_tick.svg.png'
                                        : 'https://static.vecteezy.com/system/resources/previews/027/391/874/non_2x/red-cross-checkmark-isolated-on-a-transparent-background-free-png.png'
                                })`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className="feture-text"> {feature.name}</div>
                    </div>
                ))}
            </div>
            <div className="plan-select-container">
                <button
                    className="plan-select"
                    style={{ backgroundColor: color }}
                    onClick={handleClick}
                >
                    {buttonPlanSelect}
                </button>
            </div>
        </div>
    );
}

export default Card;
