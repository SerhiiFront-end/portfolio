import React from "react";
import {cva , type VariantProps} from "class-variance-authority";
import Anim from '@/components/animscroll/Anim'

const button = cva(['font-bold'] , {
    variants:         {
        intent: {
            primary:   [
                "bg-slate-700" ,
                "hover:ease-linear" ,
                "hover:duration-500" ,
                "hover:bg-slate-500" ,

            ] ,
            secondary: [
                "bg-white" ,
                "text-gray-800" ,
                "border-gray-400" ,
                "hover:bg-gray-100" ,
            ] ,
        } ,
        size:   {
            small:  ["rounded" , "text-sm" , "py-1" , "px-2"] ,
            medium: ["rounded-md" , "text-base" , "py-2" , "px-4"] ,
        } ,
    } ,
    compoundVariants: [{intent: "primary" , size: "medium"}] ,
    defaultVariants:  {
        intent: "primary" ,
        size:   "medium" ,
    } ,
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> , VariantProps<typeof button> {
}

export const Button: React.FC<ButtonProps> = ({
    className ,
    intent ,
    size ,
    ...props
}) => <Anim isOneTime={false}><button className={button({intent , size , className})} {...props} /></Anim >
