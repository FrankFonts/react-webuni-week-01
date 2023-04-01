import * as React from 'react';

export default function DifficultyFeedback({ level }) {
    const levels = Array.from({ length: 10 }, (x, i) => i + 1);

    return (
        <div className="difficulty">
            <span className="difficulty--label">Difficulty level</span>
            {levels.map((currentLevel) => (currentLevel <= level ? '◼' : '◻'))}
        </div>
    );
}
