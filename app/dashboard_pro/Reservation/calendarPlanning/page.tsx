'use client'

import PlanningMonth from '@/components/planningMonth';
import DemoApp from '@/components/planningMonth';

import PlanningWeek from '@/components/planningWeek';
import React, { useState } from 'react';

interface PlanningProps {
    date: Date;
}

const Planning: React.FC<PlanningProps> = ({ date }) => {
  
 
    const [currentDate, setCurrentDate] = useState(new Date());
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