import React from 'react';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

const recipe = {
    title: 'Паста Карбонара',
    ingredients: [
        { name: 'Спагетти', quantity: '200 г' },
        { name: 'Бекон', quantity: '150 г' },
        { name: 'Яйцо', quantity: '2 шт.' },
        { name: 'Пармезан', quantity: '50 г' },
        { name: 'Чеснок', quantity: '2 зубчика' },
        { name: 'Соль', quantity: 'по вкусу' },
        { name: 'Перец', quantity: 'по вкусу' },
    ],
    instructions: [
        {
            step: 1,
            text: 'Отварите спагетти в подсоленной воде до состояния аль денте.',
        },
        {
            step: 2,
            text: 'Обжарьте бекон на сковороде до хрустящей корочки, затем добавьте измельченный чеснок.',
        },
        {
            step: 3,
            text: 'В отдельной миске взбейте яйца с тертым пармезаном.',
        },
        {
            step: 4,
            text: 'Добавьте отваренные спагетти в сковороду с беконом и чесноком.',
        },
        {
            step: 5,
            text: 'Снимите сковороду с огня и добавьте яичную смесь, хорошо перемешайте.',
        },
        { step: 6, text: 'Приправьте солью и перцем по вкусу.' },
        { step: 7, text: 'Подавайте сразу же, посыпав оставшимся пармезаном.' },
    ],
    image: 'https://te.20minut.ua/img/cache/reference/news_fb_og/0030/88/2987055-gotuemo-smachnu-pastu-karbonara.jpeg',
};

function Recipe() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                justifyContent: 'center',
            }}
        >
            <div className="element">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: '400px' }}
                />
            </div>
            <div className="element">
                <p style={{ fontWeight: 'bold' }}>{recipe.title}</p>
            </div>
            <div className="element">
                <h2>Ингредиенты:</h2>
                <IngredientsList ingredients={recipe.ingredients} />
            </div>
            <div className="element">
                <h2>Приготовление:</h2>
                <InstructionsList instructions={recipe.instructions} />
            </div>
        </div>
    );
}

export default Recipe;
