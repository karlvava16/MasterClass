import React from 'react';

function IngredientsList({ ingredients }) {
    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient.name}: {ingredient.quantity}
                </li>
            ))}
        </ul>
    );
}

export default IngredientsList;
