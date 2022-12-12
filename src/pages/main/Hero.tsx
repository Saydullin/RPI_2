import { useTranslation } from "react-i18next"
import {
    Container,
    Flex,
    Section,
    Space,
    SubTitle,
    Title
} from "../../styles/Styles"

function Hero() {

    const { t } = useTranslation()

    return (
        <Section className="hero_bg" isFullScreen={false} isPadding={false}>
            <Container>
                <Space width={0} height={100} />
                <Flex isColumn={true} position="center">
                    <Title className="b">{t("what_fav_poet")}</Title>
                    <Space width={0} height={50}></Space>
                    <SubTitle className="short-width tac">{t("what_fav_poet_caption")}</SubTitle>
                    <Space width={0} height={50}></Space>
                </Flex>
            </Container>
        </Section>
    )
}

export {
    Hero
}