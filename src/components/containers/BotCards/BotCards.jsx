import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import BotCard from "../../presentational/BotCard/BotCard";

import line_1 from "../../../assets/line_1.png";
import line_2 from "../../../assets/line_2.png";
import line_3 from "../../../assets/line_3.png";
import line_4 from "../../../assets/line_4.png";
import "./BotCards.css";

const BotCards = ({ isLoading, bots }) => {
  const [botData, setBotData] = useState([]);
  const [timeRange, setTimeRange] = useState("all_time");

  useEffect(() => {
    const bs = bots
      ? bots.map(bot => ({
        ...bot,
        active: bot === bots[bots.length - 1]
      }))
      : [];
    setBotData(bs);
  }, [bots]);

  const rendBotCards = () => (
    botData.map((bot, index) => {
      const src = require(`../../../assets/icon-${index + 1}.png`);

      return (
        <BotCard
          {...bot}
          src={src}
          key={index}
          timeRange={timeRange}
          activeHandler={activeHandler}
        />
      );
    })
  );

  const activeHandler = name => {
    const bs = bots.map(bot => ({ ...bot, active: bot.name === name }));
    setBotData(bs);
  };

  const timeRangeHandler = ({ target }) => setTimeRange(target.name);

  return (
    <div className="container">
      <div className="bots-block">
        {isLoading ? (
          <div className="align-center">
            <ScaleLoader color="white" />
          </div>
        ) : (
            <>
              <img src={line_1} className="bots_line" alt="img" />
              <img src={line_2} className="bots_line" alt="img" />
              <img src={line_3} className="bots_line" alt="img" />
              <img src={line_4} className="bots_line" alt="img" />
              {rendBotCards()}
            </>
          )}
      </div>
      <div className="time-range-block">
        <span className="time-range-text">Time Range:</span>
        <div className="time-btn-block">
          <div className={`time-btn ${timeRange === "24h" ? "active" : ""}`}>
            <button name="24h" onClick={timeRangeHandler}>
              24h
            </button>
          </div>
          <div className={`time-btn ${timeRange === "7d" ? "active" : ""}`}>
            <button name="7d" onClick={timeRangeHandler}>
              7 days
            </button>
          </div>
          <div className={`time-btn ${timeRange === "30d" ? "active" : ""}`}>
            <button name="30d" onClick={timeRangeHandler}>
              30 days
            </button>
          </div>
          <div
            className={`time-btn ${timeRange === "all_time" ? "active" : ""}`}
          >
            <button name="all_time" onClick={timeRangeHandler}>
              All time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotCards;
