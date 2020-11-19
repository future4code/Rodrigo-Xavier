import ButtonBackHome from "./buttons/ButtonBackHome";
import React, { useState } from "react";
import styled from "styled-components";

const ContainerAppForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
`;

const FormCard = styled.div`
  text-align: center;
  width: 150px;
`;

const ButtonSend = styled.button`
 background-color: black;
  border: 1px solid black;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
`;

const InputField = styled.input`
  margin: 5px 0;
  padding: 5px 5px;
  width: 180px;
`;

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
    <ContainerAppForm>
      <FormCard>
      <form onSubmit={onSubmitForm}>
        <InputField
          value={form.name}
          placeholder={"Nome"}
          onChange={handleInputChange}
          name={"name"}
          type={"text"}
          pattern={"[A-Za-z]{3,}"}
          required
        />
        <InputField
          value={form.age}
          placeholder={"Idade"}
          onChange={handleInputChange}
          name={"age"}
          type={"number"}
          min="18"
          required
        />
        <InputField
          value={form.applicationText}
          placeholder={"Texto de aplicação"}
          onChange={handleInputChange}
          name={"applicationText"}
          type={"text"}
          pattern={"[A-Za-z]{30,}"}
          required
        />
        <InputField
          value={form.profession}
          placeholder={"Profissão"}
          onChange={handleInputChange}
          name={"profession"}
          type={"text"}
          pattern={"[A-Za-z]{10,}"}
          required
        />
        <InputField
          value={form.country}
          placeholder={"País"}
          onChange={handleInputChange}
          name={"country"}
          type={"text"}
          required
        />
        <ButtonSend>Enviar</ButtonSend>
      </form>
      <ButtonBackHome />
      </FormCard>
    </ContainerAppForm>
  );
}

export default ApplicationFormPage;