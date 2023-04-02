import React from "react";

type PersonProps = {
  names: {
    first: string;
    last: string;
  }[];
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
