import Developer from "../../components/developer/Developer"
import { developersData } from "../../data/ru/developersData"
import {
    Section,
    Container,
    BoldTitle,
    Space,
    Flex
} from "../../styles/Styles"

function Developers() {

    const developersList = developersData

    return (
        <Section isFullScreen={false} isPadding={true}>
            <Container>
                <BoldTitle>Developers</BoldTitle>
                <Flex isColumn={false} position={"center"}>
                    {
                        developersList.map((developer) => {
                            return (
                                <>
                                    <Space width={0} height={50} />
                                    <Developer developer={developer} />
                                </>
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


