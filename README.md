# React + TypeScript

![typescript-cover](https://user-images.githubusercontent.com/72669865/229330932-8d292ea8-6ed6-4ebe-aa19-07522585174e.jpg)

In this folder you get to know how to use react along with typescript in defining props types and pass them.

> Example

```JavaScript
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "oussama",
    last: "chahidi",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="oussama" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
```

> and pass them

```JavaScript
import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      {props.isLoggedIn
        ? `welcome ${props.name} you have ${props.messageCount} unread message`
        : "welcome guest"}
    </div>
  );
}

export default Greet;
```

