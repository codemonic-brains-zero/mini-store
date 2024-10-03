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
      <header className="billing-header">
        <div className="header-left">
          <h1>Database</h1>
          <p><strong>Time:</strong> 01:00 PM</p>
          <p><strong>Date:</strong> 01 / 10 / 2024</p>
        </div>
        <div className="header-right">
          <h2>SHOPNAME</h2>
          <p>9876543210</p>
          <div className="avatar">
            <span>AVT</span>
          </div>
        </div>
      </header>

      <div className="billingBox">
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
      </div>
    </>
  );
}
