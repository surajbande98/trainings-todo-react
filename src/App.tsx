import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './App.css';
import AddTraining from './components/AddTraining';
import TrainingList from './components/TrainingList';
import { TrainingModel } from './TrainingModel';

function App() {

  const [training, setTraining] = useState<string>("");

  const [trainings, setTrainings] = useState<TrainingModel[]>([]);


  const [completedTrainings, setCompletedTrainings] = useState<Array<TrainingModel>>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (training) {
      setTrainings([...trainings, { id: Date.now(), training, isActive: true }]);
      setTraining("");
    }
  };

  useEffect(() => {
    setCompletedTrainings(trainings.filter(tr => !tr.isActive));
  },[trainings]);

  return (
    <DragDropContext onDragEnd={() => {}}>
    <div className="App">
        <div className='main_container'>
          <h2>Trainings CRUD</h2>

          <AddTraining training={training} setTraining={setTraining} handleAdd = {handleAdd}/>

          <TrainingList 
          trainings={trainings} setTrainings={setTrainings}
          completedTrainings={completedTrainings}
          setCompletedTrainings={setCompletedTrainings}/>

        </div>
    </div>
    </DragDropContext>

  );
}

export default App;
