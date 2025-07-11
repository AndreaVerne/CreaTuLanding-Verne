import SpanMessage from "./SpanMessage";

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  validation,
  errors,
  errorMessages,
}) => {
  const error = errors?.[name];
  const errorType = error?.type;
  const errorMessage = errorMessages?.[errorType];

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {error && (
        <SpanMessage
          message={errorMessage || "Por favor complete este campo"}
        />
      )}
    </div>
  );
};

export default FormField;
