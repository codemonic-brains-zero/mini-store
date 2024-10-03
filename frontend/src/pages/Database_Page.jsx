import data from "../../../raw.json";
export default function Database_Page() {

  
  return (
    <>
          <header className="billing-header">
        <div className="header-left">
          <h1>Database</h1>
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
      </div>
    </>
  )
}
