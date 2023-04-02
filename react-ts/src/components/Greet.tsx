import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `welcome ${props.name} you have ${messageCount} unread message`
        : "welcome guest"}
    </div>
  );
}

export default Greet;
