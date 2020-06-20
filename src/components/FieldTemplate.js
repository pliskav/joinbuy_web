import React from "react";

const FieldTemplate = props => {
  const { form } = props;
  return (
    <>
      <form>
        <div>{form.label}</div>
        <input
          type={form.title}
          placeholder={form.input.placeholder}
          required={form.input.required}
          disabled={form.input.disabled}
          value={form.input.value}
        />
      </form>
    </>
  );
};

export default FieldTemplate;
