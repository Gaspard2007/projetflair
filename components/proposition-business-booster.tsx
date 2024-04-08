import React, { useState } from 'react';

const PropositionLocation: React.FC = () => {
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <div className='w-[85%] flex ' style={{background:'#DEDEDE'}}>
            <img style={{height:'80%', width:'80%'}} src="/imagepourshop.png" alt="" />
            <div className='flex flex-col justify-between' style={{margin:'30px'}}>
                <div>
                    <h3>BUSINESS BOOSTER 1H POUR CHANGER DE VIE</h3>
                    <div style={{fontWeight:'700px'}}>
                        <span className=''>100€</span>
                    </div>
                    <p>Vous vous sentez perdue face à la multitude de formations esthétique existantes ?</p>
                    <p>Notre session de coaching intensif est conçue pour vous orienter vers la formation en esthétique la plus adaptée à vos ambitions.</p>
                    <p>En deux heures, nous explorerons ensemble vos passions, vos compétences et déterminerons la voie qui vous correspond le mieux</p>            
                </div>
                
            </div>
        </div>
    );
}

export default PropositionLocation;
