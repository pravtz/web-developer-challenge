import { WrapperBox } from "./style"

type BoxType = {
    children: React.ReactNode
}
export const Box = ({ children }: BoxType) => {
    return (
        <WrapperBox>
            {children}
        </WrapperBox>
    )
}