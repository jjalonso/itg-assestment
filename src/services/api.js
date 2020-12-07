

export const fetchVehicles = async () => (await fetch(`${process.env.REACT_APP_API_HOST}/api/vehicle`)).json();

export const fetchVehicleDetails = async (id) => (await fetch(`${process.env.REACT_APP_API_HOST}/api/vehicle/${id}`)).json();

