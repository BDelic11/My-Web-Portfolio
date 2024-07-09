const LayoutContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className} px-6 md:px-24 lg:px-52`}>{children}</div>
  );
};

export default LayoutContainer;
