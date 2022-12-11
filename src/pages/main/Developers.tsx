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


