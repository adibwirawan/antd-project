import React, { useState } from 'react';
import { Button, Table } from 'antd';

const columns = [
  {
    title: 'Vehicle ID',
    dataIndex: 'vehicleId',
    key: 'vehicleId',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Lock/Unlock',
    dataIndex: 'lockUnlock',
    key: 'lockUnlock',
  },
  {
    title: 'Current Speed',
    dataIndex: 'currentSpeed',
    key: 'currentSpeed',
  },
  {
    title: 'Battery Level',
    dataIndex: 'batteryLevel',
    key: 'batteryLevel',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
    key: 'lastUpdated',
  },
];

const data = [
  {
    key: '1',
    vehicleId: '132456',
    type: 'Scooter',
    lockUnlock: 'Lock',
    currentSpeed: '0 km/h',
    batteryLevel: '100%',
    status: 'PARKING',
    location: '3.142,012',
    lastUpdated: '2019-07-02 9:00 AM',
  },
  {
    key: '2',
    vehicleId: '987654',
    type: 'Scooter',
    lockUnlock: 'Unlock',
    currentSpeed: '5 km/h',
    batteryLevel: '75%',
    status: 'MOVING',
    location: '2.125,114',
    lastUpdated: '2019-07-02 10:00 AM',
  },
  {
    key: '3',
    vehicleId: '569825',
    type: 'Scooter',
    lockUnlock: 'Unlock',
    currentSpeed: '0 km/h',
    batteryLevel: '50%',
    status: 'IDLING',
    location: '4.125,114',
    lastUpdated: '2019-07-02 10:00 AM',
  },
  {
    key: '4',
    vehicleId: '125864',
    type: 'Scooter',
    lockUnlock: 'Lock',
    currentSpeed: '0 km/h',
    batteryLevel: '15%',
    status: 'TOWING',
    location: '5.125,114',
    lastUpdated: '2019-07-02 10:00 AM',
  },
  {
    key: '5',
    vehicleId: '125864',
    type: 'Scooter',
    lockUnlock: 'Lock',
    currentSpeed: '0 km/h',
    batteryLevel: '0%',
    status: 'TOWING',
    location: '5.125,114',
    lastUpdated: '2019-07-02 10:00 AM',
  },
];

const App = () => {
  const [vehicles, setVehicles] = useState(data);

  const handleAddNewVehicle = () => {
    // Add  logic for adding a new vehicle
    console.log('Add New Vehicle button clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vehicle Management</h1>
      <Button type="primary" style={{ marginBottom: '20px' }} onClick={handleAddNewVehicle}>
        Add New Vehicle
      </Button>
      <Table columns={columns} dataSource={vehicles} />
    </div>
  );
};

export default App;
