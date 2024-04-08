import type { NextPage } from "next";

import Link from 'next/link'
import MenuParticulier from "../components_récurent/menu-particulier";
import MenuDashboardParticulier from "../components_récurent/menu-dashboard-particulier";


const MiddleFrame: NextPage = () => {
  return (
    
    <div className="">
  
    <section className="">
      <div className="">
        <MenuDashboardParticulier/>
        <div>

        <div>
            <h2 className="">
              Mes réservations
            </h2>
            <p className="">
            Bonjour Miss kitty (vous n’êtes pas Miss kitty ? Déconnexion)
À partir du tableau de bord de votre compte, vous pouvez visualiser vos commandes récentes, gérer vos réservations ainsi que changer votre mot de passe et les détails de votre compte.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default MiddleFrame;