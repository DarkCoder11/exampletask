import React from "react";

const botCard = ({ src, name, active, timeRange, activeHandler, ...rest }) => {
    const percentVal = `${rest[timeRange] > 0 ? "+" : ""}${rest[timeRange]}`;

    return (
        <div
            className={`bots-card ${active ? "active" : ""}`}
            onClick={() => activeHandler(name)}
        >
            <div className="bots-card-content">
                <img src={src} alt="img" />
                <h3 className="bots-name">{name}</h3>
                <span
                    className="bots-percent"
                    style={{ color: rest[timeRange] > 0 ? "#5EA853" : "#F2427E" }}
                >
                    {percentVal}%
        </span>
            </div>
        </div>
    );
};

export default botCard;
