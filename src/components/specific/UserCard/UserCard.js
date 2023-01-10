import React from 'react'
import { MdNotificationsActive } from 'react-icons/md'
import "./UserCard.css"

const UserCard = () => {
    let img = null

    return (
        <div className='user-card-container'>
            <div>
                <MdNotificationsActive className='user-card-container__notification'/>
            </div>
            <div className="user-card">
                {img ? (<div className="user-card-photo">
                    <img src="" alt="" />
                </div>)
                    : <div className="user-card-icon">
                        S
                    </div>}
                <p className="">StuartAdmin</p>
            </div>
        </div>
    )
}

export default UserCard