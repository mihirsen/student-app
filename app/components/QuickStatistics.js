// components/QuickStatistics.js
import React, { useState } from "react";

const QuickStatistics = ({ isOpen, onClose, onSave }) => {
  const [rank, setRank] = useState("1");
  const [percentile, setPercentile] = useState("90");
  const [score, setScore] = useState("12");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSave = () => {
    // Validate inputs
    const validRank = Math.max(1, Math.min(90, Number(rank) || 1));
    const validPercentile = Math.max(0, Math.min(100, Number(percentile) || 0));
    const validScore = Math.max(0, Math.min(15, Number(score) || 0));

    if (Number(rank) > 90 || Number(rank) < 1) {
      setErrorMessage("❌ Rank must be between 1 and 90.");
      return;
    }
    if (Number(percentile) > 100 || Number(percentile) < 0) {
      setErrorMessage("❌ Percentile must be between 0 and 100.");
      return;
    }
    if (Number(score) > 15 || Number(score) < 0) {
      setErrorMessage("❌ Score must be between 0 and 15.");
      return;
    }

    setErrorMessage(""); // Clear error message if validation passes
    setSuccessMessage("✅ Successfully updated!");

    // Call onSave with valid inputs
    onSave({ rank: validRank, percentile: validPercentile, score: validScore });
    setTimeout(() => {
      setSuccessMessage(""); // Clear success message after 3 seconds
      onClose();
    }, 3000);
  };

  const handleRankChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 2) setRank(value);
  };

  const handlePercentileChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 3) setPercentile(value);
  };

  const handleScoreChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 2) setScore(value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Update</h2>

        {errorMessage && (
          <div className="mb-4 text-red-600">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="mb-4 text-green-600">{successMessage}</div>
        )}

        <div className="mb-4">
          <label className="block mb-1">Rank:</label>
          <input
            type="text"
            value={rank}
            onChange={handleRankChange}
            className="border border-gray-300 rounded p-2 w-full"
            inputMode="numeric"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Percentile:</label>
          <input
            type="text"
            value={percentile}
            onChange={handlePercentileChange}
            className="border border-gray-300 rounded p-2 w-full"
            inputMode="numeric"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Score:</label>
          <input
            type="text"
            value={score}
            onChange={handleScoreChange}
            className="border border-gray-300 rounded p-2 w-full"
            inputMode="numeric"
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
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
