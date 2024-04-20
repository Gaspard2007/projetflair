'use client'
import { Button, ConfigProvider, Switch, Upload } from "antd";
import { NextPage } from "next";
import Draggable from 'react-draggable';
const Profil: NextPage = () => {
    return (
        <div style={{width:'100%'}}>
            <br />
            <div>
                <span>Mon profil public</span>
            </div>
            <br />
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[15px_0px] ">
                <div className="w-[114px] relative leading-[21.6px] inline-block">
                    Image profil
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_13px] max-w-full text-smi text-slategray">
                    <img
                        className="h-[70px] w-[70px] w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]"
                        alt=""
                        loading="lazy"
                        src="/profil.avif"
                    />
                    <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row items-start justify-start gap-[10px_0px] min-w-[394px] max-w-full mq1050:min-w-full" style={{ margin: '20px' }}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorBorder: '#000',
                                        colorPrimary: '#000',
                                        colorBgMask: 'rgba(0, 0, 0,)',
                                        colorBgBase: '#000',
                                        colorText: '#fff'
                                    },
                                }}
                            >
                                <Upload>
                                    <Button style={{ marginRight: '20px' }}>Télécharger</Button>
                                </Upload>
                            </ConfigProvider>
                            <button
                                className="cursor-pointer p-[7px] bg-snow w-[86px] h-[40px] rounded overflow-hidden shrink-0 flex flex-row items-center justify-center"
                                style={{ background:'#EAEAEA', padding:'2%', paddingLeft:'4%', paddingRight:'4%'}}
                            >
                                <div className="relative text-lg leading-[20.8px] text-center" style={{ paddingBottom: '2px', color:'black' }}>
                                    Supprimer
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="self-stretch relative leading-[22.4px]">
                        *La taille de l'image doit être d'au moins 320px. Fichiers autorisés : .png ou .jpg.
                    </div>
                </div>
                </div>
                <br />
                <span style={{fontSize:'130%'}}>Informations Public</span>
             
          <br />
          
                <div className="flex flex-col">
                    <div className="w-[79px] relative leading-[24px] inline-block">
                        Nom de votre entreprise  <span style={{ color: 'red' }}>*</span>
                    </div>
                    <br />
                    <input
                        className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                        type="text"
                        placeholder="Ex: Milana Beauty"
                        style={{ padding: '1%', width:'180%'}}
                        required
                    />
                    <br />
                  
                    <div className="w-[79px] relative leading-[24px] inline-block">
                        Profession  <span style={{ color: 'red' }}>*</span>
                    </div>
                    <br />
                    <input
                        className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                        type="text"
                        placeholder="Ex: Coiffeuse"
                        style={{ padding: '1%',width:'180%' }}
                        required
                    />
                    <br />
                    <label>Description</label>
                </div>
                <br />
                <div>
                    <span>Réseaux sociaux</span>
                    <br />
                    <p>Instagram</p>
                    <input
                        className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                        type="url"
                        placeholder="https://www.instagram.com/itsabiconnick/"
                        style={{ padding: '1%', width:'180%' }}
                        required
                    />
                    <br />
                    <br />
                    <button className="bg-black text-white text-lg flex items-center" style={{ padding: '10px' }}>
                        <img className="flex items-center" src="/plus-circle.svg" alt="" style={{ marginRight: '10px' }} />
                        Ajouter un réseau social
                    </button>
                    <br />
                </div>
                <div>
                    <span>Contact public</span>
                    <br />
                    <br />
                    <div className="flex" style={{ width: '100%' }}>
                        <div>
                            <label>Email</label>
                            <br />
                            <br />
                            <input
                                className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                                type="email"
                                placeholder="Ex: milana.beauty@gmail.com"
                                style={{ padding: '1%', width: '150%' }}
                                required
                            />
                        </div>
                        <div style={{ marginLeft: '40%' }}>
                            <label>Numéros de téléphone</label>
                            <br />
                            <br />
                            <input
                                className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                                type="email"
                                placeholder="Ex: 06 90 80 70 60"
                                style={{ padding: '1%', width: '150%' }}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p>Mes services sont uniquement à domicile</p>
                        <div style={{ marginLeft: '10px' }}>
                            <Switch/>
                        </div>
                    </div>
                    <label>Adresse</label>
                    <br />
                    <br />
                    <input type="text"  className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg" style={{padding:'1%', width:'150%'}} />
                    <br />
                    <br />
                    
                        <div>
                            <div className="w-[79px] relative leading-[24px] inline-block">
                                Ville  <span style={{ color: 'red' }}>*</span>
                            </div>
                            <br />
                            <br />
                            <input
                                className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                                type="text"
                                style={{ padding: '1%' }}
                                required
                            />
                        </div>
                        <br />
                        <div className="flex">
                        <div>
                        <div className="w-[79px] relative leading-[24px] inline-block" >
                                Code Postal  <span style={{ color: 'red' }}>*</span>
                            </div>
                            <br />
                            <br />
                            <input
                                className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                                type="text"
                                placeholder="Ex: 75000"
                                style={{ padding: '1%', width:'150%' }}
                                required
                            />
                        </div>
                        <div style={{ marginLeft: '40%' }}>
                        <div className="w-[79px] relative leading-[24px] inline-block">
                                Pays  <span style={{ color: 'red' }}>*</span>
                            </div>
                        <br />
                        <br />
                    <input
                        className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                        type="text"
                        placeholder="Ex: France"
                        style={{ padding: '1%', width:'150%' }}
                        required
                    />
                        </div>
                    </div>
                    
                </div>
                <label>Complément d'adresse</label>
                <input type="text" />
                <br />
                <br />
                <label>Image</label>
                <br />
              <Draggable/>
            </div>
        </div>
    );
}

export default Profil;