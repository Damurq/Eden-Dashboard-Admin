import React from 'react'
import ContainerDashboard from '../../components/containers/ContainerDashboard/ContainerDashboard'

//style
import './Club.css';

const Club = () => {

  const imageOne = "./Club/business.png";
  const imageTwo = "./Club/areas.png";
  const imageThree = "./Club/facilities.png";

  return (
    <ContainerDashboard section={"Dashboard"}>
      
      <div className="children">
        <div className="club">

            <div className="club__up">
                <div className="club__left">
                    <img src={imageOne} alt="one"/>

                </div>

                <div className="club__right">
                    <h1>Gestión empresarial</h1>
                    <p>Gestiona las redes sociales, filosofía y diversos datos empresariales del club.</p>
                    <a href="#">Gestionar</a>


                </div>

            </div>

            <div className="club__down">

                <div className="club__left">
                    <h1>Gestión de áreas</h1>
                    <img src={imageTwo} alt="two"/>
                    <a href="#">Gestionar</a>


                </div>

                <div className="club__right">
                    <h1>Gestión de instalaciones</h1>
                    <img src={imageThree} alt="two"/>
                    <a href="#">Gestionar</a>

                </div>

            </div>
                   




        </div>


      </div>
    </ContainerDashboard>
  )
}

export default Club