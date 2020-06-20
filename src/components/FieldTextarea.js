import React from "react";

const FieldTextarea = props => {
  const { field } = props;
  console.log(field.label);

  return (
    <div className="field-wrapper">
      <div className="field-label">
        <label>{field.label}</label>
      </div>
      <div className="field-row">
        <div className="field-input">
          <textarea
            value={field.input.value}
            required={field.input.required}
            disabled={field.input.disabled}
            placeholder={field.input.placeholder}
            name={field.name}
            rows={field.input.rows}
          />
        </div>
        {field.helperText && (
          <div className="field-helper">{field.helperText}</div>
        )}
      </div>
    </div>
  );
};

export default FieldTextarea;
