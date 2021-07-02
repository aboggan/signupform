import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { components } from "react-select";
import "../styles/main.scss";
import { CheckBox } from "./CheckBox";
import CheckIcon from "./CheckIcon";
import ChevronIcon from "./ChevronIcon";
import InputText from "./InputText";
import { selectCustomStyles } from "./selectCustomStyles";

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [serverResponse, setServerResponse] = useState({
    status: "",
    message: "",
  });

  const sendForm = async (data) => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      setServerResponse({ status: response.status, message: response.message });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => {
    sendForm(data);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <ChevronIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <main>
      <div className="signup-form container">
        {/** Success Message **/}
        {serverResponse.status === "success" ? (
          <div className="success-msg">
            <div className="success-msg__icon">
              <CheckIcon />
            </div>
            <div className="succes-msg__text mt-5">
              {serverResponse.message}
            </div>
            <div className="success-msg__button col-sm-12 col-md-6">
              <button type="button" className="mt-5">
                Return to home
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Erorr Msg */}
            {serverResponse.status === "error" && (
              <div className="alert alert-danger pt-5 pb-5" role="alert">
                {serverResponse.message}
              </div>
            )}
            {/* Form */}
            <h2 className="pt-4">Sign up for email updates</h2>
            <h6 className="mb-3 mt-3">*Indicates Required Field</h6>
            <form onSubmit={handleSubmit(onSubmit)} id="signupForm">
              <section>
                <div className="row">
                  <div className="col-sm-12 col-md-6" role="First Name">
                    <InputText
                      errors={errors}
                      register={register}
                      name={"firstName"}
                      label={"FIRST NAME*"}
                      type={"text"}
                      required={true}
                      errorMsg={"First name is required"}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6" role="Last Name">
                    <InputText
                      errors={errors}
                      register={register}
                      name={"lastName"}
                      label={"LAST NAME*"}
                      type={"text"}
                      required={true}
                      errorMsg={"Last name is required"}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-12 col-md-6" role="E-mail">
                    <InputText
                      errors={errors}
                      register={register}
                      name={"email"}
                      label={"EMAIL ADDRESS*"}
                      type={"email"}
                      required={true}
                      errorMsg={"E-mail is required"}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6" role="organization">
                    <InputText
                      errors={errors}
                      register={register}
                      name={"organization"}
                      label={"ORGANIZATION"}
                      type={"text"}
                      required={false}
                      errorMsg={""}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-12 col-md-6" role="select EU resident">
                    <div className="error-msg">
                      {errors.resident && errors.resident.message}
                    </div>

                    <Controller
                      name="resident"
                      control={control}
                      render={({ field }) => (
                        <>
                          <label htmlFor="selectResident">EU RESIDENT*</label>
                          <Select
                            {...field}
                            className={errors.resident ? "error" : ""}
                            inputId="selectResident"
                            placeholder="- SELECT ONE -"
                            components={{
                              IndicatorSeparator: () => null,
                              DropdownIndicator,
                            }}
                            styles={selectCustomStyles}
                            options={[
                              { value: "ye", label: "YES" },
                              { value: "no", label: "NO" },
                            ]}
                          />
                        </>
                      )}
                      rules={{ required: "EU resident is required" }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6" role="advances">
                    <CheckBox
                      errors={errors}
                      register={register}
                      name={"advances"}
                      label={"ADVANCES*"}
                      required={true}
                      errorMsg={"Advances is required"}
                    />
                  </div>
                  <div className="col-6" role="alerts">
                    <CheckBox
                      errors={errors}
                      register={register}
                      name={"alerts"}
                      label={"ALERTS"}
                      required={false}
                      errorMsg={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6" role="other communications">
                    <CheckBox
                      errors={errors}
                      register={register}
                      name={"otherCommunications"}
                      label={"OTHERS COMMUNICATIONS"}
                      required={false}
                      errorMsg={""}
                    />
                  </div>
                  <div className="col-6">
                    <CheckBox
                      errors={errors}
                      register={register}
                      name={"triggerError"}
                      label={"(DEV only) Trigger error on form"}
                      required={false}
                      errorMsg={""}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className="row mt-5 pb-5">
                  <div className="col-sm-12 col-md-6">
                    <button
                      type="submit"
                      className="col-sm-12 col-md-5"
                      role="submit form"
                    >
                      SUBMIT
                    </button>

                    <button
                      className="col-sm-12 col-md-5 mt-3 white"
                      type="reset"
                      role="reset form"
                    >
                      RESET
                    </button>
                  </div>
                </div>
                {/* Error Msg */}
                {serverResponse.status === "error" && (
                  <div className="alert alert-danger pt-5 pb-5" role="alert">
                    {serverResponse.message}
                  </div>
                )}
              </section>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
