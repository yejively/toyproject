import React from 'react';
import { display } from './style.css';

const Display = ({ value }) => {
    return <div className={display}>{value}</div>;
};

export default Display;
