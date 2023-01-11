import React from 'react'
import { Bar, Doughnut} from "react-chartjs-2";
import "./Home.css"
import ContainerDashboard from '../../components/containers/ContainerDashboard/ContainerDashboard'

const Home = () => {
  const dataBar ={
    labels: ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [{
        label:"Partidos",
        backgroundColor: "rgb(72, 203, 197)",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgb33, 97, 140)",
        hoverBorderColor: 'rgb(21, 67, 96)',
        data:[10, 15, 8, 35, 48, 20, 28, 32, 50, 18, 15, 47]
    }]
};

const dataDoughnut ={
    labels: ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
    datasets: [{
        backgroundColor: "rgb(209, 242, 235)",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(72, 203, 197)",
        hoverBorderColor: 'rgb(21, 67, 96)',
        data:[100, 500, 300, 20, 105, 150, 50, 450]
    }]
};

const optionsBar = {
    responsive: true
}

const optionsDoughnut = {
    responsive: true,
    cutout:"60%",
    plugins: {
        legend: false,
        
    },
}

  return (
    <ContainerDashboard section={"Dashboard"}>
        <div className="children">
          <div className="graphics" >
            <div className="bar-graphic" >
                <h2>Partidos por mes</h2>
                <div className="bar">
                    <Bar data={dataBar} options={optionsBar} /> 
                </div>
                
            </div>
            <div className="doughnut-graphic">
                <h2>Asistencias</h2>
                <div className="doughnut">
                    <Doughnut data={dataDoughnut} options={optionsDoughnut} /> 
                </div>
                
            </div>
          </div>
        </div>
    </ContainerDashboard>
  )
}

export default Home 