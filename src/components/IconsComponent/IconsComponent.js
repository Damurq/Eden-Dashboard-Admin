import React from 'react'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaBowlingBall, FaUserAlt, FaHome } from 'react-icons/fa'
import { GiDiceSixFacesFive, GiDominoTiles, GiTabletopPlayers } from 'react-icons/gi'
import { MdEmojiEvents } from 'react-icons/md'

const IconsComponent = ({ icon, className = '' }) => {
    const selectIcon = () => {
        let element = <div></div>
        switch (icon) {
            case 'home':
                element = <FaHome className={className} />
                break;
            case 'user':
                element = <FaUserAlt className={className} />
                break;
            case 'event':
                element = <MdEmojiEvents className={className} />
                break;
            case 'calendar':
                element = <BsFillCalendarWeekFill className={className} />
                break;
            case 'dice':
                element = <GiDiceSixFacesFive className={className} />
                break;
            case 'ball':
                element = <FaBowlingBall className={className} />
                break;
            case 'domino':
                element = <GiDominoTiles className={className} />
                break;
            case 'player':
                element = <GiTabletopPlayers className={className} />
                break;
            default:
                element = <BsFillCalendarWeekFill className={className} />
                break;
        }
        return element
    }

    return (
        selectIcon()
    )
}

export default IconsComponent