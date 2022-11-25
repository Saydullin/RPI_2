import PoetType from "../../data/types/PoetType"
import {
    Flex,
    Space,
} from "../../styles/Styles"
import { PoetImageGallery } from "./PoetImageGallery"
import { PoetInfo } from "./PoetInfo"
import { PoetVerticleTimeLine } from "./PoetVerticaleTimeLine"

interface PoetProps {
    poet: PoetType,
}

function Poet({ poet }: PoetProps) {

    return (
        <Flex isColumn={true} position={"center"}>
            <PoetImageGallery gallery={poet.images} />
            <PoetInfo poet={poet} />
            <PoetVerticleTimeLine biography={poet.biography} />
            <Space width={0} height={50} />
        </Flex>
    )
}

export {
    Poet
}


