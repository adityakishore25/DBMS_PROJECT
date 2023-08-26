import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import {BsDisplay, BsFillPencilFill,BsFillTrashFill} from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/paperSlice";
import {toast } from "react-hot-toast";




const papers = [
  {
    SLNO: 1,
    journalName: "Journal of Computer Science",
    authorID: "A101",
    paperID: "P001",
    issOrDoi: "ISSN123456",
    type: "Research",
    datePublished: "2023-08-01",
  },
  {
    SLNO: 2,
    journalName: "Journal of Physics",
    authorID: "A102",
    paperID: "P002",
    issOrDoi: "DOI:10.123/abc",
    type: "Experimental",
    datePublished: "2023-07-15",
  },
  {
    SLNO: 3,
    journalName: "Journal of Medicine",
    authorID: "A103",
    paperID: "P003",
    issOrDoi: "ISSN789012",
    type: "Review",
    datePublished: "2023-09-05",
  },
  // ... Add 17 more entries ...
];


export default function Table() {

  const dispatch=useDispatch();
  const {paper} =useSelector((state)=>state);


  const removeClickHandler = () => {
    dispatch(remove(paper.paperID));
    toast.error("Item removed from the Cart");
  };



  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SL NO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Journal Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AuthorID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PaperID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ISS/DOI
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Published
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Download Here
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                   Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {papers.map((paper) => (
                  <tr key={paper.SLNO}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                      {paper.SLNO}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {paper.journalName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        {paper.authorID}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paper.paperID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paper.issOrDoi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paper.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paper.datePublished}
                    </td>
                    <td></td>
                    <td className="flex px-6 py-4 whitespace-nowrap justify-around items-center">
                    <button  className="p-3 bg-yellow-500 rounded-md ">
                    <BsFillPencilFill className="text-black"/>
                    </button>
                    <button onClick={removeClickHandler}  className="p-3 bg-red-700 rounded-md ">
                    <BsFillTrashFill className="text-white"/>
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
