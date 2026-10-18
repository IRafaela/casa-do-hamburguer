import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={onSubmit}
    >
      <div className="flex w-[85%] max-w-[350px] flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo (1).png" alt="Logo" />
        </Link>

        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Login" variant="default" />
        
        <Link to="/register" className="w-full">
          <Button title="Não tem uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default login;
