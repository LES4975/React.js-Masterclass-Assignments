import React, { useState } from "react";
import Circle from "./circle";
import styled from "styled-components";
// const Title = styled.h1`
//   color: ${(props) => props.theme.textColor};
// `;

// const Wrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.backgroundColor};
// `;

const A = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor} "";
`;
function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // const {
    //   currentTarget: { value },
    // } = event;
    const value = event.currentTarget.value;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello, ", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
      <A>
        <H1>protected</H1>!
      </A>
    </div>
  );
}

export default App;
