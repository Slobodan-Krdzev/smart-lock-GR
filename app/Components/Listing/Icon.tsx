import { SingleDescItem } from "@/app/Types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type IconPropsType = {
  icon: SingleDescItem;
};

const Icon = ({ icon: { title, icon } }: IconPropsType) => {
  return (
    <div className="tooltip">
      {/* <span className="tooltiptext" >{title}</span> */}
      {/* <FontAwesomeIcon
        key={title}
        icon={}
        size="sm"
        style={{ height: 30, width: 30 }}
        className="text-custom border-2 border-custom p-1 rounded-lg"
      /> */}
    </div>
  );
};

export default Icon;
