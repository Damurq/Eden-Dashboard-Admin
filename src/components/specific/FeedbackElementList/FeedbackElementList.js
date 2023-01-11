import React, { useState } from 'react'
import ContainerElementList from "../../containers/ContainerElementList/ContainerElementList"
import "./FeedbackElementList.css"
import { checkIfDate } from '../../../utils/utilsDates'

const FeedbackElementList = ({ data, structure }) => {

    const [activeEvent, setActiveEvent] = useState(null)

    return (
        <div className="">
            <ContainerElementList title="Lista de eventos">
                <div className="event-list">
                    {data.map((element) => (
                        <div key={`${element[structure["id"]]}-event`} className={`event-element${element[structure["id"]] === activeEvent
                            ? " active-event"
                            : ""}`}
                            onClick={() => { setActiveEvent(element[structure["id"]]) }}
                        >
                            <div className="">
                                <p className="">{element[structure["title"]]}</p>
                                <p className="">
                                    {checkIfDate(element[structure["side"]["type"]], element[structure["side"]["info"]])}
                                </p>
                            </div>
                            <p className="">
                                {checkIfDate(element[structure["subtitle"]["type"]], element[structure["side"]["info"]])}
                            </p>
                            <p className="">{element[structure["description"]]}</p>
                        </div>
                    ))}
                </div>
            </ContainerElementList>

        </div>
    )
}

export default FeedbackElementList