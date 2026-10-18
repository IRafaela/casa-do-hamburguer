type Buttontype = {
  title: string;
  variant: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: Buttontype) => {

  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full border-2 border-[#C92A0E] cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white";
    } else if (variant === "outline") {
      return "w-full border-2 border-[#C92A0E] cursor-pointer rounded-md bg-white py-2 text-sm font-bold text-[#C92A0E]";
    }
  };



  return <button {...props} className={buttonVariant()}>{title}</button>;
};

export default Button;
