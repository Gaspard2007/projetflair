'use client'
import type { NextPage } from "next";
import Link from 'next/link'
const EtapeDocument:NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/2023-12-cropped-1.png" alt="" />
      <div className="flex flex-col justify-center" style={{width:'80%'}}>
        <h2>Document de réservation</h2>
        <p>- Pour finaliser votre réservation, veuillez nous renvoyer les docuemnts suivants:</p>
        <p>Une copie de votre KBIS, ainsi qu'une copie récto-verso de votre CIN, passeport ou carte de séjour.</p>
        <br />
        <div className="flex flex-row">
         
            <div style={{border: '2px dashed', width:'49%', paddingTop:'50px', paddingBottom:'50px'}}>
             <div className="flex flex-col justify-center items-center">
                <img style={{width:'50px', height:'50px'}} src="/file-text.svg" alt="" />
                <h4>Déposer une copie de votre Kbis ici</h4>
                <h4>Fichier accepté: JPEG; PNG; PDF</h4>
                <input type="file" name="" id="" />
                </div>
                </div>
            
       
                <div style={{border: '2px dashed', marginLeft:'2%', width:'49%', paddingTop:'50px', paddingBottom:'50px', display: 'flex', alignItems: 'center'}}>
    <div className="flex flex-col justify-center items-center">
        <img style={{width:'50px', height:'50px'}} src="/carte-didentite-2.png" alt="" />
        <h4>Déposer les copies de votre CIN / Passeport / Carte de séjour recto/verso ici</h4>
        <h4>Fichier accepté: JPEG; PNG; PDF</h4>
        <input type="file" name="" id="" />
    </div>
</div>
        </div>
      
            
<h5><input type="checkbox" className="rounded-none" style={{padding:'30px'}}/>En cochant cette case, je confirme avoir lu et accepté les termes de notre politique de confidentialité et autorise le téléchargement de ma pièce d'identité (CIN) ainsi que l'extrait Kbis, en conformité avec les dispositions du RGPD.</h5>

<div className="flex flex-row justify-center">
<Link href={''}><button className="text-white bg-black text-lg" style={{padding:'11px'}}>Je le ferais plus tard *</button></Link>
<Link href={'/boutique/location/etapeDossierValidation'} style={{marginLeft:'2%'}}><button className="text-white bg-black text-lg" style={{padding:'11px'}}>Je valide mes fichiers</button></Link>
</div>
<div className="flex flex-row justify-center items-center text-sm">
<p className="flex justify-center items-center flex-col">* Tant que  les données ne sont pas traitées et que la commanden'est pas validé, elle est considerée comme  étant en cour de traitement et en attente de validation. Cela signifie que le processus de traitement de la commande est en cours, mais tant que toutes les vérifications nécessaires ne sont pas effectuées et que la validation finale n'est pas confirmée, la commande demeure en phase d'atente. Vous pouvez le faire plus tard dans <p style={{fontWeight:'700'}}>Mon compte {'>'} Mes informations</p></p>
      
</div>
</div>
    </div>
  )
}

export default EtapeDocument
