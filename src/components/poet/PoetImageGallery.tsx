import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import PoetGalleryType from "../../data/types/PoetGallery"

interface PoetGalleryProps {
    gallery: PoetGalleryType
}

function PoetImageGallery({ gallery }: PoetGalleryProps) {

    return (
        <Carousel
            dynamicHeight={false}
            swipeable={true}
            showStatus={false}
            showThumbs={false}
            emulateTouch={true}
            autoPlay={false}
            infiniteLoop={true}
            interval={2500}
            transitionTime={400}
            className="rounded cp"
            width={300}>
                {
                    gallery.map(({ src, alt }) => {
                        return (
                            <div>
                                <img src={src} alt={alt} className="poet_slide_image" />
                            </div>
                        )
                    })
                }
        </Carousel>
    )
}

export {
    PoetImageGallery
}


