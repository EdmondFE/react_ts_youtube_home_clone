import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

/* To use as variants and use it however I want, also you can try to use this without tailwind properties. */
const buttonStyles = cva(["hover:bg-secondary-hover ", "transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"],
            dark: [
                "bg-secondary-dark",
                "hover:bg-secondary-dark-hover",
                "text-secondary",
            ],
        },
        size: {
            default: ["rounded", "p-2"],
            icon: [
                "rounded-full",
                "w-10",
                "flex",
                "h-10",
                "items-center",
                "justify-center",
                "p-2.5",
            ],
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

/* the method returns a class name base on the given properties. */
// const classes = buttonStyles({ size: "icon" });

/*  */
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
    // to override some of the tailwind properties just add classname as props to this component but sometimes it doesn't work so use a lib called tailwind-merge
    return (
        <button
            {...props}
            className={twMerge(buttonStyles({ variant, size }), className)}
        />
    );
};

export default Button;
