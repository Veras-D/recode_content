import React from "react";
import CustomButton from "../CustomButton";
import style from "./CustomCard.module.css";

const CustomCard: React.FC = () => {
    return (
        <div className={style.customCard}>
            <h2>Card</h2>
            <CustomButton />
        </div>
    );
};

export default CustomCard;
