import React from "react";
import "./footer.css";
export default function Right() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <h5>ELITE</h5>
          <div>
            <ul className="list">
              <li className="list-item">
                <a href="/">Privacy</a>
              </li>
              <li className="list-item">
                <a href="/">Conditions</a>
              </li>
              <li className="list-item">
                <a href="/">Offices</a>
              </li>
              <li className="list-item">
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <h5>ELITE</h5>
          <div>
            <ul className="list">
              <li className="list-item">
                <a href="/">Privacy</a>
              </li>
              <li className="list-item">
                <a href="/">Conditions</a>
              </li>
              <li className="list-item">
                <a href="/">Offices</a>
              </li>
              <li className="list-item">
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div >
            <h5>Subscribe</h5>
            <span data-name="email">
              <input
                type="email"
                name="email"
                size="40"
                aria-required="true"
                aria-invalid="false"
                placeholder="E-mail*"
              />
            </span>
            <button
              type="submit"
            >
              <span>Send</span>
            </button>
            <span>*Send message</span>
          </div>
        </div>
      </div>


      
    </div>
  );
}
