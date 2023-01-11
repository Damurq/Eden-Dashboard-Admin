import React from 'react'
import ContainerDashboard from '../../components/containers/ContainerDashboard/ContainerDashboard'
import SectionHeader from "../../components/specific/SectionHeader/SectionHeader"
import FeedbackElementList from "../../components/specific/FeedbackElementList/FeedbackElementList"
import data from "../../data/EventsFeedback.json"
import structure from "../../data/FeedbackStructure.json"
import "./EventsFeedback.css"

const EventsFeedback = () => {
    return (
        <ContainerDashboard section={"Dashboard"}>
            <div className="page-content">
                <SectionHeader to="/event" section="Gestión de comentarios" />
            </div>
            {/* <FeedbackElementList data={data} structure={structure} /> */}
        </ContainerDashboard>
    )
}

export default EventsFeedback