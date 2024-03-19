import { Link } from "react-router-dom";
import EditSignSvg from "../assets/edit-button.svg";
import { Creature } from "../../types/creature";
import { useState } from "react";


export default function EditPalButton({
    creature,
    setSelectedCreature,
    setIsModifie
  }: {
    creature: Creature;
    setSelectedCreature: (creature: Creature) => void;
  }) {

   
  return (

    <div className="flex justify-center items-center bottom-0 left-0 right-0 p-4">
      <button
        className="flex justify-center items-center text-3xl bg-blue-500 hover:bg-blue-700 font-bold p-3 rounded-full"
        onClick={() => {setSelectedCreature(creature), setIsModifie(true)}}
        // onClick={() => }
      >
        <img src={EditSignSvg} className="w-10" alt="Modifier"/>
      </button>
    </div>
  );
}
