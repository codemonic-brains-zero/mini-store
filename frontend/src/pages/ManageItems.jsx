import data from '../../../raw.json'
export default function ManageItems() {
  return (
    <>
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
                <input className="text-center h-10 text-xl rounded-xl bg-inherit p-2" type="text" placeholder="Enter Item Name" />
              </td>
              <td className="h-20">
                <input className="text-center h-10 text-xl rounded-xl bg-inherit p-2" type="number" placeholder="Enter HSN / SAC" />
              </td>
              <td className="h-20">
                <input className="text-center h-10 text-xl rounded-xl bg-inherit p-2" type="number" placeholder="Enter Price" />
              </td>
              <td className="h-20">
                <input className="text-center h-10 text-xl rounded-xl bg-inherit p-2" type="number" placeholder="Enter GST Number" />
              </td>
              <td className="h-20">
                <input className="text-center h-10 text-xl rounded-xl bg-inherit p-2 w-40" type="number" placeholder="Enter AMOUNT" />
              </td>
              <td className="h-20">
                <button  className="rounded-xl p-2 border-2 hover:bg-zinc-300 w-40 transition-all">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <span>Database</span>
      <div className="billing-content">
        <table className="billing-table">
          <thead>
            <tr >
              <th>Item Number</th>
              <th>Item Name</th>
              <th>HSN/SAC</th>  
              <th>Price</th>
              <th>Gst</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({Item_Number, Item_Name, HSN_SAC, Price, GST},index) => (
              <tr key={index}>
                <td className="text-center h-10 w-32 text-xl rounded-xl bg-inherit p-2">{Item_Number}</td>
                <td className="text-center h-10 text-xl rounded-xl bg-inherit p-2">{Item_Name}</td>
                <td className="text-center h-10 text-xl rounded-xl bg-inherit p-2">{HSN_SAC}</td>
                <td className="text-center h-10 text-xl rounded-xl bg-inherit p-2">{Price}</td>
                <td>{GST}</td>
                <td>{Price + GST}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
