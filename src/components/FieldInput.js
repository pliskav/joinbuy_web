import React from "react";

const FieldInput = props => {
  const { field } = props;
  return (
    <div className="field-wrapper">
      <div className="field-label">
        <label className="field-label">{field.label}</label>
      </div>
      <div className="field-row">
        <div className="field-input">
          <input
            type={field.input.type}
            value={field.input.value}
            required={field.input.required}
            disabled={field.input.disabled}
            placeholder={field.input.placeholder}
            name={field.name}
          />
        </div>
        {field.helperText && (
          <div className="field-helper">{field.helperText}</div>
        )}
      </div>
    </div>
  );
};

export default FieldInput;
