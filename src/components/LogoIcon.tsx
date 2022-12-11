import { Link } from "react-router-dom";
import logo from "../assets/img/feather.png"
import { BigIcon, BoldTitle, Flex, Space } from "../styles/Styles";

export default function () {
    return (
        <Link to="/RPI_2">
            <Flex isColumn={false} position="center">
                <BigIcon src={logo} alt="logo" />
                <Space width={10} height={0} />
                <BoldTitle className="t-color">Wiki Poets</BoldTitle>
            </Flex>
        </Link>
    )
}