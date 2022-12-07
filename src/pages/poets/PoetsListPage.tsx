import { useState } from "react"
import { Header } from "../../components/Header"
import { PreviewPoet } from "../../components/poet/PreviewPoet"
import SearchWidget from "../../components/SearchWidget"
import { poets } from "../../data/ru/poetsData"
import PoetType from "../../data/types/PoetType"
import {
    Container,
    Flex,
    Space,
    Title
} from "../../styles/Styles"

function PoetsListPage() {
    const [poetsList, setPoets] = useState<PoetType[]>(poets)

    return (
        <Container>
            <Header />
            <Space width={0} height={20} />
            <Flex isColumn={false} position={"space-between"} style={{padding: "10px"}} className="h rounded">
                <Title>Poets List</Title>
                <SearchWidget placeholder="Search poet" />
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
        </Container>
    )
}

export default PoetsListPage


