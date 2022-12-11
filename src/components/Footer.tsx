import { Container, Flex, Space } from "../styles/Styles";
import LogoIcon from "./LogoIcon";

export default function Footer() {

    return (
        <footer className="footer sticky">
            <Container>
                <Flex isColumn={false} position={"center"}>
                    <span>All Rights Reserved</span>
                </Flex>
            </Container>
        </footer>
    )
}