import calLottieImg from "../assets/images/20943780.jpg";
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
      <div className="billing-content">
        <div className="billing-image">
          <img
            src={calLottieImg}
            alt="Billing Illustration"
          />
        </div>
        <table className="billing-table">
          <thead>
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
            {Array.from({ length: 7 }).map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Cookies</td>
                <td>4325</td>
                <td>2</td>
                <td>17</td>
                <td>3.23</td>
                <td>40.46</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="billing-footer">
        <button className="print-button">Print</button>
        <div className="total-info">
          <p>
            <strong>Total Items:</strong> $$$
          </p>
          <p>
            <strong>Total:</strong> 0000.00 ₹
          </p>
        </div>
      </div>
    </div>
  )
}
