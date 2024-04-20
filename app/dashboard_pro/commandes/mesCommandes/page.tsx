import CommandeDuPro from "@/components/commandePro";
import { NextPage } from "next";

const MesCommandes:NextPage=()=>{
    return(
        <div>
            <span>Mes commandes</span>
            <br />
            <CommandeDuPro/>
        </div>
    )
}
export default MesCommandes