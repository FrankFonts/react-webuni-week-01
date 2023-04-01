import * as React from 'react';
import DifficultyFeedback from './DifficultyFeedback';

export default function Recipe({ recipe }) {
    const { id, name, ingredients, instructions, difficulty } = recipe;

    return (
        <div className="recipe">
            <h2>
                {id + '.) ' + name}
            </h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            <p>{instructions}</p>

            <DifficultyFeedback level={difficulty} />
        </div>
    );
}
