export default function ManageItems() {
  return (
    <>
        <table className="billing-table">
          <thead>
            <tr>
              <th>Sr.no</th>
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
                <td>1</td>
                <td><input type="text" placeholder="Enter Item Name"/></td>
                <td><input type="text" placeholder="Enter HSN / SAC"/></td>
                <td><input type="text" placeholder="Enter Price"/></td>
                <td><input type="text" placeholder="Enter GST Number"/></td>
                <td><input type="number" placeholder="Enter AMOUNT"/></td>
                <td><button>Submit</button></td>
              </tr>
          </tbody>
        </table>
    </>
  )
}
