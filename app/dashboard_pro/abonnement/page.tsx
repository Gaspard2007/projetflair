import AbonnementPro from "@/components/abonnementPro";
import { NextPage } from "next";

const MesAbonnements:NextPage=()=>{
    return(
        <div style={{width:'100%'}}>
            <p>Abonnement actuel:</p>
            <div className="flex justify-start">
               <AbonnementPro/>
            </div>
        </div>
    )
}
export default MesAbonnements