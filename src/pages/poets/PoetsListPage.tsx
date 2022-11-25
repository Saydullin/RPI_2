import { Header } from "../../components/Header"
import { PreviewPoet } from "../../components/poet/PreviewPoet"
import { poets } from "../../data/ru/poetsData"
import {
    Container,
    Flex,
    Space
} from "../../styles/Styles"

function PoetsListPage() {

    const poetsList = poets

    return (
        <Container>
            <Header />
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


