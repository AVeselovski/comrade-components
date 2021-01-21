import React from "react";

const PatternsPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="grid">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-surface mb-3">
              <div className="card-header">
                <h4>Card title</h4>
                <button className="btn-icon btn-sm">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
              <div className="card-body">
                <strong>This is a card with Header, Body and Item(s). Match and build as necessary.</strong>{" "}
                Mumblecore hot chicken tacos butcher deep v yr. Jianbing pork belly cardigan organic kombucha.
                <div className="card-item mt-3">
                  Item 1
                  <button className="btn-icon-simple">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="card-item">
                  item 2
                  <button className="btn-icon-simple">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="card-item">
                  item 3
                  <button className="btn-icon-simple">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <button className="btn-full mt-2">
                  <i className="fas fa-plus mr-2"></i>Add something
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternsPage;
