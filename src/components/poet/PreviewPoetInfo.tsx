import PoetType from "../../data/types/PoetType"
import { Link } from "react-router-dom"
import {
    Flex, 
    SubTitle, 
    Title,
    Space 
} from "../../styles/Styles"

interface PoetProps {
    id: number,
    poet: PoetType,
}

function PreviewPoetInfo({ id, poet }: PoetProps) {

    return (
        <Flex isColumn={true} position={"center"}>
            <Space height={20} width={0} />
            <Link to={"/poet/" + id}>
                <Title className="l_color">{poet.name}</Title>
            </Link>
            <Space height={10} width={0} />
            <SubTitle>{poet.years.birth} - {poet.years.death}</SubTitle>
            <Space height={20} width={0} />
            <SubTitle className="short-width tac">{poet.description}</SubTitle>
        </Flex>
    )
}

export {
    PreviewPoetInfo
}


