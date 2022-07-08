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
   
      <form className="input"
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
        <button type="submit"  onClick={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}>Go</button>
      </form>
  
  );
};

export default AddTraining;
