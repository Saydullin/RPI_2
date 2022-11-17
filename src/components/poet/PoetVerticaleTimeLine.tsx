import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import PoetBiographyType from "../../data/types/PoetBiography";
import { PoetDate } from './PoetDate';

interface PoetBiographyProps {
    biography: PoetBiographyType
}

function PoetVerticleTimeLine({ biography }: PoetBiographyProps) {

    return (
        <VerticalTimeline>
            {
                biography.map(({ year, title, description }) => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element-work"
                            contentArrowStyle={{ display: 'none' }}
                            date={year.toString()}
                            icon={<PoetDate />}
                        >
                            <h3 className="vertical-timeline-element-title">{title}</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p>{description}</p>
                        </VerticalTimelineElement>
                    )
                })
            }
            </VerticalTimeline>
    )
}

export {
    PoetVerticleTimeLine
}


