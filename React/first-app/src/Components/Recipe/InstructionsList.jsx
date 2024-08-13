import React from 'react';

function InstructionsList ({ instructions }) {
    return (
        <ol>
            {instructions.map((instruction) => (
                <li key={instruction.step}>{instruction.text}</li>
            ))}
        </ol>
    );
};

export default InstructionsList;
