import React from "react";
import { ICustomButtonProps } from "@/types/index";

const CustomButton: React.FC<ICustomButtonProps> = ({ children, containerStyles, handleClick, rightIcon }) => {
	return (
		<button onClick={handleClick} className={"flex p-3 px-8 rounded-full " + containerStyles} type="button">
			<span className="flex-1">{children}</span>
			{rightIcon && <img className="w-5 h-5" src={rightIcon} alt="right-icon" />}
		</button>
	);
};

export default CustomButton;
