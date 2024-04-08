import type { NextPage } from "next";
import MenuParticulier from "@/components_récurent/menu-particulier";
import MenuDashboardParticulier from "@/components_récurent/menu-dashboard-particulier";

const Notifications: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[241px] box-border gap-[23px_0px] tracking-[normal]">
      <MenuParticulier
       
      />
      <div className="w-[965px] h-[55px] relative hidden max-w-full" />
      <div className="w-[595.6px] h-px relative bg-gainsboro-500 hidden max-w-full" />
      <div className="w-[123px] h-[55px] relative bg-white hidden" />
      <div className="w-[122.8px] h-px relative bg-gainsboro-500 hidden" />
      <div className="w-[123.7px] h-px relative bg-gainsboro-500 hidden" />
      <div className="w-[965px] h-[155px] relative hidden max-w-full" />
      <div className="w-[965px] h-[78px] relative hidden max-w-full" />
      <div className="w-[596px] h-[78px] relative bg-white hidden max-w-full" />
      <div className="w-[123px] h-[78px] relative bg-white hidden" />
      <div className="w-[123px] h-[78px] relative bg-white hidden" />
      <div className="w-[123.7px] h-px relative bg-gainsboro-500 hidden" />
      <div className="w-[596px] h-[78px] relative bg-white hidden max-w-full" />
      <div className="w-[123px] h-[78px] relative bg-white hidden" />
      <div className="w-[123px] h-[78px] relative bg-white hidden" />
      <div className="w-[123.7px] h-px relative bg-gainsboro-500 hidden" />
      <section className="w-[1346px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full text-left text-5xl text-darkslategray-200 font-poppins">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0px_18px] max-w-full">
          <MenuDashboardParticulier />
          <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border max-w-[calc(100%_-_324px)] mq750:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[27px_0px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[28.8px] font-normal font-inherit">
                Notifications
              </h3>
              <div className="self-stretch box-border flex flex-col items-start justify-start gap-[14px_0px] max-w-full z-[1] text-base text-gray-300 font-roboto border-[1px] border-solid border-whitesmoke-500">
                <div className="self-stretch h-[211px] relative box-border hidden border-[1px] border-solid border-whitesmoke-500" />
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-mini text-slategray">
                  <div className="h-[46px] w-[46px] absolute my-0 mx-[!important] bottom-[-14px] left-[24px] rounded-41xl bg-whitesmoke-100 box-border border-[1px] border-solid border-whitesmoke-400" />
                  <div className="flex-1 bg-aliceblue flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] z-[2]">
                    <div className="self-stretch w-[965px] relative bg-aliceblue hidden max-w-full" />
                    <div className="flex-1 flex flex-col items-end justify-start min-w-[467px] max-w-full mq1050:min-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="w-[649px] flex flex-row items-center justify-start gap-[0px_11px] max-w-full mq1050:flex-wrap">
                          <div className="flex-1 rounded-tl-8xs rounded-tr-none rounded-b-none bg-white flex flex-row items-center justify-start pt-4 px-[15px] pb-[15px] box-border min-w-[187px] max-w-full z-[4]">
                            <div className="h-[55px] w-[596px] relative rounded-tl-8xs rounded-tr-none rounded-b-none bg-white hidden max-w-full" />
                            <div className="w-[187px] relative leading-[24px] inline-block shrink-0 z-[5]">
                              Notifications générales
                            </div>
                          </div>
                          <div className="relative leading-[24px] z-[6]">
                            In-app
                          </div>
                        </div>
                      </div>
                      <div className="w-[122.8px] h-px relative bg-gainsboro-500 z-[2]" />
                    </div>
                    <input
                      className="w-[123px] [border:none] [outline:none] bg-white h-[55px] flex flex-row items-center justify-start pt-4 px-[13px] pb-[15px] box-border font-roboto text-sm text-slategray z-[7]"
                      placeholder="Email"
                      type="text"
                    />
                    <input
                      className="w-[124px] [border:none] [outline:none] bg-white h-[55px] rounded-tl-none rounded-tr-8xs rounded-b-none flex flex-row items-center justify-start pt-4 px-3.5 pb-[15px] box-border font-roboto text-mini text-slategray z-[9]"
                      placeholder="SMS"
                      type="text"
                    />
                  </div>
                  <input
                    className="[border:none] [outline:none] bg-white h-[78px] w-[124px] absolute my-0 mx-[!important] right-[-1px] bottom-[-77px] z-[19]"
                    type="text"
                  />
                </div>
                <div className="w-[792px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                    <div className="w-[319px] flex flex-col items-start justify-start gap-[4px_0px]">
                      <div className="w-[293px] relative leading-[19.2px] inline-block z-[14]">
                        Notifications générales
                      </div>
                      <div className="self-stretch relative text-sm leading-[22.4px] text-slategray z-[14]">{`Toutes les notifications `}</div>
                    </div>
                    <div className="w-[165px] flex flex-row items-start justify-start gap-[0px_81px]">
                      <div className="h-6 w-[42px] relative rounded-980xl bg-limegreen-200 box-border z-[16] border-[1px] border-solid border-limegreen-200">
                        <div className="absolute top-[0px] left-[0px] rounded-980xl bg-limegreen-200 box-border w-full h-full hidden border-[1px] border-solid border-limegreen-200" />
                        <div className="absolute top-[1px] left-[19px] rounded-[50%] bg-white w-[22px] h-[22px] z-[1]" />
                      </div>
                      <div className="h-6 w-[42px] relative rounded-980xl bg-limegreen-200 box-border z-[18] border-[1px] border-solid border-limegreen-200">
                        <div className="absolute top-[0px] left-[0px] rounded-980xl bg-limegreen-200 box-border w-full h-full hidden border-[1px] border-solid border-limegreen-200" />
                        <div className="absolute top-[1px] left-[19px] rounded-[50%] bg-white w-[22px] h-[22px] z-[1]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-x-auto flex flex-row items-end justify-start relative max-w-full">
                  <div className="h-full w-full absolute my-0 mx-[!important] right-[1px] bottom-[1px] shrink-0 z-[20]" />
                  <div className="w-[596px] shrink-0 flex flex-col items-start justify-start gap-[15px_0px] max-w-[calc(100%_-_370px)]">
                    <div className="self-stretch h-px relative bg-gainsboro-500 z-[12]" />
                    <div className="w-[351px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px_0px]">
                        <div className="relative leading-[19.2px] z-[23]">
                          Statut de réservation
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start relative text-sm text-slategray">
                          <div className="h-[46px] w-[46px] absolute my-0 mx-[!important] top-[-16px] left-[7px] rounded-41xl bg-whitesmoke-100 box-border border-[1px] border-solid border-whitesmoke-400" />
                          <div className="flex-1 relative leading-[22.4px] z-[23]">
                            Toutes les statut de réservations
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative bg-gainsboro-500 z-[21]" />
                  </div>
                  <div className="w-[123px] shrink-0 flex flex-col items-start justify-start relative gap-[77px_0px]">
                    <div className="self-stretch h-px relative bg-gainsboro-500 z-[14]" />
                    <div className="self-stretch h-px relative bg-gainsboro-500 z-[23]" />
                    <div className="w-[42px] h-6 absolute my-0 mx-[!important] bottom-[27px] left-[15px] rounded-980xl bg-limegreen-200 box-border z-[25] border-[1px] border-solid border-limegreen-200">
                      <div className="absolute top-[0px] left-[0px] rounded-980xl bg-limegreen-200 box-border w-full h-full hidden border-[1px] border-solid border-limegreen-200" />
                      <div className="absolute top-[1px] left-[19px] rounded-[50%] bg-white w-[22px] h-[22px] z-[1]" />
                    </div>
                  </div>
                  <div className="w-[123px] shrink-0 flex flex-col items-start justify-start relative gap-[77px_0px]">
                    <div className="self-stretch h-px relative bg-gainsboro-500 z-[16]" />
                    <div className="self-stretch h-px relative bg-gainsboro-500 z-[25]" />
                    <div className="w-[42px] h-6 absolute my-0 mx-[!important] bottom-[27px] left-[15px] rounded-980xl bg-limegreen-200 box-border z-[27] border-[1px] border-solid border-limegreen-200">
                      <div className="absolute top-[0px] left-[0px] rounded-980xl bg-limegreen-200 box-border w-full h-full hidden border-[1px] border-solid border-limegreen-200" />
                      <div className="absolute top-[1px] left-[19px] rounded-[50%] bg-white w-[22px] h-[22px] z-[1]" />
                    </div>
                  </div>
                  <div className="w-[124px] bg-white shrink-0 flex flex-row items-center justify-start py-[27px] px-[15px] box-border z-[28]">
                    <div className="h-[78px] w-[124px] relative bg-white hidden" />
                    <div className="h-6 w-[42px] relative rounded-980xl bg-lavender-300 box-border z-[29] border-[1px] border-solid border-lavender-300">
                      <div className="absolute top-[0px] left-[0px] rounded-980xl bg-lavender-300 box-border w-full h-full hidden z-[29] border-[1px] border-solid border-lavender-300" />
                      <div className="absolute top-[1px] left-[1px] rounded-[50%] bg-white w-[22px] h-[22px] z-[30]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;