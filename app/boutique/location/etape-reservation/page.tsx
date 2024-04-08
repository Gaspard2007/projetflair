'use client'
import CalendrierEtapeReservation from '@/components/calendrier-panier'
import { NextPage } from 'next'
import Link from 'next/link'

const EtapeReservation: NextPage= () => {
    return(
      <div>
        <div className='flex justify-center'>
          <img src="/2023-12-cropped-1.png" alt="" />
        </div>
        <div className='flex justify-center'>
          <h1>Réserver votre poste coiffure & Make UP</h1>
        </div>
        <div>
          
          <h1>Soucis de calendrier</h1>
          <Link href={'/boutique/location/panier-location'}><button></button></Link>

      
        </div>
        <br />
      </div>
    )
}
export default EtapeReservation;