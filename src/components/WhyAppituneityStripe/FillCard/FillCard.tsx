import React from "react";
import Image from "next/image";
import "./FillCard.css";
import logoWhite from "../../../../public/images/Why_appituneity/logo-white.svg";
import APPITUNITYwriten from "../../../../public/images/Why_appituneity/APPITUITY.svg";

interface CardItem {
  icon?: string;
  title: string;
  description: string;
}

interface FillCardProps {
  item: CardItem;
  className?: string;
}

const FillCard: React.FC<FillCardProps> = ({ item, className }) => {
  return (
    <div className={`fill-card ${className || ""}`}>
      <div className="fill-card-content">
        <div className="fill-card-back">
          <div className="fill-card-header">
            {item.icon && (
              <Image src={item.icon} alt={item.title} title={item.title} width={40} height={40} />
            )}
            <h4>{item.title}</h4>
          </div>
          <div className="fill-card-body">
            <p>{item.description}</p>
          </div>
          <div className="Logo-container">
            <Image src={logoWhite} alt="Appituneity Logo" title="Appituneity Logo" width={75} height={75} />
            <Image src={APPITUNITYwriten} alt="Appituneity Logo" title="Appituneity Logo" width={150} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillCard;
