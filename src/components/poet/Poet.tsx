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
    isPreview: boolean
}

function Poet({ poet, isPreview }: PoetProps) {

    return (
        <Flex isColumn={true} isStart={false}>
            <PoetImageGallery gallery={poet.images} />
            <PoetInfo poet={poet} />
            {!isPreview && (
                <>
                    <PoetVerticleTimeLine biography={poet.biography} />
                    <Space width={0} height={50} />
                </>
            )}
        </Flex>
    )
}

export {
    Poet
}


