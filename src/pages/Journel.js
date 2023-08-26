import React from "react";
import { HiPlus } from "react-icons/hi";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";

export default function Journel() {
  return (
    <div>
      <div className="">
        <p>JOURNALS</p>
        <span>You can find the complete list of journels here</span>
      </div>

      <div>
        <button>
          <p>
            <HiPlus/>
            <span>Add New Journal</span>
          </p>
        </button>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}
