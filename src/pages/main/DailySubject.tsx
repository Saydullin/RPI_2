import { PreviewPoet } from "../../components/poet/PreviewPoet"
import { poets as poetsRU } from "../../data/ru/poetsData"
import { poets as poetsEN } from "../../data/en/poetsData"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
    BoldTitle,
    Container,
    Flex,
    Section,
    Title,
    Space,
    SubTitle
} from "../../styles/Styles"

function DailySubject() {
    const { t, i18n } = useTranslation()
    const poetsList = i18n.language == "ru" ? poetsRU : poetsEN
    const randId = Math.floor(Math.random() * poetsList.length)

    return (
        <Section className={"h"} isFullScreen={false} isPadding={true}>
            <Container>
                <BoldTitle>{t("poet_of_the_day")}</BoldTitle>
                <Space width={0} height={40} />
                <PreviewPoet id={randId} poet={poetsList[randId]} />
                <Space width={0} height={40} />
                <Flex isColumn={false} position={"center"}>
                    <Link to={`/RPI_2/poet/${randId}`}>
                        <SubTitle className="l_color">Read more</SubTitle>
                    </Link>
                </Flex>
            </Container>
        </Section>
    )
}

export {
    DailySubject
}


