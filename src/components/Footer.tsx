import { Container, Flex, Space } from "../styles/Styles";
import { useTranslation } from "react-i18next"
import LogoIcon from "./LogoIcon";

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer sticky">
            <Container>
                <Flex isColumn={false} position={"center"}>
                    <span>{t("all_rights_deserved")}</span>
                </Flex>
            </Container>
        </footer>
    )
}


