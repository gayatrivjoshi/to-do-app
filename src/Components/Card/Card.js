import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";

import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { id, title, date } = props.card;

  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date().toLocaleDateString("en-GB");
    if (!date) return "";
    return date;
  };

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
          updateDate={props.updateDate}
        />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <div className="card_top">
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board_dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => props.removeCard(props.boardId, id)}>
                  Delete Card
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card_title">{title}</div>
        <p>Created on : {props.card.createdDate}</p>
        {props.card.updatedDate && (
          <p> Updated on : {props.card.updatedDate}</p>
        )}
        <div className="card_footer">
          {date && <p onChange={() => formatDate(date)}>Due on : {date}</p>}
        </div>
      </div>
    </>
  );
}

export default Card;
