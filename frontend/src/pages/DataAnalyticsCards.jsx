import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AnalyticsCard = ({ endpoint }) => {
  const [data, setData] = useState(null);
  const [stats, setStats] = useState({
    max: 0,
    min: 0,
    average: 0,
    outliers: [],
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setData(data);
        calculateStats(data);
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}: `, error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endpoint]);

  const calculateStats = (data) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      setStats({
        max: 0,
        min: 0,
        average: 0,
        outliers: [],
      });
      return;
    }

    const values = data.map((item) => item.value);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const average = values.reduce((sum, value) => sum + value, 0) / values.length;
    const outliers = values.filter((value) => value < min || value > max);

    setStats({
      max,
      min,
      average,
      outliers,
    });
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {endpoint}
        </Typography>
        {data ? (
          <>
            <Typography variant="h5" component="div">
              Max: {stats.max}
            </Typography>
            <Typography variant="h5" component="div">
              Min: {stats.min}
            </Typography>
            <Typography variant="h5" component="div">
              Average: {stats.average.toFixed(2)}
            </Typography>
            <Typography variant="h5" component="div">
              Outliers: {stats.outliers.length}
            </Typography>
          </>
        ) : (
          <Typography variant="h5" component="div">
            Loading...
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
};

export default function DataAnalyticsCards() {
  const endpoints = [
    'http://13.50.232.161/predict-temperature',
    'http://13.50.232.161/predict-current',
    'http://13.50.232.161/predict-voltage',
    'http://13.50.232.161/predict-vibration',
  ];

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
      {endpoints.map((endpoint, index) => (
        <AnalyticsCard key={index} endpoint={endpoint} />
      ))}
    </Box>
  );
}