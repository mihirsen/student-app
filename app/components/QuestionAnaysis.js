import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const QuestionAnalysis = ({ totalMarks }) => {
  const percentage = (totalMarks / 15) * 100;

  return (
    <div className="flex items-center justify-center min-h-[30vh] p-6 bg-white rounded-lg shadow-lg mx-4 lg:mx-0">
      <div className="p-8 bg-gray-50 rounded-lg shadow-lg w-full max-w-md lg:max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Question Analysis
        </h2>
        <div className="relative flex justify-center mb-6">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: "#4F46E5",
              textColor: "#4F46E5",
              trailColor: "#E5E7EB",
            })}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
          <span className="absolute inset-0 flex items-center justify-center text-4xl text-purple-600">
            🎯
          </span>{" "}
        </div>
        <p className="text-center text-gray-700 text-lg">
          You scored{" "}
          <span className="font-semibold text-purple-600">{totalMarks}</span>{" "}
          out of 15 marks! Keep up the good work, but there’s always room for
          improvement.
        </p>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
