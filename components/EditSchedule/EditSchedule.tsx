"use client";

import "./EditStyle.css";
import React from "react";

interface ButtonProps {
  id: string;
  content: Record<string, string>;
}

const EditSchedule: React.FC<ButtonProps> = ({ id, content }) => {
  // Determine the button text based on the `id` and `content`
  const buttonText = content[id];

  return (
    <div id="container">
      <button className="main learn-more">
        <span className="main circle" aria-hidden="true">
          <span className="main icon arrow"></span>
        </span>
        <span className="main button-text font-[bw]">{buttonText}</span>
      </button>
    </div>
  );
};

export default EditSchedule;
