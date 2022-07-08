import React, { useRef } from "react";

import "./AddTraining.css";

interface propType {
  training: string;
  setTraining: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const AddTraining = ({ training, setTraining, handleAdd }: propType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="input_wrapper">
      <form
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={training}
          onChange={(e) => setTraining(e.target.value)}
          placeholder="Enter a training name..."
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default AddTraining;
