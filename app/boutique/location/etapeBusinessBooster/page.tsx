import PropositionBusinessBooster from "@/components/proposition-business-booster";
import { NextPage } from "next";
import Link from "next/link";
const etapeBusinessBoosterLocation:NextPage=()=>{
    return(
        <div className="flex flex-col">
            <div className="">
                <img style={{width:'100%'}} src="/2023-12-cropped-1.png" alt="" />
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <Link href={'/boutique/location/etape-validation-de-commande'}><button>Continuer</button></Link>
            
        </div>
        
    )
}
export default etapeBusinessBoosterLocation