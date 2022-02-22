
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../api';

const data = {
  labels: ['07/11', '08/11', '09/11', '10/11', '11/11', '12/11'],
  datasets: [
    {
      label: 'Ganho no dia',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#DAA520'
      ],
      borderColor: [
        '#DAA520',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function VerticalBar() {
  const [chartData, setChartData] = useState([]);
  const [date, setData] = useState([]);
  const [values, setValues] = useState([])

  useEffect(() => {
    async function chartData(){
      const resposta = await api.get("")
      setChartData(resposta.data)
      console.log(resposta.data)
    }
    chartData()
  },[]);

  return (
    <>
      <Bar data={data} title={"Gráfico de Renda"} options={options} height={31} width={90} />
    </>
  )
}

export default VerticalBar;