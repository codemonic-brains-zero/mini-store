export default function ManageItems() {
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
              <td>$ array length </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="text"
                  placeholder="Enter Item Name"
                />
              </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="number"
                  placeholder="Enter HSN / SAC"
                />
              </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="number"
                  placeholder="Enter Price"
                />
              </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2"
                  type="number"
                  placeholder="Enter GST Number"
                />
              </td>
              <td className="h-20">
                <input
                  className="text-center h-10 text-xl rounded-xl bg-inherit p-2 w-40"
                  type="number"
                  placeholder="Enter AMOUNT"
                />
              </td>
              <td className="h-20">
                <button className="rounded-xl p-2 border-2 hover:bg-zinc-300 w-40 transition-all">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

   
    </>
  );
}
