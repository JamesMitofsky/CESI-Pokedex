import { Link } from "react-router-dom";
import DeleteSignSvg from "../assets/delete-button.svg";


const DeletePalButton = () => {
  
    return (
      <div className="flex justify-center items-center bottom-0 left-0 right-0 p-4">
        <Link
          className="flex justify-center items-center text-3xl bg-red-500 hover:bg-red-700 font-bold p-3 rounded-full mr-4"
          to="/supprimer"
        >
          <img src={DeleteSignSvg} className="w-10" alt="Delete" />
        </Link>
      </div>
    );
  };
  
  export default DeletePalButton;
