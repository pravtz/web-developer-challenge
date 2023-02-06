import { Header } from "../Header"
import { WrapperLayoutMain, Content } from "./styled"


type LayoutMainType = {
    children: React.ReactNode
}

export const LayoutMain = ({ children }: LayoutMainType) => {
    return (
        <WrapperLayoutMain>
            <Header />
            <Content>
                {children}
            </Content>
        </WrapperLayoutMain>
    )
}