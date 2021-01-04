import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled'
import { useForm } from '../../hooks/useForm';
import {registration} from '../../services/user'
import useUnprotectPage from '../../hooks/useUnprotectPage';

function RegistrationPage() {
  useUnprotectPage()
  const { form, onChange } = useForm({ email: "", password: "", username: "" });
  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target

    onChange(value, name)
  }

  const handleSubmission = (event) => {  
    event.preventDefault()
    registration(form, history)
  }

  return (
    <S.RegistrationContainer>
      <form onSubmit={handleSubmission}>
        <input 
          name="username"
          type="text"
          value={form.username}
          onChange={handleInputChange}
          placeholder="Nome de Usuário"
          required
        />
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
        <button>Cadastrar</button>
      </form>
    </S.RegistrationContainer>
  )
}

export default RegistrationPage;