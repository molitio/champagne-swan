import React from "react";

type ButtonProps = {
  onClick: () => void;
};

const Button: React.FC<ButtonProps & React.PropsWithChildren> = (props) => {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
