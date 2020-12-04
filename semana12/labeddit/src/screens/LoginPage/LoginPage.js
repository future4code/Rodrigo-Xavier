import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import useUnprotectPage from '../../hooks/useUnprotectPage';
import { goToRegistrationPage } from '../../routes/coordinator';
import { login } from '../../services/user';
import * as S from './styled';

function LoginPage() {
  useUnprotectPage()
  const { form, onChange } = useForm({ email: "", password: "" });
  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target

    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    login(form, history)
  }

  return (
    <S.LoginContainer>
      <S.FormContainer onSubmit={handleSubmission}>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="E-mail"
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleInputChange}
          placeholder="Senha"
          required
        />
        <button>Login</button>
      </S.FormContainer>

      <button onClick={() => goToRegistrationPage(history)} >Cadastrar</button>

    </S.LoginContainer>
  )
}

export default LoginPage;