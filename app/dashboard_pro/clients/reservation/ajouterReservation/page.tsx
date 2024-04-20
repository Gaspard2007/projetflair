import { Button, ConfigProvider, Upload } from "antd";
import { NextPage } from "next";

const AjouterReservation:NextPage=()=>{
    return(
        <div>
            <span>Creer une réservation pour:</span>
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
  
    )
}
export default AjouterReservation