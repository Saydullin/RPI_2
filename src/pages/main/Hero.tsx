import { useTranslation } from "react-i18next"
import heroBG from "../../assets/img/hero_bg.jpg"
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
        <Section className="hero_bg gradient_bg_to_h" isFullScreen={true} isPadding={false} bg={heroBG}>
            <Container style={{height: "100vh"}}>
                <Flex isColumn={true} position="center">
                    <Title className="b" style={{fontSize: "30px"}}>{t("what_fav_poet")}</Title>
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