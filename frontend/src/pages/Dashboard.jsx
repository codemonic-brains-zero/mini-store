import calLottieImg from "../assets/images/62051510.png"
;
export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        {/* Header Section */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Dashboard</h1>
          </div>
          <div className="header-right">
            <div className="shop-info">
              <h2>SHOPNAME</h2>
              <p>9876543210</p>
            </div>
            <div className="avatar">
              <span>AVT</span>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="dashboard-content">
          <div className="dashboard-image">
            <img
              src={calLottieImg}
              alt="Dashboard Illustration"
            />
          </div>

          <div className="dashboard-buttons">
            <button>Add Items</button>
            <button>Edit Items</button>
            <button>Saved Bills</button>
            <button>Revenue</button>
            <button>Edit Shop Info</button>
            <button>Manage A/C</button>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="dashboard-footer">
          <p>Date: 01/10/2024</p>
          <p>Time: 01:00 PM</p>
        </footer>
      </div>
    </>
  );
}
