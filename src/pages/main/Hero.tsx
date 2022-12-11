import {
    Container,
    Flex,
    Section,
    Space,
    SubTitle,
    Title
} from "../../styles/Styles"

function Hero() {

    return (
        <Section className="hero_bg" isFullScreen={false} isPadding={false}>
            <Container>
                <Space width={0} height={100} />
                <Flex isColumn={true} position="center">
                    <Title className="b">What is your favourite poet?</Title>
                    <Space width={0} height={50}></Space>
                    <SubTitle className="short-width tac">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti voluptas, ipsum eveniet tenetur excepturi odit recusandae laboriosam atque numquam fuga sed, hic, quas nostrum? Explicabo consequatur odit dicta tempore.</SubTitle>
                    <Space width={0} height={50}></Space>
                </Flex>
            </Container>
        </Section>
    )
}

export {
    Hero
}