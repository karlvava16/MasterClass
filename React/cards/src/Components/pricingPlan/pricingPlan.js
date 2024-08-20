import Card from '../card/card';
import React from 'react';

const pricingPlans = [
    {
        name: 'Basic',
        price: 9.99,
        selectText: 'select package',
        color: '#017f59',
        features: [
            {
                name: 'Feature 1',
                isPresent: true,
            },
            {
                name: 'Feature 2',
                isPresent: false,
            },
            {
                name: 'Feature 3',
                isPresent: false,
            },
            {
                name: 'Feature 4',
                isPresent: true,
            },
            {
                name: 'Feature 5',
                isPresent: false,
            },
        ],
    },
    {
        name: 'Standard',
        price: 19.99,
        selectText: 'select package',
        color: '#0068db',
        features: [
            {
                name: 'Feature 1',
                isPresent: true,
            },
            {
                name: 'Feature 2',
                isPresent: true,
            },
            {
                name: 'Feature 3',
                isPresent: false,
            },
            {
                name: 'Feature 4',
                isPresent: true,
            },
            {
                name: 'Feature 5',
                isPresent: true,
            },
        ],
    },
    {
        name: 'Premium',
        price: 29.99,
        selectText: 'select package',
        color: '#00356b',
        features: [
            {
                name: 'Feature 1',
                isPresent: true,
            },
            {
                name: 'Feature 2',
                isPresent: true,
            },
            {
                name: 'Feature 3',
                isPresent: true,
            },
            {
                name: 'Feature 4',
                isPresent: true,
            },
            {
                name: 'Feature 5',
                isPresent: true,
            },
        ],
    },
];

function PricingPlan({ onData }) {
    const handleDataFromChild = (data) => {
        onData(data);
    };

    return (
        <div className="pricing-plan-container">
            {pricingPlans.map((plan, index) => (
                <Card
                    key={index + plan.name}
                    mainText={plan.name}
                    priceText={plan.price + '$'}
                    planFeatures={plan.features}
                    buttonPlanSelect={plan.selectText}
                    color={plan.color}
                    onData={handleDataFromChild}
                ></Card>
            ))}
        </div>
    );
}

export default PricingPlan;
