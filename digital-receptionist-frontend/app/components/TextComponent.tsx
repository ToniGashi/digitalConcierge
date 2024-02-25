import React from 'react';

const Text = ({
  transcript,
  listening,
  response,
  handleStartButtonClick,
  handleStopButtonClick,
  handleResetButtonClick
}: {
  transcript: string,
  listening: boolean,
  response: string,
  handleStartButtonClick: any,
  handleStopButtonClick: any, 
  handleResetButtonClick: any
}) => {
  return (
    <div>
      <h1 className="lg:text-5xl font-bold underline decoration-wavy text-2xl">
        Speech to text
      </h1>
      <div className=" mt-6 pb-32 mb-4 rounded-md bg-base-100 lg:w-96 lg:h-48 w-64 h-64">
        <span className="ml-2 font-bold text-xl bg-base-100">
          generated text:
        </span>
        <div className="bg-gray-100 rounded-sm w-full h-full">{transcript}</div>
      </div>
      <p className="mb-2 text-xl font-bold">
        Microphone: {listening ? 'Listing to your voice..' : 'off'}
      </p>
      <div className="flex justify-between w-full">
        <button onClick={() => handleStartButtonClick()}>Start</button>
        <button onClick={() => handleStopButtonClick()}>Stop</button>
        <button onClick={() => handleResetButtonClick()}>Reset</button>
      </div>
      {response && <div className="bg-green-400">{response}</div>}
    </div>
  );
};

export default Text;
