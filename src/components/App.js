import { Box, ResponsiveContext } from 'grommet';
import { useContext, useEffect, useState } from 'react';
import { fetchVehicleDetails, fetchVehicles } from '../services/api';
import CarBox from './CarBox';

const staticHost = process.env.REACT_APP_API_HOST;

const App = () => {
  const [vehicles, setVehicles]  = useState([])
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    // NOTE: As personal opinion, this couls end up with too many calls 
    // for the slow http connection times.
    const fetchData = async () => {
      const vehiclesData = await fetchVehicles();
      const composedData = await Promise.all(vehiclesData.map(
        async vehicle => ({ ...vehicle, ...(await fetchVehicleDetails(vehicle.id)) })
      ));
      setVehicles(composedData);
    };
    fetchData();
  }, [])

  return (
    <Box 
      wrap
      justify="center"
      direction="row-responsive"
    >
      {/* NOTE: Vehicle.media is an array, I would have talk with designers to ask whats 
      expected to happen when more than one is received. */}
      { vehicles.map(vehicle => (
        <CarBox
          responsive={size === 'small'}
          key={vehicle.id}
          name={vehicle.id} // Didnt found other field for name
          imageUrl={`${staticHost}${vehicle.media[0].url}`}
          imageName={vehicle.media[0].name}
          price={vehicle.price}
          description={vehicle.description}
        />)
      )}
    </Box>
  );
}

export default App;
