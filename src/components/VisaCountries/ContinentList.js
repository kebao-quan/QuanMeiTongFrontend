import React, { useState } from 'react';
import Continent from './Continent';

function ContinentList({ continents, handleContinentHover }) {
    return (
        <div className="group_8 flex-row">
            <div className="list_1 flex-row">
                {continents.map((continent, index) => (
                    <Continent
                        key={index}
                        name={continent}
                        handleHover={handleContinentHover}
                    />
                ))}
            </div>
        </div>
    );
}

export default ContinentList;
