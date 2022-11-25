import PoetType from "../../data/types/PoetType"
import {
    Flex, 
    SubTitle, 
    PoetTitleLink, 
    Space 
} from "../../styles/Styles"

interface PoetProps {
    poet: PoetType
}

function PoetInfo({ poet }: PoetProps) {

    return (
        <Flex isColumn={true} position={"center"}>
            <Space height={20} width={0} />
            <PoetTitleLink>{poet.name}</PoetTitleLink>
            <Space height={10} width={0} />
            <SubTitle>{poet.years.birth} - {poet.years.death}</SubTitle>
            <Space height={20} width={0} />
            <SubTitle className="short-width tac">{poet.description}</SubTitle>
        </Flex>
    )
}

export {
    PoetInfo
}


