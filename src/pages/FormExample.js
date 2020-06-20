import React from "react";
import FieldTextarea from "../components/FieldTextarea";
import FieldSelect from "../components/FieldSelect";
import FieldInput from "../components/FieldInput";

const FormExample = () => {
  const fieldsarr = [
    {
      name: "name",
      label: "Name",
      input: {
        type: "text",
        required: true,
        value: "",
        disabled: false,
        placeholder: "Put your name"
      },
      helperText: "Minimal name langth is 2 characters"
    },
    {
      name: "phone",
      label: "Phone",
      input: {
        type: "text",
        required: true,
        value: "",
        disabled: false,
        placeholder: "Put your phone"
      },
      helperText: "Put your phone number with country code"
    },
    {
      name: "description",
      label: "Description",
      input: {
        type: "textarea",
        required: true,
        value: "",
        disabled: false,
        placeholder: "Put your description",
        rows: "10"
      }
    },
    {
      name: "amount",
      label: "Box amount",
      input: {
        type: "select",
        required: true,
        value: "",
        disabled: false,
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      helperText: "Select desired amount of boxes for order"
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {fieldsarr.map((it, key) => {
        if (it.input.type === "textarea") {
          return <FieldTextarea key={key} field={it} />;
        } else if (it.input.type === "select") {
          return <FieldSelect key={key} field={it} />;
        } else {
          return <FieldInput key={key} field={it} />;
        }
      })}
    </div>
  );
};

export default FormExample;
