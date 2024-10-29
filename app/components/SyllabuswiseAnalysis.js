import React from "react";

const subjects = [
  { name: "HTML, Tools, Forms, History", percentage: 80, color: "bg-blue-500" },
  { name: "Tags & References in HTML", percentage: 60, color: "bg-orange-500" },
  { name: "Table & Reference in HTML", percentage: 24, color: "bg-red-500" },
  { name: "Tables and CSS Basics", percentage: 90, color: "bg-green-500" },
];

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="relative h-4 bg-gray-200 rounded flex items-center">
      <div
        className={`absolute h-full ${color} rounded`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="flex items-center justify-between w-full">
        {/* Spacer to push the percentage to the right */}
        <span className="text-xs text-gray-700 w-full text-right">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

const SyllabuswiseAnalysis = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Syllabuswise Analysis</h2>
      {subjects.map((subject) => (
        <div key={subject.name} className="mb-4">
          <div className="flex justify-between mb-1">
            <h3 className="font-medium">{subject.name}</h3>
          </div>
          <ProgressBar percentage={subject.percentage} color={subject.color} />
        </div>
      ))}
    </div>
  );
};

export default SyllabuswiseAnalysis;
