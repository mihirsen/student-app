"use client";

import Navbar from "./components/Navbar";
import QuickStatisticsDisplay from "./components/QuickStaticsDisplay";
import QuickStatistics from "./components/QuickStatistics";
import ComparisonGraph from "./components/ComparisonGraph";
import SyllabuswiseAnalysis from "./components/SyllabuswiseAnalysis";
import SkillTest from "./components/skill-test";
import QuestionAnalysis from "./components/QuestionAnaysis";
import { useState } from "react";

export default function Home() {
  const studentName = "Mihir Sen";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statistics, setStatistics] = useState({
    rank: 1,
    percentile: 90,
    score: 12,
    avgPercentile: 72,
  });

  const handleUpdate = (data: any) => {
    console.log("Profile updated:", data);
  };

  const handleSaveStatistics = (updatedData: {
    rank: number;
    percentile: number;
    score: number;
    avgPercentile: number;
  }) => {
    setStatistics((prevStats) => ({
      ...prevStats,
      ...updatedData,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar studentName={studentName} onUpdate={handleUpdate} />

      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <div>
              <SkillTest onUpdate={() => setIsModalOpen(true)} />
            </div>
            <div>
              <QuickStatisticsDisplay statistics={statistics} />
            </div>
            <div>
              <ComparisonGraph
                userPercentile={statistics.percentile}
                avgPercentile={statistics.avgPercentile}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:w-1/3">
            <div>
              <SyllabuswiseAnalysis />
            </div>
            <div>
              <QuestionAnalysis totalMarks={statistics.score} />
            </div>
          </div>
        </div>

        <QuickStatistics
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveStatistics}
        />
      </main>
    </div>
  );
}
