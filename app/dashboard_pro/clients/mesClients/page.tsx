import ModelClientFlair from "@/components/modelClientFlair";
import ModelClientHorsFlair from "@/components/modelClientHorsFlair";
import { NextPage } from "next";

const MesClients:NextPage=()=>{
    return(
        <div>
            <ModelClientFlair/>
            <br />
            <ModelClientHorsFlair/>
        </div>
    )
}
export default MesClients