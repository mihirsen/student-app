import React from "react";

const SkillTest = ({ onUpdate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-lg font-semibold">Skill Test</h1>
      <div className="mt-4">
        <p>Student has given the test for HTML:</p>
        <p>Questions: 15 | Duration: 15 mins | Submitted on 29 October 2024</p>
        <button
          onClick={onUpdate}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          style={{ width: "100px" }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SkillTest;
