import Input from "./Input";

const login = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-[#161410]">

         <div className="flex w-[200px] flex-col items-center justify-center gap-2">
           <img src="./logo (1).png" alt="Logo" />
           <Input placeholder="E-mail" />
           <Input placeholder="Senha" />
           <button className="w-full rounded-md bg-[#C92A0E] py-1 text-sm font-bold text-white cursor-pointer">Login</button>
        </div>
         
    </div>
    );
};

export default login;
