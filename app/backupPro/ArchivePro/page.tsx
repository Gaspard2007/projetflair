'use client'
import React, { useState } from 'react';
import next from 'next';
import { ConfigProvider, Slider } from 'antd';
import { Col, Row } from 'antd';
import CardProfessionnel from '@/components/cardProfessionnel';
import { NextPage } from 'next';

const ArchivePro:NextPage = () => {
    const mark = {
        0: '0 €',
        250: '250 €',
        500: '500 €',
        750: '750 €',
        1000: '1000 €'
    };

    // Définir l'état local pour stocker les valeurs du Slider
    const [sliderValue, setSliderValue] = useState([250, 750]);

    // Fonction de rappel pour mettre à jour l'état des valeurs du Slider
    const handleSliderChange = (value: number[]) => {
        setSliderValue(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%' }}>
                <img className='' style={{ width: '100%' }} src="/banneer-ArchivePro.svg" alt="" />
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                {/* Partie Gauche */}
                <div style={{ flex: '1 0 33%', padding: '2%' }}>
                    <div style={{background:'#F5F5F5', paddingBottom:'9%'}} className='rounded flex flex-col  items-start'>
                        <div style={{marginLeft:'4%'}}>
                        <h1>Rechercher</h1>
                        <input className='text-lg text-gray' style={{ border: '1px solid gray', outline: 'none', padding: '11px', width:'120%' }} placeholder='Que recherchez-vous ?' type="text" />
                    </div>
                    </div>
                    <br />
                    <div style={{background:'#F5F5F5', paddingBottom:'9%'}} className='rounded flex flex-col  items-start'>
                        <div style={{marginLeft:'4%'}}>
                        <h1>Lieu</h1>
                        <input className='text-lg text-gray' style={{ border: '1px solid gray', outline: 'none', padding: '11px', width:'120%' }} placeholder='Indiquer un lieu' type="text" />
                    </div>
                    </div>
                    <br />
                    <div style={{background:'#F5F5F5', paddingBottom:'9%'}} className='rounded flex flex-col  items-start'>
                        <div style={{marginLeft:'4%'}}>
                        <h1>Categorie de service</h1>
                        <select name="Coiffure" id=""></select>
                    </div>
                    </div>
                    
                 <br />
                    <div style={{background:'#F5F5F5', paddingBottom:'9%'}} className='rounded flex flex-col '>
                        <h1 style={{marginLeft:'4%'}}>Prix</h1>
                        <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimaryBorderHover:'#000'
                                    },
                                    components:  {
                                        Slider: { dotActiveBorderColor: '#000', handleActiveColor: '#000', handleColor:'#000', trackBg:'#000', trackHoverBg:'#000', handleColorDisabled:'#000' },
                                    },
                                }}
                            >
                                {/* Utiliser le Slider avec les valeurs initiales et le gestionnaire de changement */}
                                <Slider style={{width:'85%', marginLeft:'7%'}} marks={mark} step={5} max={1000} range defaultValue={[250, 750]} onChange={handleSliderChange} />
                            </ConfigProvider>
                            <div style={{marginLeft:'4%'}}>
                                <span>Prix: {sliderValue[0]} - {sliderValue[1]} €</span>
                            </div>
                            
                    </div>
                    <br />
                    <div>
                                <button  style={{padding:'11px', width:'100%'}} className='bg-black rounded text-white text-lg'>Rechercher</button>
                            </div>
                </div>
                {/* Partie Droite */}
                <div style={{ flex: '2 0 66%', padding: '2%' }}>
                    {/* Contenu de la partie droite */}
                    <div>
                        <h6 className=''>Réinitialiser les filtres</h6>
                        <span>11 services trouvé sur votre recherche</span>
                        <div style={{ marginTop: '3%', display: 'flex', flexWrap: 'wrap' }}>
                            {/* Vos cartes de professionnels */}
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                            <CardProfessionnel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArchivePro;
