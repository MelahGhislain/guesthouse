'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import SelectInput from '../form-fields/select.input';
import TextInput from '../form-fields/text.input';

type StateType = {
  room: string;
  days: string;
};
enum RoomType {
  Appartment = 'Appartment',
  Studio = 'Studio',
  SingleRoom = 'Single Room',
}
const costs = {
  [RoomType.Appartment]: {
    price: 20000,
    discount: 18000,
  },
  [RoomType.Studio]: {
    price: 15000,
    discount: 14000,
  },
  [RoomType.SingleRoom]: {
    price: 10000,
    discount: 9000,
  },
};

const rooms = [RoomType.Appartment, RoomType.Studio, RoomType.SingleRoom];

const CostEstomator = () => {
  const [currentState, setCurrentState] = useState<StateType>({
    room: '',
    days: '',
  });

  const handleChange = (key: string, value: string) => {
    setCurrentState({ ...currentState, [key]: value });
  };

  const calculateCost = () => {
    const roomType = currentState.room;
    const days = Number(currentState.days);
    const getPrice = (price: number, days: number) => price * days;
    if (days > 7) {
      return getPrice(costs[roomType]?.discount, days);
    }
    return getPrice(costs[roomType]?.price, days);
  };

  return (
    <div className=" max-w-screen-xl mx-auto bg-gray-500 text-white py-24 lg:px-10 rounded-xl px-8">
      <div className="">
        <div className="flex gap-16 items-center flex-col md:flex-row">
          <div className="flex flex-col flex-1 w-full">
            <h4 className="text-3xl font-bold text-blue-700 mb-4">Cost Estimator</h4>

            <div className="">
              <div className="flex flex-col gap-5">
                <SelectInput
                  name="room"
                  value={currentState.room}
                  label="Choose Room Type"
                  onChange={handleChange}
                  list={rooms}
                />
                <TextInput
                  name="days"
                  type="number"
                  value={currentState.days}
                  label="Number of days"
                  onChange={handleChange}
                  // placeholder='Number of days'
                />
                <div className="flex ">
                  <p className="flex-1 text-xl font-bold">
                    Total cost of {currentState.room} for {currentState.days} days
                  </p>
                  <p className="flex-1 text-end">
                    XAF <strong>{calculateCost()}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-64">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              How the cost is calculated
            </h2>
            <ul>
              <li className="mb-4 flex">
                <span className="mr-4 text-md">-</span>
                <p>
                  An apprtment costs XAF <span className="text-red-500">20,000</span> for
                  1-6 days and XAF <span className="text-red-500">18,0000</span> form the
                  7 days and above
                </p>
              </li>
              <li className="mb-4 flex">
                <span className="mr-4 text-md">-</span>
                <p>
                  A Morden Studio (room and parlor) costs XAF{' '}
                  <span className="text-red-500">15,000</span> for 1-6 days and XAF
                  <span className="text-red-500">14,0000</span> form the 7 days and above
                </p>
              </li>
              <li className="mb-4 flex">
                <span className="mr-4 text-md">-</span>
                <p>
                  A Single room costs XAF <span className="text-red-500">10,000</span> for
                  1-6 days and XAF <span className="text-red-500">9,0000</span> form the 7
                  days and above
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEstomator;
