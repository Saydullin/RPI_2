import PoetType from "../../data/types/PoetType"
import {
    Flex,
    Space,
} from "../../styles/Styles"
import { PoetImageGallery } from "./PoetImageGallery"
import { PreviewPoetInfo } from "./PreviewPoetInfo"

interface PoetProps {
    id: number,
    poet: PoetType,
}

function PreviewPoet({ id, poet }: PoetProps) {

    return (
        <Flex isColumn={true} position={"center"}>
            <PoetImageGallery isFull={false} gallery={poet.images} />
            <PreviewPoetInfo id={id} poet={poet} />
        </Flex>
    )
}

export {
    PreviewPoet
}


