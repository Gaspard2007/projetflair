'use client'
import ModelService from "@/components/modelServices";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import ModelServicePro from "@/components/modelServicesPro";


const MesServices:NextPage=()=>{
    const [visibleServices, setVisibleServices] = useState(4);
    const [showMoreServices, setShowMoreServices] = useState(false);

    return(
        <div style={{padding:'3%'}}>
          <div>
            <div className="flex flex-col justify-end">
            <div className="flex justify-between items-center">
                <span>Mes services</span>
                <p className="" style={{marginRight:'4%'}}>Trier par :</p>
            </div>
            <div className="flex justify-end items-end">
                <select style={{width:'10%', marginRight:'4%'}} title="Récent" className="text-lg" name="">Récent</select>
                
            </div>
            </div>
            <div >
            <Link className="cursor-pointer" href={'/dashboard_pro/services/ajouterService'}><button className="bg-black text-white rounded text-lg cursor-pointer" style={{padding:'10px'}}>Ajouter un service</button></Link>
            {[...Array(visibleServices)].map((_, index) => (
              <div key={index}>
                <div className="text-base">
                <ModelServicePro />
                </div>
              </div>
            ))}
            </div>
            </div>
  </div>
    )
}
export default MesServices