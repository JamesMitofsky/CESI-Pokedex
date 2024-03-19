import { Link } from "react-router-dom";
import PlusSignSvg from "../assets/plus-sign.svg";

export default function LinkToCreationPageButton() {
  return (
    <Link
      className="absolute bottom-0 right-0 m-10 flex justify-center items-center text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full"
      to="/creationPage"
    >
      <img src={PlusSignSvg} className="w-10" />
    </Link>
  );
}
