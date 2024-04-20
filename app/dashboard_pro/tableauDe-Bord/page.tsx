import ReservationsProWorkIn from "@/components/modelReservationPro";
import { NextPage } from "next";
import Link from "next/link";

const TableauDeBord:NextPage=()=>{
    return(
    <div>
        <br />
        <span>Bienvenue</span>
        <br />
        <div className="text-base">
            <p>Bonjour Miss Elsa (vous n’êtes pas Miss Elsa ? Déconnexion)</p>
            <p>À partir du tableau de bord de votre compte, vous pouvez visualiser vos commandes récentes, gérer vos réservations  ainsi que changer votre mot de passe et les détails de votre compte.</p>
        </div>
        <br />
        <div>
            <span>Abonnement actuel</span>
            <br />
            <br />
            <div className="rounded" style={{border:'solid 2px #EAEAEA', padding:'3%'}}>
                <span className="text-base">Abonnement gestion planning mensuel</span>
                <br />
                <span className="text-base">Date de renouvellement : <span className="text-gray-200">17 Mars 2024</span></span>
                <br />
                <br />
                <div className="flex ">
                    <button className="text-base rounded" style={{background:'#FFF5F5', color:'#F82424', padding:'8px'}}>Annuler l'abonnement</button>
                    <button style={{padding:'8px', marginLeft:'10px'}} className="rounded text-white bg-black text-base">Mettre à niveau</button>
                </div>
            </div>
            
        </div>
        <br />
        <div>
            <span>Réservations récentes</span>
            <br />
            <br />
            <div style={{}}>
            <ReservationsProWorkIn/>
            </div>
        <br />
        <div className="flex justify-center items-center">
        <button className="bg-black text-white text-lg rounded" style={{padding:'8px'}}>Voir toutes les réservations</button>
        </div>
    </div>
    </div>)
}
export default TableauDeBord