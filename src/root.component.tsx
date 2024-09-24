import React, { useState } from "react";
import "./global.css";

const investments = [
  {
    id: 1,
    name: "Real Estate Fund",
    return: "6%",
    risk: "Low",
    description: "A fund that invests in real estate properties.",
    image:
      "https://img.freepik.com/free-photo/keys-fountain-pen-house-paper-cut-out-calculator-architectural-blueprints_23-2148038690.jpg?t=st=1727188452~exp=1727192052~hmac=ac44d802d7093bcc773c03ab4657812253a51b806c5af5f051d36dc1ea33bb57&w=1380",
  },
  {
    id: 2,
    name: "Tech Fund",
    return: "8%",
    risk: "Medium",
    description: "A fund that invests in technology companies.",
    image:
      "https://img.freepik.com/free-photo/proficient-worker-resolving-performance-related-issues-data-center-mainframes-engineer-utilizing-mock-up-tablet-identify-operational-problems-causing-blade-servers-slowdown_482257-68079.jpg?t=st=1727189468~exp=1727193068~hmac=510715b57468a2a834d76bc9049d434cdfaf0d69012b3082dda48c7fc1983bd6&w=1380",
  },
  {
    id: 3,
    name: "Crypto Fund",
    return: "15%",
    risk: "High",
    description: "A fund that invests in cryptocurrencies.",
    image:
      "https://img.freepik.com/free-photo/beautiful-cryptocurrwncy-concept_23-2149250223.jpg?t=st=1727189427~exp=1727193027~hmac=c4ffb81622060ce9fbced9a644ab28eb94c9c535060ae610897741d544e8d0df&w=1380",
  },
  {
    id: 4,
    name: "Real Estate Fund",
    return: "6%",
    risk: "Low",
    description: "A fund that invests in real estate properties.",
    image:
      "https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?t=st=1727189754~exp=1727193354~hmac=431080e635a97ccbd054df4294e3a4a70a7623634596987efc0f49c6c2f2ab97&w=1380",
  },
  {
    id: 5,
    name: "Tech Fund",
    return: "8%",
    risk: "Medium",
    description: "A fund that invests in technology companies.",
    image:
      "https://img.freepik.com/free-photo/close-up-laptop-keyboard-colorful-neon-illumination-eyeglasses_169016-33914.jpg?t=st=1727189678~exp=1727193278~hmac=17a28402894210b2b40995d958399c62eb41b49b36acc0d0a08199de4afdb890&w=1380",
  },
  {
    id: 6,
    name: "Crypto Fund",
    return: "15%",
    risk: "High",
    description: "A fund that invests in cryptocurrencies.",
    image:
      "https://img.freepik.com/free-photo/closeup-golden-bitcoins-dark-reflective-surface-histogram-decreasing-crypto_1268-19910.jpg?t=st=1727189521~exp=1727193121~hmac=c07573c5e4cd84eeca5e058a8fa3d9a9ca2651926c7ee81aaf35cae3aaa5cadc&w=1380",
  },
  {
    id: 7,
    name: "Real Estate Fund",
    return: "6%",
    risk: "Low",
    description: "A fund that invests in real estate properties.",
    image:
      "https://img.freepik.com/free-photo/woman-showing-with-one-hand-mini-house-real-state-concept-ai-generative_123827-24098.jpg?t=st=1727189393~exp=1727192993~hmac=9eeb08e168033b417a2abb825afcc513f0f0d37f607ef4269b9f1394d666e36c&w=1380",
  },
  {
    id: 8,
    name: "Tech Fund",
    return: "8%",
    risk: "Medium",
    description: "A fund that invests in technology companies.",
    image:
      "https://img.freepik.com/free-photo/working-with-graphs-man-working-office-staying-late-night_155003-40818.jpg?t=st=1727189658~exp=1727193258~hmac=3d38ce43c52010043e798f5f51431c65b7f906369f51719ab44d7d0d176b17a4&w=1380",
  },
];

export default function Root() {
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  const handleCardClick = (investment) => {
    setSelectedInvestment(investment);
  };

  const handleCloseModal = () => {
    setSelectedInvestment(null);
  };

  return (
    <div className="container mt">
      <h2>Investment Options</h2>
      <div className="investment-list">
        <ul className="investment-container">
          {investments.map((investment) => (
            <li
              key={investment.id}
              className="investment-card"
              onClick={() => handleCardClick(investment)}
            >
              <img
                src={investment.image}
                alt={investment.name}
                className="investment-card-image"
              />
              <div className="investment-card-content">
                <h3>{investment.name}</h3>
                <p>Return: {investment.return}</p>
                <p>Risk: {investment.risk}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedInvestment && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>{selectedInvestment.name}</h3>
            <p>Return: {selectedInvestment.return}</p>
            <p>Risk: {selectedInvestment.risk}</p>
            <p>{selectedInvestment.description}</p>
          </div>
        </div>
      )}

      <div className="fake-pagination ">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    </div>
  );
}
