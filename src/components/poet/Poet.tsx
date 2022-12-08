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
            <Space width={0} height={50} />
            <PoetImageGallery isFull={true} gallery={poet.images} />
            <PoetInfo poet={poet} />
            <Space width={0} height={100} />
            <PoetVerticleTimeLine biography={poet.biography} />
            <Space width={0} height={50} />
            <iframe
                width="600"
                height="500"
                className="poet_map"
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${poet.locationCoordinates.query.replace(" ", "%20")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0} />
        </Flex>
    )
}

export {
    Poet
}


