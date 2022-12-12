import PoetType from "../../data/types/PoetType"
import { useTranslation } from "react-i18next"
import {
    BoldTitle,
    Flex,
    Space,
    Title,
} from "../../styles/Styles"
import { PoetImageGallery } from "./PoetImageGallery"
import { PoetInfo } from "./PoetInfo"
import { PoetVerticleTimeLine } from "./PoetVerticaleTimeLine"

interface PoetProps {
    poet: PoetType,
}

function Poet({ poet }: PoetProps) {
    const { t } = useTranslation()
    window.scrollTo(0, 0)

    return (
        <Flex isColumn={true} position={"center"}>
            <Space width={0} height={50} />
            <PoetImageGallery isFull={true} gallery={poet.images} />
            <PoetInfo poet={poet} />
            <Space width={0} height={100} />
            <PoetVerticleTimeLine biography={poet.biography} />
            <Space width={0} height={50} />
            <BoldTitle>{t("map")}</BoldTitle>
            <Space width={0} height={20} />
            <div className="iframe-container rounded">
                <iframe
                    width="600"
                    height="500"
                    className="iframe-incontainer"
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${poet.locationCoordinates.query.replace(" ", "%20")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0} />
                <Space width={0} height={50} />
            </div>
            <Space width={0} height={50} />
            <BoldTitle>{t("yt_video")}</BoldTitle>
            <Space width={0} height={20} />
            <div className="iframe-container rounded">
                <iframe
                    width="600"
                    height="315"
                    className="iframe-incontainer"
                    src={poet.ytLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            </div>
            <Space width={0} height={50} />
        </Flex>
    )
}

export {
    Poet
}


