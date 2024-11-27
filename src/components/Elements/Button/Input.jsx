const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
      {...props}
    />
  );
};

export default Input;
