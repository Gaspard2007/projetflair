import Link from 'next/link';
import React, { useState } from 'react';

const PropositionLocation: React.FC = () => {
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <div className='flex ' style={{background:'#DEDEDE'}}>
            <img style={{width:'80%'}} src="/imagepourshop.png" alt="" />
            <div style={{padding:'5%'}}>
            <div className='flex flex-col justify-between'>
                <div>
                    <h3>BUSINESS BOOSTER 1H POUR CHANGER DE VIE</h3>
                    <div style={{fontWeight:'700px'}}>
                        <span className=''>100€</span>
                    </div>
                    <p>Vous vous sentez perdue face à la multitude de formations esthétique existantes ?</p>
                    <p>Notre session de coaching intensif est conçue pour vous orienter vers la formation en esthétique la plus adaptée à vos ambitions.</p>
                    <p>En deux heures, nous explorerons ensemble vos passions, vos compétences et déterminerons la voie qui vous correspond le mieux</p>            
                </div>
                <div className='flex flex-col items-end'>
                    <button onClick={toggleInput} style={{padding:'11px', width:'80%'}} className='flex items-center text-white text-lg cursor-pointer bg-black'>
                        <img src="/calendarWhite.svg" style={{marginRight:'20px'}} alt="" />
                        CHOISIR UNE DATE
                    </button>
                    {showInput && <input style={{width:'80%'}} type="date" />}
                </div>
                <br />
                <div className='flex items-center justify-end'>
                    <Link href={'/boutique/businessBooster/BoosterChoice'}><button style={{padding:'11px', width:'80%'}} className='text-white text-lg cursor-pointer bg-black'>JE RÉSERVE</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default PropositionLocation;
