import React from "react";

interface SmallTitleProps {
  children: React.ReactNode;
  isInView?: boolean;
  classname?: string;
}

const SmallTitle: React.FC<SmallTitleProps> = ({
  isInView,
  children,
  classname,
}) => {
  return (
    <h2
      className={`${classname} ${
        isInView
          ? "transform-none opacity-1"
          : " transform translate-x-[-200px] opacity-0"
      }  transition-all duration-700 delay-700 text-3xl mb-6 md:text-2xl md:my-6 md:pt-10  `}
    >
      {children}
    </h2>
  );
};

export default SmallTitle;
