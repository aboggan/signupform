export default function InputText(props) {
  const { name, type, errors, register, required, errorMsg, label } = props;

  return (
    <>
      <div className="error-msg">{errors[name] && errors[name].message}</div>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          id={name}
          type={type}
          className={errors[name] ? "error" : ""}
          {...register(name, {
            required: { value: required, message: errorMsg },
          })}
        />
      </div>
    </>
  );
}
