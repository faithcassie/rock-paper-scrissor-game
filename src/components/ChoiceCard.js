import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  return (
    <img
      onClick={() => handleGameItemChange(gameItem)} //code here
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
