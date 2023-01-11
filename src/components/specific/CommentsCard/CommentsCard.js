import React from 'react'
import "./CommentsCard.css"

const CommentsCard = ({ element, structure, activeEvent, setActiveEvent }) => {
  return (
    <div key={`${element[structure["id"]]}-event`} className={`event-element${element[structure["id"]] === activeEvent
      ? " active-event"
      : ""}`}
      onClick={() => { setActiveEvent(element[structure["id"]]) }}
    >
      <div className="">
        <div className="">
          {activeEvent
            ? "active-event"
            : ""}
        </div>
        <p className="">{element[structure["title"]]}</p>
        <p className="">{element[structure["date"]]}</p>
      </div>
      <p className="">{element[structure["user"]]}</p>
      <p className="">{element[structure["description"]]}</p>
    </div>
  )
}

export default CommentsCard