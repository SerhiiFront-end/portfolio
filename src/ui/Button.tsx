import React from "react";
const Button = ({children , className , type}: { children: React.ReactNode, className?: string, type?: string }) => {
    return (
        <button
            className={type === 'my'
                ? `${className}`
                : `w-1/2 block my-3 m-auto md:w-1/5 p-3 bg-slate-700 hover:ease-linear hover:duration-500 hover:bg-slate-500 hover:rounded-md ${className}`}
        >
            {children}
        </button >
    );
};

export default Button;