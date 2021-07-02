import React from "react";

import CheckIcon from "./CheckIcon";

export function CheckBox(props) {
  const { errors, name, required, errorMsg, register, label } = props;
  return (
    <>
      <div className="error-msg mb-2">{errors[name] && errors[name].message}</div>
      <label className="checkbox">
        <span className="checkbox__input">
          <input
            type="checkbox"
            {...register(name, {
              required: { value: required, message: errorMsg },
            })}
          />
          <span
            className={
              errors[name] ? "checkbox__control error" : "checkbox__control"
            }
          >
            <CheckIcon />
          </span>
        </span>
        <span className="checkbox__label">{label}</span>
      </label>
    </>
  );
}
