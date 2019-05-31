import React from "react";
import { ScaleLoader } from "react-spinners";

import logo from "../../../assets/Logo.png";
import coinIcon from "../../../assets/coin.png";
import refreshIcon from "../../../assets/refresh.png";

import "./Header.css";

const header = ({ isLoading, data }) => (
  <header>
    <div className="container">
      <nav>
        <ul className="menu">
          <li>
            <div className="toggler">
              <span />
              <span />
              <span />
            </div>
          </li>
          <li>
            <a href="/" className="logo">
              <img src={logo} alt="img" />
            </a>
          </li>
          <li>
            <a href="/" className="refresh">
              <img src={refreshIcon} alt="img" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-subtitle">
        <div className="capital">
          <span>trading capital</span>
          <h2>{
            isLoading ? <ScaleLoader color="white" /> : data.trading_capital
          }</h2>
        </div>
        <div className="balance">
          <div className="balance-row">
            <span className="balance-name">balance:</span>
            <div className="balance-price">
              <span>{
                isLoading ? <ScaleLoader color="white" /> : data.balance
              }</span>
              <img src={coinIcon} alt="img" />
            </div>
          </div>
          <div className="balance-row">
            <span className="balance-name">On HoLD:</span>
            <div className="balance-price">
              <span>{
                isLoading ? <ScaleLoader color="white" /> : data.on_hold
              }</span>
              <img src={coinIcon} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default header;
