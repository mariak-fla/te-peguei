import { CustomButtonProps } from "@/types"

const CustomButton = ({ title, containerStyles, btnType, handleClick, textStyles, rightIcon }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={containerStyles}
            onClick={handleClick}
        >
            <span className={`flex items-center ${textStyles}`}>
                {title}{rightIcon}
            </span>
        </button>
    )
}

export default CustomButton