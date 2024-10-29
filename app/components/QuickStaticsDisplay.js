import React from "react";

const QuickStatisticsDisplay = ({ statistics }) => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-2xl font-semibold mb-6">Your Quick Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition duration-200 hover:shadow-xl">
          <span className="text-4xl" role="img" aria-label="Rank">
            🏅
          </span>
          <h3 className="text-lg font-semibold mt-2">RANK</h3>
          <p className="text-2xl font-bold">{statistics.rank}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition duration-200 hover:shadow-xl">
          <span className="text-4xl" role="img" aria-label="Percentile">
            📊
          </span>
          <h3 className="text-lg font-semibold mt-2">PERCENTILE</h3>
          <p className="text-2xl font-bold">{statistics.percentile}%</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition duration-200 hover:shadow-xl">
          <span className="text-4xl" role="img" aria-label="Score">
            ✅
          </span>
          <h3 className="text-lg font-semibold mt-2">CURRENT ANSWER</h3>
          <p className="text-2xl font-bold">{statistics.score} / 15</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStatisticsDisplay;
