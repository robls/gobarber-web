import React from 'react';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background/>
    <Content>
      <img src={logo} alt="GoBarber"/>
      <form >
        <h1>Faca seu cadastro</h1>
        <Input name= "name" icon={FiUser} placeholder="Nome"/>
        <Input name= "email" icon={FiMail} placeholder="E-Mail"/>
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft/>
        Voltar para logon
      </a>
    </Content>
  </Container>

);

export default SignUp;
