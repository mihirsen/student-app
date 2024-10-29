// components/QuickStatistics.js
import React, { useState } from "react";

const QuickStatistics = ({ isOpen, onClose, onSave }) => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(90);
  const [score, setScore] = useState(12);

  const handleSave = () => {
    onSave({ rank, percentile, score });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Update</h2>
        <div className="mb-4">
          <label className="block mb-1">Rank:</label>
          <input
            type="number"
            value={rank}
            onChange={(e) => setRank(Number(e.target.value))}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Percentile:</label>
          <input
            type="number"
            value={percentile}
            onChange={(e) => setPercentile(Number(e.target.value))}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Score:</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
