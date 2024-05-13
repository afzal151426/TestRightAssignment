import React from "react";

const sizes = {
  s: "text-xl font-semibold",
  md: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-800 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
