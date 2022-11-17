import PoetBiographyType from "./PoetBiography"
import PoetGalleryType from "./PoetGallery"

type PoetType = {
    id: number,
    name: string,
    description: string,
    ytLink: string,
    years: {
        birth: number,
        death: number,
    },
    profileImage: {
        src: string,
        alt: string
    },
    locationCoordinates: {
        lat: number,
        lng: number,
    },
    images: PoetGalleryType,
    biography: PoetBiographyType
}

export default PoetType


