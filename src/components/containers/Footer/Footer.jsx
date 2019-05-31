import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useWindowWidth } from "../../../customHooks/useWindowWidth";

import CoinIcon from "../../presentational/CoinIcon/CoinIcon";
import MegabotIcon from "../../presentational/MegabotIcon/MegabotIcon";
import SettingsIcon from "../../presentational/SettingsIcon/SettingsIcon";
import DashboardIcon from "../../presentational/DashboardIcon/DashboardIcon";
import BotmarketIcon from "../../presentational/BotmarketIcon/BotmarketIcon";

import "./Footer.css";

const Footer = () => {
  const [viewBox, setViewBox] = useState(null);
  const width = useWindowWidth();

  useEffect(() => {
    if (width <= 550) {
      setViewBox("0 0 50 50");
    } else {
      setViewBox(null);
    }
  }, [width]);

  return (
    <footer>
      <div className="container">
        <ul className="footer-menu">
          <li>
            <NavLink exact to="/">
              <DashboardIcon viewBox={viewBox} fill="rgb(255, 255,255)" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/megabot">
              <MegabotIcon viewBox={viewBox} fill="rgb(84, 96, 118)" />
              <span>Megabot</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bot-market">
              <BotmarketIcon viewBox={viewBox} fill="rgb(84, 96, 118)" />
              <span>Bot market</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/coin-prices">
              <CoinIcon viewBox={viewBox} fill="rgb(84, 96, 118)" />
              <span>Coin prices</span>
            </NavLink>
          </li>
          <li className="setting">
            <div className="profile-not-count">
              <span>3</span>
            </div>
            <NavLink to="/profile">
              <SettingsIcon viewBox={viewBox} fill="rgb(84, 96, 118)" />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
