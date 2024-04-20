import { useState } from "react";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { Switch } from "antd";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
  ssr: false
});

const AjouterUnService = () => {
  const [description, setDescription] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: EditorState) => {
    setDescription(editorState);
  };

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
          style={{
            width: "100%",
            padding: "11px",
            border: "solid 2px #EAEAEA",
            marginTop: "2%"
          }}
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
            style={{
              width: "100%",
              padding: "11px",
              border: "solid 2px #EAEAEA",
              marginTop: "2%"
            }}
            type="text"
            placeholder="Exemple: Coloration + Shampoing + Brushing"
          />
        </div>
        <div className="flex flex-col" style={{ marginLeft: "20px" }}>
          <label>Service à domicile ?</label>
          <span className="text-sm">
            Ce service bénéficiera des services à domicile que vous fournissez
          </span>
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
            style={{
              width: "100%",
              padding: "11px",
              border: "solid 2px #EAEAEA",
              marginTop: "2%"
            }}
            type="text"
            placeholder="Exemple: 30 minutes"
          />
        </div>
        <div>
          <label>Disponibilité</label>
          <select
            name="availability"
            id="availability"
            className="text-lg rounded outline-none"
            style={{
              width: "100%",
              padding: "11px",
              border: "solid 2px #EAEAEA",
              marginTop: "2%"
            }}
          >
            {/* Ajoutez les options pour la disponibilité */}
          </select>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <label>Paragraphe</label>
        <br />
        <br />
        <Editor
          editorState={description}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </div>
    </div>
  );
};

export default AjouterUnService;
