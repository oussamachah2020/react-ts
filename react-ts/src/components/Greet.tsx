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
