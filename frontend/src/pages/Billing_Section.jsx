import calLottieImg from "../assets/images/20943780.jpg";
import data from "../../../raw.json";
export default function Billing_Section() {
  return (
    <div className="billing-page">
      {/* Header Section */}
      <header className="billing-header">
        <div className="header-left">
          <h1>Billing</h1>
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

      {/* Billing Information */}
      <div className="billing-info">
        <div className="customer-details">
          <p>
            <strong>Name:</strong> $$$$$$$$$$$$$$
          </p>
          <p>
            <strong>Mobile:</strong> $$$$$$$$$$$$$$
          </p>
        </div>
      </div>

      {/* Billing Table Section */}
        {/* <div className="billing-image">
          <img
            src={calLottieImg}
            alt="Billing Illustration"
          />
        </div> */}
      <div className="billing-content h-96 overflow-auto"> 
        <table className="billing-table">
          <thead className="sticky top-0">
            <tr>
              <th>Sr.no</th>
              <th>Item Name</th>
              <th>HSN/SAC</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Gst</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {data?.map(
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
                      1
                    </td>
                    <td className="text-center h-10 text-xl rounded-xl bg-inherit p-2">
                      {Price}
                    </td>
                    <td>{GST}</td>
                    <td>{Price + GST}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="billing-footer">
        <button className="print-button border-2 rounded-lg font-bold">Generate Bill</button>
        <div className="flex flex-row gap-10">
          <p>
            <span className="text-4xl font-bold">Total Items:</span> 
            <span className="text-4xl font-bold text-yellow-400">$$$</span> 
          </p>
          <p>
            <span className="text-4xl font-bold">Total:</span> 
            <span className="text-4xl font-bold text-yellow-400">0000.00 ₹</span>
          </p>
        </div>
      </div>
    </div>
  )
}
