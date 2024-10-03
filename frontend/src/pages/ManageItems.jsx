import axios from "axios";
import { useEffect, useState } from "react";

export default function ManageItems() {
  const [database, setDatabase] = useState([]);
  const [item_Number, setitem_Number] = useState([]);
  const [item_Name, setItem_Name] = useState([]);
  const [hSN_SAC, setHSN_SAC] = useState([]);
  const [price, setPrice] = useState([]);
  const [gST, setGST] = useState([]);
  const [searching, setSearching] = useState([]);

  console.log(item_Number);
  const getItemNumber = async () => {
    axios
      .get(`${import.meta.env.VITE_REACT_SERVER_URL}/api/v1/item/get-items`)
      .then((response) => {
        console.log(response.data.items);
        setitem_Number(response.data.items.length + 1);
        setDatabase(response.data.items.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addItems = async () => {
    axios
      .post(`${import.meta.env.VITE_REACT_SERVER_URL}/api/v1/item/add-item`, {
        Item_Number: item_Number,
        Item_Name: item_Name,
        HSN_SAC: hSN_SAC,
        Price: price,
        GST: gST,
      })
      .then(function (response) {
        console.log(response);
        setitem_Number(item_Number + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  

  // const found = Object.values(database).includes(searching);
  // console.log(found)
  // console.log(searching)
  
  useEffect(() => {
    getItemNumber();
  }, [item_Number]);

  return (
    <>
      <header className="billing-header">
        <div className="header-left">
          <h1>Add Items</h1>
          <p>
            <strong>Time:</strong> 01:00 PM
          </p>
          <p>
            <strong>Date:</strong> 01 / 10 / 2024
          </p>
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
        <table className="billing-table">
          <thead>
            <tr>
              <th>Item Number</th>
              <th>Item Name</th>
              <th>HSN/SAC</th>
              <th>PRICE</th>
              <th>GST</th>
              <th>AMOUNT</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item_Number}</td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="text"
                  onChange={(e) => {setItem_Name(e.target.value),setSearching(e.target.value)}}
                  placeholder="Enter Item Name"
                />
              </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="number"
                  onChange={(e) => setHSN_SAC(e.target.value)}
                  placeholder="Enter HSN / SAC"
                />
              </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter Price"
                />
              </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="number"
                  onChange={(e) => setGST(e.target.value)}
                  placeholder="Enter GST Number"
                />
              </td>
              <td className="h-20">
                <span     className="text-center h-10 text-xl rounded-xl bg-inherit p-2 w-40">{Number(price) + Number(gST) || 0}</span>
                
              </td>
              <td className="h-20">
                <button
                  className="rounded-xl p-2 border-2 hover:bg-zinc-300 w-40 transition-all"
                  onClick={addItems}
                >
                  Submit
                </button>
              </td>
            </tr>
            {database?.map(
                ({ Item_Number, Item_Name, HSN_SAC, Price, GST }, index) => (
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
                )
              )}
          </tbody>
        </table>
      </div>   
    </>
  );
}
