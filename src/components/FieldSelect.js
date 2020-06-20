import React from "react";

const FieldSelect = props => {
  const { field } = props;
  return (
    <div className="field-wrapper">
      <div className="field-label">
        <label>{field.label}</label>
      </div>
      <div className="field-row">
        <div className="field-input">
          <select
            value={field.input.value}
            required={field.input.required}
            disabled={field.input.disabled}
            placeholder={field.input.placeholder}
            name={field.name}
            className="input-select"
          >
            {field.input.options.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        {field.helperText && (
          <div className="field-helper">{field.helperText}</div>
        )}
      </div>
    </div>
  );
};

export default FieldSelect;
