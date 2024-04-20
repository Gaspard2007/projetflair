'use client'

import PlanningMonth from '@/components/planningMonth';
import DemoApp from '@/components/planningMonth';

import PlanningWeek from '@/components/planningWeek';
import { NextPage } from 'next';
import React, { useState } from 'react';

interface PlanningProps {
    date: Date;
}

const Planning:NextPage=()=> {
  
 
   
    
    return (
        <div>
            <br />
            <br />
            <div>
                <span>Mes réservations</span>
                <img src="/planning-4.svg" alt="" />
            </div>
    
                <div style={{height:'100%'}}>
                 <PlanningMonth/>
                </div>
    
            
        </div>
    );
}

export default Planning;