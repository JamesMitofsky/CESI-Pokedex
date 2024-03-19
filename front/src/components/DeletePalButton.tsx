import { Link } from "react-router-dom";
import DeleteSignSvg from "../assets/delete-button.svg";

interface DeletePalButtonProps {
    creatureId: number; 
  }

const deleteCreature = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/deletePal`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      if (response.ok) {
        console.log("Creature deleted successfully id : ", id);
      } else {
        console.error("Failed to delete creature id : ", id);
      }
    } catch (error) {
      console.error("An error occurred while deleting creature", error);
    }
  };


  const DeletePalButton: React.FC<DeletePalButtonProps> = ({ creatureId }) => {
    const handleDeleteClick = () => {
      deleteCreature(creatureId);
    };
  
    return (
      <div className="flex justify-center items-center bottom-0 left-0 right-0 p-4">
        <Link
          className="flex justify-center items-center text-3xl bg-red-500 hover:bg-red-700 font-bold p-3 rounded-full mr-4"
          to="/supprimer"
          onClick={handleDeleteClick}
        >
          <img src={DeleteSignSvg} className="w-10" alt="Delete" />
        </Link>
      </div>
    );
  };
  
  export default DeletePalButton;
