import Developer from "../../components/developer/Developer"
import { developersData as developersRU } from "../../data/ru/developersData"
import { developersData as developersEN } from "../../data/en/developersData"
import { useTranslation } from "react-i18next"
import {
    Section,
    Container,
    BoldTitle,
    Space,
    Flex
} from "../../styles/Styles"

function Developers() {
    const { t, i18n } = useTranslation()

    const developersList = i18n.language == "ru" ? developersRU : developersEN

    return (
        <Section isFullScreen={false} isPadding={true}>
            <Container>
                <BoldTitle>{t("developers")}</BoldTitle>
                <Space width={0} height={50} />
                <Flex isColumn={false} position={"center"} gap={50}>
                    {
                        developersList.map((developer) => {
                            return (
                                <Developer developer={developer} />
                            )
                        })
                    }
                </Flex>
            </Container>
        </Section>
    )
}

export {
    Developers
}


