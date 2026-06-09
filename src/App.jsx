import { useState } from "react";
import "./App.css";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <img
          src="/image.png"
          alt="karuppayi"
          className="profile-image"
        />

        <h2>Karuppayi</h2>

        {!showDetails ? (
          <button
            className="btn"
            onClick={() => setShowDetails(true)}
          >
            View Details
          </button>
        ) : (
          <>
            <div className="details">
              <p><strong>Name:</strong> KARUPPAYI</p>
              <p><strong>DOB:</strong> 1962</p>
              <p><strong>Place:</strong> Thatchanguritchi, Tiruchirappalli-621712</p>
              <p><strong>Phone No:</strong> 8122898359</p>
              <p><strong>Account No:</strong> 11295043387</p>
              <p><strong>PAN No:</strong> CLKPV3212Q</p>
              <p><strong>Aadhar No:</strong>8699 6735 9596</p>
              <p><strong>Gold Coins:</strong> 108</p>
              <p><strong>Diamond:</strong> 120</p>
              <p><strong>Gold Bar:</strong> 5</p>
              <p><strong>Amount:</strong> 1500 CR</p>

              <hr />

              <div className="note">
                This treasure was found in the earth.
                <br />
                <br />
                <strong>Owner: KARUPPAYI</strong>
              </div>
            </div>

            <button
              className="close-btn"
              onClick={() => setShowDetails(false)}
            >
              Close Details
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;