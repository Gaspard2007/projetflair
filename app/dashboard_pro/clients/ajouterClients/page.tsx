import { Button, ConfigProvider, Select, Upload } from "antd";
import { NextPage } from "next";

const AjouterClient: NextPage = () => {
    return (
        <div>
            <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[86px] box-border gap-[23px_0px] tracking-[normal]">
                <div className="w-[82px] h-[34px] relative hidden" />
                <main className="w-[1346px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full" style={{ marginTop: '25px' }}>
                    <section className="flex-1 flex flex-row items-start justify-start gap-[0px_18px] max-w-full text-left text-lg text-gray-300 font-roboto">
                        <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border max-w-[calc(100%_-_324px)] mq750:max-w-full">
                            <div className="self-stretch flex flex-col items-end justify-start gap-[47px_0px] max-w-full mq1050:gap-[47px_0px]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[13px_0px] max-w-full">
                                    <div className="w-[680px] flex flex-col items-start justify-start gap-[17px_0px] max-w-full">
                                        <div className="w-[296px] flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border text-5xl text-darkslategray-200 font-poppins">
                                            <h3 className="m-0 flex-1 relative text-inherit leading-[28.8px] font-normal font-inherit">
                                               Ajouter un client hors Flair
                                            </h3>
                                        </div>
                                        <br />
                                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[15px_0px] max-w-full">
                                            <div className="w-[114px] relative leading-[21.6px] inline-block">
                                                Image profil
                                            </div>
                                            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_13px] max-w-full text-smi text-slategray">
                                                <img
                                                    className="h-[70px] w-[70px] w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]"
                                                    alt=""
                                                    loading="lazy"
                                                    src="/profil.avif"
                                                />
                                                <div className="flex-1 flex flex-row items-start justify-start gap-[10px_0px] min-w-[394px] max-w-full" style={{ margin: '20px' }}>
                                                    <ConfigProvider
                                                        theme={{
                                                            token: {
                                                                colorBorder: '#000',
                                                                colorPrimary: '#000',
                                                                colorBgMask: 'rgba(0, 0, 0,)',
                                                                colorBgBase: '#000',
                                                                colorText: '#fff'
                                                            },
                                                        }}
                                                    >
                                                        <Upload>
                                                            <Button style={{ marginRight: '20px' }}>Télécharger</Button>
                                                        </Upload>
                                                    </ConfigProvider>
                                                    <button
                                                        className="cursor-pointer p-[7px] bg-snow w-[86px] h-[40px] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid hover:bg-gainsboro-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-tomato"
                                                        style={{ borderColor: 'red' }}
                                                    >
                                                        <div className="relative text-lg leading-[20.8px] font-roboto text-red-100 text-center" style={{ paddingBottom: '2px' }}>
                                                            Supprimer
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="self-stretch relative leading-[22.4px]">
                                                    *La taille de l'image doit être d'au moins 320px. Fichiers autorisés : .png ou .jpg.
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="w-[238px] h-[22px] relative">
                                            <div>Information générales</div>
                                        </div>
                                        <br />
                                        <div className="w-[471px] flex flex-col items-start justify-start gap-[8px_0px] max-w-full text-mini">
                                            <div className="w-[104px] relative leading-[24px] inline-block">
                                                Status
                                            </div>
                                            <div className="z-10">
                                                <Select></Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[8px_0px] max-w-full">
                                        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_24px] max-w-full">
                                            <div className="flex-1 flex flex-col items-start justify-start gap-[21px_0px] min-w-[306px] max-w-full">
                                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                                                    <div className="w-[79px] relative leading-[24px] inline-block">
                                                        Nom  <span style={{ color: 'red' }}>*</span>
                                                    </div>
                                                    <input
                                                        className="[outline:none] bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[1px] border-solid border-gainsboro-500 text-lg"
                                                        type="text"
                                                    />
                                                </div>
                                                <br />
                                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                                                    <div className="w-[79px] relative leading-[24px] inline-block">
                                                        Email  <span style={{ color: 'red' }}>*</span>
                                                    </div>
                                                    <input
                                                        className="[outline:none] bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[1px] border-solid border-gainsboro-500 text-lg"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 flex flex-col items-start justify-start gap-[21px_0px] min-w-[306px] max-w-full">
                                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                                                    <div className="w-[79px] relative leading-[24px] inline-block">
                                                        Prénom
                                                    </div>
                                                    <input
                                                        className="[outline:none] bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[1px] border-solid border-gainsboro-500 text-lg"
                                                        type="text"
                                                    />
                                                </div>
                                                <br />
                                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                                                    <div className="w-[79px] relative leading-[24px] inline-block">
                                                        Numéros de téléphone <span style={{ color: 'red' }}>*</span>
                                                    </div>
                                                    <input
                                                        className="[outline:none] bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[1px] border-solid border-gainsboro-500 text-lg"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Addresse</h1>
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] max-w-full text-base">
                                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_24px] max-w-full">
                                               
                                                <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px] min-w-[306px] max-w-full">
                                                    
                                                    <div className="w-14 relative leading-[24px] inline-block">
                                                        Ville
                                                    </div>
                                                    <div className="self-stretch flex flex-col items-start justify-start gap-[22px_0px] text-mini">
                                                        <input
                                                            className="[outline:none] bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[1px] border-solid border-gainsboro-500 text-lg"
                                                            type="text"
                                                        />
                                                        <br />
                                                        <div className="w-[293px] relative leading-[24px] inline-block">
                                                            Complément d’adresse
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px] min-w-[306px] max-w-full text-mini">
                                                    <div className="w-[108px] relative leading-[24px] inline-block">
                                                        Code postal
                                                    </div>
                                                    <input
                                                        className="[outline:none] bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[1px] border-solid border-gainsboro-500 text-lg"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AjouterClient;
