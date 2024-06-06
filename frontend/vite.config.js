import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardComponent = ({ title, data, condition }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {data}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {condition}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function TemperatureCard() {
  const [temperature, setTemperature] = React.useState({ data: 0, condition: 'normal' });
  const [current, setCurrent] = React.useState({ data: 0, condition: 'normal' });
  const [voltage, setVoltage] = React.useState({ data: 0, condition: 'normal' });
  const [vibration, setVibration] = React.useState({ data: 0, condition: 'normal' });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const temperatureResponse = await fetch('/predict-temperature');
        if (temperatureResponse.ok && temperatureResponse.headers.get('Content-Type') === 'application/json') {
          const temperatureData = await temperatureResponse.json();
          setTemperature(temperatureData);
        } else {
          const errorMessage = await temperatureResponse.text();
          console.error('Error fetching temperature data:', errorMessage);
        }

        const currentResponse = await fetch('/predict-current');
        if (currentResponse.ok && currentResponse.headers.get('Content-Type') === 'application/json') {
          const currentData = await currentResponse.json();
          setCurrent(currentData);
        } else {
          const errorMessage = await currentResponse.text();
          console.error('Error fetching current data:', errorMessage);
        }

        const voltageResponse = await fetch('/predict-voltage');
        if (voltageResponse.ok && voltageResponse.headers.get('Content-Type') === 'application/json') {
          const voltageData = await voltageResponse.json();
          setVoltage(voltageData);
        } else {
          const errorMessage = await voltageResponse.text();
          console.error('Error fetching voltage data:', errorMessage);
        }

        const vibrationResponse = await fetch('/predict-vibration');
        if (vibrationResponse.ok && vibrationResponse.headers.get('Content-Type') === 'application/json') {
          const vibrationData = await vibrationResponse.json();
          setVibration(vibrationData);
        } else {
          const errorMessage = await vibrationResponse.text();
          console.error('Error fetching vibration data:', errorMessage);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', height: "80%" }}>
      <CardComponent title="Temperature" data={temperature.data} condition={temperature.condition} />
      <CardComponent title="Current" data={current.data} condition={current.condition} />
      <CardComponent title="Voltage" data={voltage.data} condition={voltage.condition} />
      <CardComponent title="Vibration" data={vibration.data} condition={vibration.condition} />
    </Box>
  );
}