import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkToCreationPageButton() {
    return (
        <div className="">
          <Link to="/creationPage">
            <div className="absolute bottom-4 right-48 flex justify-center items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">
                <span className="text-6xl">+</span>
              </button>
            </div>
          </Link>
        </div>
      );
}