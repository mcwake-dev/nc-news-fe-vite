import { useState } from "react";

import ValidationResult from "./ValidationResult";

const ValidatedField = ({
  setValidatedValue,
  validationSchema,
  label,
  successMessage,
  isPassword = false,
}) => {
  const [interimValue, setInterimValue] = useState("");
  const [error, setError] = useState("");
  const [validationClass, setValidationClass] = useState("");
  const [visibleClass, setVisibleClass] = useState("is-invisible");

  const onChange = (ev) => {
    setValidatedValue(null);
    setVisibleClass("is-invisible");
    setError(null);
    setInterimValue(ev.currentTarget.value);
    validationSchema
      .validateAsync(interimValue)
      .then((value) => {
        setValidatedValue(value);
        setValidationClass("is-success");
      })
      .catch((err) => {
        setError(err);
        setValidationClass("is-danger");
      })
      .finally(() => {
        setVisibleClass("");
      });
  };

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className={`input ${validationClass}`}
          type={isPassword ? "password" : "text"}
          placeholder={label}
          value={interimValue}
          onChange={onChange}
        />
      </div>
      <ValidationResult
        validationClass={validationClass}
        visibleClass={visibleClass}
        error={error}
        successMessage={successMessage}
      />
    </div>
  );
};

export default ValidatedField;
