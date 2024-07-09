import React from "react";

interface TitleProps {
  children: React.ReactNode;
  isInView?: boolean;
  classname?: string;
}

const TitleComponent: React.FC<TitleProps> = ({
  isInView,
  children,
  classname,
}) => {
  return (
    <h1
      className={`${classname} ${
        isInView
          ? "transform-none opacity-1"
          : " transform translate-x-[-200px] opacity-0"
      }  transition-all duration-700 delay-500 text-5xl mb-20 md:text-4xl md:my-6 md:pt-10  `}
    >
      {children}
    </h1>
  );
};

export default TitleComponent;
