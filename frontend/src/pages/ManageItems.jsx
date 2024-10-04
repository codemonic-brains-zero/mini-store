import axios from "axios";
import { useEffect, useState } from "react";

export default function ManageItems() {
  const [database, setDatabase] = useState([]);
  const [itemData, setItemData] = useState({
    itemNumber: 1,
    itemName: '',
    hSN_SAC: '',
    price: 0,
    gST: 0,
  });

  const getItemNumber = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_SERVER_URL}${import.meta.env.VITE_GET_ITEMS}`);
      setDatabase(response.data.items.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const addItems = async () => {
    const { itemName, hSN_SAC, price, gST } = itemData;
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_SERVER_URL}${import.meta.env.VITE_ADD_ITEM}`, {
        Item_Number: itemData.itemNumber,
        Item_Name: itemName,
        HSN_SAC: hSN_SAC,
        Price: price,
        GST: gST,
      });
      console.log(response);
      setItemData((prev) => ({
        ...prev,
        itemNumber: prev.itemNumber + 1, // increment item number
        itemName: '',
        hSN_SAC: '',
        price: 0,
        gST: 0,
      }));
      getItemNumber(); // refresh the item list
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    getItemNumber();
  }, []);

  return (
    <>
      <header className="billing-header">
        <div className="header-left">
          <h1>Add Items</h1>
          <p><strong>Time:</strong> 01:00 PM</p>
          <p><strong>Date:</strong> 01 / 10 / 2024</p>
        </div>
        <div className="header-right">
          <h2>SHOPNAME</h2>
          <p>9876543210</p>
          <div className="avatar"><span>AVT</span></div>
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
              <td>{itemData.itemNumber}</td>
              <td>
                <input
                  name="itemName"
                  type="text"
                  value={itemData.itemName}
                  onChange={handleInputChange}
                  placeholder="Enter Item Name"
                />
              </td>
              <td>
                <input
                  name="hSN_SAC"
                  type="number"
                  value={itemData.hSN_SAC}
                  onChange={handleInputChange}
                  placeholder="Enter HSN / SAC"
                />
              </td>
              <td>
                <input
                  name="price"
                  type="number"
                  value={itemData.price}
                  onChange={handleInputChange}
                  placeholder="Enter Price"
                />
              </td>
              <td>
                <input
                  name="gST"
                  type="number"
                  value={itemData.gST}
                  onChange={handleInputChange}
                  placeholder="Enter GST Number"
                />
              </td>
              <td>
                <span>{Number(itemData.price) + Number(itemData.gST) || 0}</span>
              </td>
              <td>
                <button onClick={addItems}>Submit</button>
              </td>
            </tr>
            {database?.map(({ Item_Number, Item_Name, HSN_SAC, Price, GST }, index) => (
              <tr key={index}>
                <td>{Item_Number}</td>
                <td>{Item_Name}</td>
                <td>{HSN_SAC}</td>
                <td>{Price}</td>
                <td>{GST}</td>
                <td>{Number(Price) + Number(GST)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
