"use client";

import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";
import { Input } from "../ui/input";

type CustomInputProps = {
  name: string;
  height?: string;
  label: string;
  defaultType: string;
};

export const CustomInput: React.FC<
  CustomInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ name, label, defaultType, ...rest }) => {
  const [isPassword, setIsPassword] = useState<string>(defaultType);

  const togglePassword = () => {
    setIsPassword((prevInputType) =>
      prevInputType === "text" ? "password" : "text"
    );
  };

  return (
    <>
      <section className="w-full flex-col gap-4 relative">
        <label className="text-[#101928] font-medium text-sm"> {label} </label>
        <Input
          className="border border-[#D0D5DD] bg-white w-full text-sm text-black placeholder:text-[#98A2B3] focus-visible:ring-transparent h-[42px]"
          name={name}
          type={isPassword}
          {...rest}
        />
        {defaultType === "password" && (
          <span
            onClick={togglePassword}
            className="absolute cursor-pointer translate-y-[42px] -translate-x-3 right-0"
          >
            {isPassword === "password" ? (
              <Eye width={15} height={10} color="#000" />
            ) : (
              <EyeSlash width={15} height={10} color="#000" />
            )}
          </span>
        )}
      </section>
    </>
  );
};
