import React from "react";
import { TrainingModel } from "../TrainingModel";
import SingleTraining from "./SingleTraining";

import "./TrainingList.css";

interface propType {
  trainings: Array<TrainingModel>;
  setTrainings: React.Dispatch<React.SetStateAction<TrainingModel[]>>;
  completedTrainings: Array<TrainingModel>;
  setCompletedTrainings: React.Dispatch<React.SetStateAction<TrainingModel[]>>;
}

const TrainingList: React.FC<propType> = ({
  trainings,
  setTrainings,
  completedTrainings,
  setCompletedTrainings,
}: propType) => {
  console.log(trainings);

  return (
    <div className="Training_container">
        
      <div className="active_container">
        <h3>Active Trainings</h3>
        <ul>
          {trainings.map((item) => (
            <SingleTraining
            training={item}
            trainings={trainings}
            setTrainings={setTrainings}
            key={item.id}
            />
          ))}
        </ul>
      </div>

      <div className="completed_container">
        <h3>Completed Trainings</h3>
        <ul>
          {completedTrainings.map((item) => (
            <SingleTraining
            training={item}
            trainings={trainings}
            setTrainings={setTrainings}
            key={item.id}
            />
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default TrainingList;
