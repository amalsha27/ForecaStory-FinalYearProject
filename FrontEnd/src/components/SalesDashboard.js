import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './SalesDashboard.css';
import { Bar } from 'react-chartjs-2';

function SalesDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('/Preprocessed_Apparel_Sales_Data.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }, []);

  const getChartData = (xKey, yKey) => ({
    labels: data.map(item => item[xKey]),
    datasets: [
      {
        label: yKey,
        data: data.map(item => item[yKey]),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      }
    ]
  });

  return (
    <div className="sales-dashboard">
      <h1>Sales Dashboard</h1>
      <div className="chart">
        <Bar data={getChartData('Season Year', 'Order Qty')} />
      </div>
      <div className="chart">
        <Bar data={getChartData('Customer', 'Order Qty')} />
      </div>
      <div className="chart">
        <Bar data={getChartData('Gender', 'Order Qty')} />
      </div>
      <div className="chart">
        <Bar data={getChartData('Customer Order', 'Total FOB')} />
      </div>
    </div>
  );
}

export default SalesDashboard;