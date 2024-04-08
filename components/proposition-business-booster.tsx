import React, { useState } from 'react';
import Link from 'next/link'
const PropositionLocation: React.FC = () => {
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <div>
            <div className='flex'>
            <img style={{width:''}} src="/imagepourshop.svg" alt="" />
            <h3>BUSINESS BOOSTER 1H POUR CHANGER DE VIE</h3>
            </div>
            </div>
    );
}

export default PropositionLocation;
