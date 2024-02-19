import React, { useState } from "react";
import { MyButton } from "my-lib/button1";

export const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Counter is {counter}.</p>
      <MyButton
        message={"Library incrementer"}
        onClick={() => setCounter((count) => count + 1)}
      />
    </div>
  );
};
