'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import SelectInput from '../form-fields/select.input';
import TextInput from '../form-fields/text.input';

type StateType = {
  room: string;
  days: string;
};

const CostEstomator = () => {
  const [currentState, setCurrentState] = useState<StateType>({
    room: '',
    days: '',
  });

  const handleChange = (key: string, value: string) => {
    setCurrentState({ ...currentState, [key]: value });
  };
  return (
    <div className="max-w-screen-xl mx-auto p-4 bg-gray-500 text-white py-24 lg:px-10">
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
                  list={['Apartments', 'Studio']}
                />
                <TextInput
                  name="days"
                  value={currentState.days}
                  label="Number of days"
                  onChange={handleChange}
                  // placeholder='Number of days'
                />
                <div className="flex ">
                  <p className="flex-1 text-xl font-bold">
                    Total cost for {currentState.days} days
                  </p>
                  <p className="flex-1 text-end">
                    XAF <strong>50000</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-64 ">
            <Image
              src="/assets/images/1.jpg"
              alt="..."
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEstomator;
