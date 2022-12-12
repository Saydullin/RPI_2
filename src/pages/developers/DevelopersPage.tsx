import Developer from "../../components/developer/Developer";
import { useTranslation } from "react-i18next"
import { developersData as developersRU } from "../../data/ru/developersData";
import { developersData as developersEN } from "../../data/en/developersData";
import { BoldTitle, Container, Flex, Section, Space } from "../../styles/Styles";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";

export default function DevelopersPage() {
    const { t, i18n } = useTranslation()

    const developers = i18n.language == "ru" ? developersRU : developersEN

    return (
        <>
            <Header />
            <Container>
                <BoldTitle>{t("developers")}</BoldTitle>
                <Space width={0} height={50} />
                <Flex isColumn={false} position={"center"} gap={50}>
                    {
                        developers.map((developer) => {
                            return (
                                <Developer developer={developer} />
                            )
                        })
                    }
                </Flex>
            </Container>
            <Footer />
        </>
        
    )
}


