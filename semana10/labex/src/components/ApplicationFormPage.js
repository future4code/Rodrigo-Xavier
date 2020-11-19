import ButtonBackHome from './buttons/ButtonBackHome';
import React, { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

function ApplicationFormPage() {
  const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <input
          value={form.name}
          placeholder={"Nome"}
          onChange={handleInputChange}
          name={"name"}
          type={"text"}
          pattern={"[A-Za-z]{3,}"}
          required
        />
        <input
          value={form.age}
          placeholder={"Idade"}
          onChange={handleInputChange}
          name={"age"}
          type={"number"}
          min="18"
          required
        />
        <input
          value={form.applicationText}
          placeholder={"Texto de aplicação"}
          onChange={handleInputChange}
          name={"applicationText"}
          type={"text"}
          required
        />
        <input
          value={form.profession}
          placeholder={"Profissão"}
          onChange={handleInputChange}
          name={"profession"}
          type={"text"}
          required
        />
        <input
          value={form.country}
          placeholder={"País"}
          onChange={handleInputChange}
          name={"country"}
          type={"text"}
          required
        />
        <button>Enviar</button>
      </form>
      <ButtonBackHome />
    </div>
  );
}

export default ApplicationFormPage;