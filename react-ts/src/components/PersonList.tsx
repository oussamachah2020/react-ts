import React from "react";
import { Name } from "../person.types";

type PersonProps = {
  names: Name[];
};

function PersonList(props: PersonProps) {
  return (
    <div>
      {props.names.map((name) => (
        <>
          <p>
            {name.first} {name.last}
          </p>
          <br />
        </>
      ))}
    </div>
  );
}

export default PersonList;
