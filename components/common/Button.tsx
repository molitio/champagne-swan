import React from "react";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
> = (props) => {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
