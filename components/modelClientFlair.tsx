import { NextPage } from "next";

const ModelClientFlair: NextPage = () => {
    return (
        <div className="flex flex-col items-start rounded" style={{ border: 'solid 2px #EAEAEA', padding: '7%', width:'99%'}}>
            <div className="flex items-center" style={{width:'300px'}}>
                <img
                    className="w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/profil.avif"
                />
                <button className="rounded text-lg" style={{ color: '#4C40ED', background: '#F7F7FF', padding: '9px', marginLeft: '30px' }}>Client Flair</button>
            </div>
            <br /><br />
            <div className="flex text-base" style={{marginLeft:'15%'}}>
               
                <div className="flex flex-col" style={{ marginRight: '30px', fontWeight: '700' }}>
                    <span>Nom</span>
                    <span style={{ marginTop: '10px' }}>Prénom</span>
                    <span style={{ marginTop: '10px' }}>Email</span>
                    <span style={{ marginTop: '10px' }}>Téléphone</span>
                    <span style={{ marginTop: '10px' }}>Adresse</span>
                </div>
                
                <div className="flex flex-col">
                    <span>Miss</span>
                    <span style={{ marginTop: '10px' }}>Kitty</span>
                    <span style={{ marginTop: '10px' }}>miss.kitty@gmail.com</span>
                    <span style={{ marginTop: '10px' }}>+33 06 02 03 04 05</span>
                    <span style={{ marginTop: '10px' }}>06 rue des Alpes, 75016 Paris, France</span>
                </div>
            </div>
            <br />
            <br />
            <div className="flex justify-end items-end">
            <button style={{background:'#EAEAEA', padding:'10px'}} className="rounded text-lg">Consulter ses réservations</button>
            </div>
        </div>
    );
};

export default ModelClientFlair;
