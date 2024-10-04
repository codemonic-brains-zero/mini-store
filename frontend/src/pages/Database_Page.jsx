import { useState, useEffect } from "react";
import axios from "axios";

export default function Database_Page() {
  const [database, setDatabase] = useState([]);
  
  // Fetch the environment variables
  const FRONT_SERVER = import.meta.env.VITE_REACT_SERVER_URL || 'http://localhost:5000';
  const GET_ITEMS = import.meta.env.VITE_GET_ITEMS || '/api/v1/item/get-items';

  // Fetch items from API
  const getDatabase = async () => {
    try {
      const response = await axios.get(`${FRONT_SERVER}${GET_ITEMS}`);
      console.log(response.data.items);
      setDatabase(response.data.items);
    } catch (err) {
      console.log("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    getDatabase();
  }, []);

  return (
    <>

      {/* <div className="billingBox">
        <div className="billing-content">
          <table className="billing-table">
            <thead className="sticky top-0">
              <tr>
                <th>Item Number</th>
                <th>Item Name</th>
                <th>HSN/SAC</th>
                <th>Price</th>
                <th>Gst</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {database?.map(({ Item_Number, Item_Name, HSN_SAC, Price, GST }, index) => (
                <tr key={index}>
                  <td className="text-center h-10 w-32 text-xl rounded-xl bg-inherit p-2">
                    {Item_Number}
                  </td>
                  <td className="text-center h-10 text-xl rounded-xl bg-inherit p-2">
                    {Item_Name}
                  </td>
                  <td className="text-center h-10 text-xl rounded-xl bg-inherit p-2">
                    {HSN_SAC}
                  </td>
                  <td className="text-center h-10 text-xl rounded-xl bg-inherit p-2">
                    {Price}
                  </td>
                  <td>{GST}</td>
                  <td>{Number(Price) + Number(GST)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}


      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl bg-billingBgColor text-white">
              <th className="w-2">
                {/* <label>
                  <input type="checkbox" className="checkbox bg-white" />
                </label> */}
                Select
              </th>
              <th className="w-28">Item Number</th>
              <th className="text-center">Item Name</th>
              <th className="text-center">HSN/SAC</th>
              <th className="text-center">Price</th>
              <th className="text-center">Gst</th>
              <th className="text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            {database?.map(
              ({ Item_Number, Item_Name, HSN_SAC, Price, GST }, index) => (
                <tr key={index} className="hover text-xl text-center">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="w-28 text-center">{Item_Number}</td>
                  <td className="text-center">{Item_Name}</td>
                  <td className="text-center">{HSN_SAC}</td>
                  <td className="text-center">{Price}</td>
                  <td className="text-center">{GST}</td>
                  <td className="text-center">{Number(Price) + Number(GST)}</td>
                </tr>
              )
            )}
          </tbody>
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Item Number</th>
              <th>Item Name</th>
              <th>HSN/SAC</th>
              <th>Price</th>
              <th>Gst</th>
              <th>Amount</th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </>
  );
}
