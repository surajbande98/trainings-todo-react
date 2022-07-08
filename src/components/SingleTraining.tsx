import React, {
  FormEvent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { TrainingModel } from "../TrainingModel";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import "./style.css";

type propType = {
  trainings: TrainingModel[];
  training: TrainingModel;
  setTrainings: React.Dispatch<React.SetStateAction<TrainingModel[]>>;
};

const SingleTraining = ({ training, trainings, setTrainings }: propType) => {
  const [edit, setEdit] = useState<Boolean>(false);

  const [editValue, setEditvalue] = useState<string>(training.training);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTrainings(
      trainings.map((training: TrainingModel) => {
        return training.id === id
          ? { ...training, isActive: !training.isActive }
          : training;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTrainings(trainings.filter((training) => training.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTrainings(
      trainings.map((training) => {
        return training.id === id
          ? { ...training, training: editValue }
          : training;
      })
    );

    setEdit(false);
  };

  return (
    <form
      className="todos__single "
      onSubmit={(e) => handleEdit(e, training.id)}
    >
      {edit ? (
        <input
          className="todos__single--text"
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditvalue(e.target.value)}
        />
      ) : !training.isActive ? (
        <s>{training.training}</s>
      ) : (
        <span className="todos__single--text">{training.training}</span>
      )}

      <div className="icons">
        <span
          onClick={() => {
            if (!edit && training.isActive) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span onClick={() => handleDelete(training.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(training.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTraining;
