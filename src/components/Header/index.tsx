import { Brand, WrapperHeader } from "./styled"
import Logo from '../../assets/bx-logo.png'

export const Header = () => {
    return (
        <WrapperHeader>
            <Brand>
                <img src={Logo} alt="Logo" />
            </Brand>
        </WrapperHeader>
    )
}