import React, { useState, useEffect } from "react";
import FieldTemplate from "../components/FieldTemplate";

const FormBuilder = () => {
  let newFormfields = [
    {
      label: "Form title",
      input: {
        type: "text",
        value: "Default form title",
        required: true,
        disabled: false,
        placeholder: "Default form title"
      }
    }
  ];

  const [startFormCrete, setStartFormcreate] = useState(false);

  const createFormHandler = () => {
    setStartFormcreate(true);
  };


  return (
    <>
      <div>You can use our Form Builder to make a form for your orders</div>
      <button onClick={createFormHandler}>Create a form</button>
      {startFormCrete && (
        <div>
          <button>Add textfield</button>
        </div>
      )}
      {startFormCrete && <FieldTemplate form={newFormfields[0]} />}
      {startFormCrete && <div>new field</div>}
    </>
  );
};

export default FormBuilder;
