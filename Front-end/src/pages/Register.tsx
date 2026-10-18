import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ nome, email, senha, confirmPassword, cep });
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={onSubmit}
    >
      <div className="flex h-[30px] w-[85%] max-w-[350px] flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo (1).png" alt="Logo" />
        </Link>

        <Input
          placeholder="Nome completo"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />
        <Input
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input placeholder="Cep" onChange={(e) => setCep(e.target.value)} />

        <Button title="Criar uma conta" variant="default" />

        <Link to="/login" className="w-full">
          <Button title="Já tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
