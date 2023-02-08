import { ButtonHTMLAttributes, ComponentProps } from "react";
import { WrapperButton } from "./style";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    ComponentProps<typeof WrapperButton>;

export const ButtonMain = ({
    children,
    variant,
    isDesabled,
    ...rest
}: React.PropsWithChildren<Props>) => {
    return <WrapperButton variant={variant} isDesabled={isDesabled} {...rest}>{children}</WrapperButton>;
};