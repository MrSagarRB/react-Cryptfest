import React from "react";
import { Progress } from "@nextui-org/react";

function ChainContainer(props) {
  console.log(props);
  return (
    <div className="my-5">
      <div className="flex-center ">
        {" "}
        <div className="flex gap-2 items-center text-[16px]">
          {" "}
          <img
            src={`./coins/${props.icon}`}
            height={32}
            width={32}
            alt={props.icon}
          />{" "}
          <p>{props.title} </p>{" "}
        </div>{" "}
        <p> $ {props.value}</p>{" "}
      </div>

      <div className="flex-center gap-2 mt-2 ">
        <Progress value={props.progress} color={props.color} size="sm" />
        <p>{props.progress}%</p>
      </div>
    </div>
  );
}

export default ChainContainer;
