import React from "react";

import Card from "../UI/Card";
import "./Cat.css";

const Cat = (props) => {
  return (
    <div>
      <Card>
        <img src={"./assets/white-cat.png"} alt="White Cat" />
      </Card>
    </div>
  );
};

export default Cat;
