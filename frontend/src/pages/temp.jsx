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
}

export default function TemperatureCard() {
  const [temperature, setTemperature] = React.useState({ data: 0, condition: 'normal' });
  const [current, setCurrent] = React.useState({ data: 0, condition: 'normal' });
  const [voltage, setVoltage] = React.useState({ data: 0, condition: 'normal' });
  const [vibration, setVibration] = React.useState({ data: 0, condition: 'normal' });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const temperatureResponse = await fetch('http://13.50.232.161/predict-temperature');
        const temperatureData = await temperatureResponse.json();
        setTemperature(temperatureData);

        const currentResponse = await fetch('http://13.50.232.161/predict-current');
        const currentData = await currentResponse.json();
        setCurrent(currentData);

        const voltageResponse = await fetch('http://13.50.232.161/predict-voltage');
        const voltageData = await voltageResponse.json();
        setVoltage(voltageData);

        const vibrationResponse = await fetch('http://13.50.232.161/predict-vibration');
        const vibrationData = await vibrationResponse.json();
        setVibration(vibrationData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' , height: "90%" }}>
      <CardComponent title="Temperature" data={temperature.data} condition={temperature.condition} />
      <CardComponent title="Current" data={current.data} condition={current.condition} />
      <CardComponent title="Voltage" data={voltage.data} condition={voltage.condition} />
      <CardComponent title="Vibration" data={vibration.data} condition={vibration.condition} />
    </Box>
  );
}
