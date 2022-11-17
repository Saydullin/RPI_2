import PoetType from "../../data/types/PoetType"
import {
    Flex, 
    PoetPicture, 
    PoetSubTitle, 
    PoetTitle, 
    Space 
} from "../../styles/Styles"

interface PoetProps {
    poet: PoetType
}

function PoetInfo({ poet }: PoetProps) {

    return (
        <Flex isColumn={true} isStart={false}>
            {/* <PoetPicture src={poet.profileImage.src} alt={poet.profileImage.alt} /> */}
            <Space height={20} width={0} />
            <PoetTitle>{poet.name}</PoetTitle>
            <Space height={10} width={0} />
            <PoetSubTitle>{poet.years.birth} - {poet.years.death}</PoetSubTitle>
            <Space height={10} width={0} />
            <PoetSubTitle>{poet.description}</PoetSubTitle>
        </Flex>
    )
}

export {
    PoetInfo
}


