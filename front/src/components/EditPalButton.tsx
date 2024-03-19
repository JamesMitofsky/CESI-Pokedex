import { Link } from "react-router-dom";
import EditSignSvg from "../assets/edit-button.svg";

export default function EditPalButton() {
  return (

    <div className="flex justify-center items-center bottom-0 left-0 right-0 p-4">
      <Link
        className="flex justify-center items-center text-3xl bg-blue-500 hover:bg-blue-700 font-bold p-3 rounded-full"
        to="/modifier"
      >
        <img src={EditSignSvg} className="w-10" alt="Modifier"/>
      </Link>
    </div>
  );
}
