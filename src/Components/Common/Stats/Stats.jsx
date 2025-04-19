import React from "react";
import { FaHiking, FaCampground, FaStar, FaTrophy } from "react-icons/fa";
import "./Stats.scss";

const statsData = [
    { icon: <FaHiking />, value: "8,453+", label: "Happy Travelers" },
    { icon: <FaCampground />, value: "3,568+", label: "Tent Sites" },
    { icon: <FaStar />, value: "99.3%", label: "Positive Reviews" },
    { icon: <FaTrophy />, value: "63K", label: "Awards Winning" },
];

export default function Stats() {
    return (
        <div className="stats-section container">
            {statsData.map((stat, index) => (
                <div className="stat-card" key={index}>
                    <div className="icon">{stat.icon}</div>
                    <h2>{stat.value}</h2>
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
};


