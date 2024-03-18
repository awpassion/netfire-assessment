const GradientText = ({ children }: { children: string }) => {
  return (
    <span className="gradient-primary bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default GradientText;
