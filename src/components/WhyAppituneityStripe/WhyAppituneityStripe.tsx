// WhyAppituneityStripe.tsx
import React from "react";
import "./WhyAppituneityStripe.css";
import FillCard from "./FillCard/FillCard";
import { whyAppituneity } from "./whyAppituneityData/info";

interface CardItem {
  id: number;
  title: string;
  icon: string; // Changed from React.ComponentType to string
  description: string;
}

interface Props {
  info: CardItem[];
  color: string;
}

const WhyAppituneityStripe: React.FC<Props> = ({  color }) => {
  return (
    <div className="why-appituneity-stripe" style={{ background: color }}>
      <div className="main-container">
        <div className="stripe-header">
          <h3>
            Why Choose <span>owRESEARCH?</span>
          </h3>
        </div>
        <div className="stripe-body">
          {whyAppituneity.map((item) => (
            <div className="outline-card-item" key={item.id}>
              <FillCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAppituneityStripe;
