import { useState } from "react"
import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import { PreviewPoet } from "../../components/poet/PreviewPoet"
import SearchWidget from "../../components/SearchWidget"
import { poets as poetsRU } from "../../data/ru/poetsData"
import { poets as poetsEN } from "../../data/en/poetsData"
import PoetType from "../../data/types/PoetType"
import { useTranslation } from "react-i18next"
import {
    Container,
    Flex,
    Space,
    Title
} from "../../styles/Styles"

function PoetsListPage() {
    const { t, i18n } = useTranslation()
    window.scrollTo(0, 0)
    const poets = i18n.language == "ru" ? poetsRU : poetsEN
    const [poetsList, setPoets] = useState<PoetType[]>(poets)

    const onSearch = (searchText: string) => {
        const filteredPoets = poets.filter(({ name }) => name.includes(searchText))
        setPoets(filteredPoets)
    }

    return (
        <>
            <Header />
            <Container className="in-left">
                <Flex isColumn={false} position={"space-between"} gap={20} style={{padding: "10px"}}>
                    <Title>{t("poets_list")}</Title>
                    <SearchWidget onEdit={onSearch} placeholder={t("search_poets_hint")} />
                </Flex>
                <Flex isColumn={true} position={"center"}>
                    {
                        poetsList.map((poet) => {
                            return (
                                <>
                                    <Space height={100} width={0} />
                                    <PreviewPoet poet={poet} id={poet.id} />
                                </>
                            )
                        })
                    }
                </Flex>
                <Space width={0} height={50} />
            </Container>
            <Footer />
        </>
    )
}

export default PoetsListPage


