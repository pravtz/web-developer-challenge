import { ButtonHTMLAttributes, ComponentProps } from "react";
import { WrapperButton } from "./style";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    ComponentProps<typeof WrapperButton>;

export const ButtonMain = ({
    children,
    ...rest
}: React.PropsWithChildren<Props>) => {
    return <WrapperButton {...rest}>{children}</WrapperButton>;
};