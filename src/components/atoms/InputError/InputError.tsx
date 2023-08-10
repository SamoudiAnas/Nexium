interface InputErrorProps {
  message: string;
}

const InputError = ({ message }: InputErrorProps) => {
  return <p className="text-error text-sm mt-2">{message}</p>;
};

export { InputError };
