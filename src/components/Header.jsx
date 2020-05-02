//jshint esversion: 9
import React, { useState } from 'react';

const Header = () => {
    const [isDone, setIsdone] = useState(false);

    const handleClick = () => setIsdone(!isDone);
    return (
        <div className="header" onDoubleClick={handleClick}>
            <h1 style={{color: isDone ? "tomato": "black"}}>To-Do List</h1>
        </div>
    );

};
export default Header;