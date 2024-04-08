import type { NextPage } from "next";
import MenuParticulier from "@/components_récurent/menu-particulier";
import MenuDashboardParticulier from "@/components_récurent/menu-dashboard-particulier";

const MesRservations: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-14 box-border gap-[23px_0px] tracking-[normal]">
      <MenuParticulier />
      <section className="w-[1236px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full shrink-0 text-left text-5xl text-darkslategray-200 font-poppins">
        <div className="flex flex-row items-start justify-start gap-[0px_18px] max-w-full">
          <MenuDashboardParticulier/>
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[830px] max-w-full mq1050:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[30px_0px]">
              <h2 className="m-0 w-[251px] relative text-inherit leading-[28.8px] font-normal font-inherit inline-block mq750:text-lgi mq750:leading-[23px]">
                Mes réservations
              </h2>
              <div className="w-[830px] relative text-mini leading-[25.6px] font-roboto text-black inline-block">
                Actuellement, vous n’avez aucune réservation en cours. Explorez
                parmi les professionnels de la beauté les services qui vous
                conviennent le mieux.
              </div>
              <button className="cursor-pointer py-2.5 pr-3.5 pl-[18px] bg-black rounded-8xs shadow-[0px_0px_0px_#4c40ed] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
                <div className="relative text-sm leading-[21px] font-roboto text-white text-center">
                  Explorer les services
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MesRservations;