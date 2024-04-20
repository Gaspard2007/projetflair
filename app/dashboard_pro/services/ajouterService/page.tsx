'use client'
import { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Switch } from "antd";

const AjouterUnService = () => {
    const [description, setDescription] = useState<EditorState>(EditorState.createEmpty());

    const onEditorStateChange = (editorState: EditorState) => {
        setDescription(editorState);
    };

    useEffect(() => {
        // Code à exécuter après le rendu initial (côté client)
        // Initialisation de l'éditeur ou toute autre logique dépendant de `window`
        // Assurez-vous d'importer les scripts ou d'effectuer des actions spécifiques au client ici
    }, []); // Le tableau vide [] signifie que useEffect ne s'exécute qu'une seule fois après le rendu initial


    return (
        <div style={{ paddingRight: "5%" }}>
            <br />
            <div>
                <span>Ajouter un service</span>
                <p>Information sur ce service</p>
            </div>
            <div style={{ width: "100%", height: "1px", background: "#EAEAEA" }}></div>
            <br />
            <div>
                <label>Titre du service</label>
                <input
                    className="text-lg rounded outline-none"
                    style={{ width: "100%", padding: "11px", border: "solid 2px #EAEAEA", marginTop: "2%" }}
                    type="text"
                    placeholder="Exemple: Coloration + Shampoing + Brushing"
                />
            </div>
            <br />
            <div className="flex">
                <div>
                    <label>Catégorie</label>
                    <input
                        className="text-lg rounded outline-none"
                        style={{ width: "100%", padding: "11px", border: "solid 2px #EAEAEA", marginTop: "2%" }}
                        type="text"
                        placeholder="Exemple: Coloration + Shampoing + Brushing"
                    />
                </div>
                <div className="flex flex-col" style={{ marginLeft: "20px" }}>
                    <label>Service à domicile ?</label>
                    <span className="text-sm">Ce service bénéficiera des services à domicile que vous fournissez</span>
                    <div style={{ marginTop: "5px" }}>
                        <Switch />
                    </div>
                </div>
            </div>
            <br />
            <div className="flex">
                <div style={{ marginRight: "20px" }}>
                    <label>Durée</label>
                    <input
                        className="text-lg rounded outline-none"
                        style={{ width: "100%", padding: "11px", border: "solid 2px #EAEAEA", marginTop: "2%" }}
                        type="text"
                        placeholder="Exemple: 30 minutes"
                    />
                </div>
                <div>
                    <label>Disponibilité</label>
                    <select name="availability" id="availability" className="text-lg rounded outline-none" style={{ width: "100%", padding: "11px", border: "solid 2px #EAEAEA", marginTop: "2%" }}>
                        
                    </select>
                </div>
            </div>
            <label>Paragraphe</label>
                <br />
                <br />
                    <Editor
                        editorState={description}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                
            </div>
      
    );
};

export default AjouterUnService;
