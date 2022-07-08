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
    <div className="container">
        
      <div className="todos">
        <span className="todos__heading">Active Trainings</span>
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

      <div className="todos  remove">
      <span className="todos__heading">Completed Trainings</span>
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
