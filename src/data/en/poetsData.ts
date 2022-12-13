const poets: {
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
        query: string
    },
    images: {
        src: string,
        alt: string
    }[],
    biography: {
        year: number,
        title: string,
        description: string,
    }[]
}[] = [
    {
        id: 0,
        name: "Yakub Kolas",
        description: "Belarusian writer, playwright, poet and translator, public figure. One of the classics and founders of the new Belarusian literature",
        ytLink: "https://www.youtube-nocookie.com/embed/HxFeWGZspJQ?controls=0",
        years: {
            birth: 1882,
            death: 1956,
        },
        profileImage: {
            src: "/RPI_2/img/poets/poet_1.jpg",
            alt: "Yakub Kolas"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Yakub Kolas Home",
        },
        images: [
            {
                src: "/RPI_2/img/poets/poet_1_slide1.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/RPI_2/img/poets/poet_1_slide2.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/RPI_2/img/poets/poet_1_slide3.jpg",
                alt: "Yakub Kolas"
            },
        ],
        biography: [
            {
                year: 1906,
                title: "First publication",
                description: "In 1906, the first publication was the poem «The Native Land» in the Belarusian newspaper «Our Share»"
            },
            {
                year: 1913,
                title: "Marriage",
                description: "On June 3, 1913, he married the teacher Maria Dmitrievna Kamenskaya. He was married in the Varvarinsky Church of Pinsk, which since 1906 belonged to the railway department. With her he had sons Daniel (1914-1996), Yuri (1917-1941), Mikhail (1926-2020)"
            },
            {
                year: 1923,
                title: "Novaya Zemlya",
                description: "Publication of the poem «Novaya Zemlya»"
            },
            {
                year: 1925,
                title: "Simon the musician",
                description: "Publication of the poem «Simon the musician»"
            },
            {
                year: 1925,
                title: "Academician",
                description: "Since 1929 — Vice-President of the Academy of Sciences of the BSSR, Deputy of the Supreme Soviet of the BSSR"
            },
        ]
    },
    {
        id: 1,
        name: "Janka Kupala",
        description: "Belarusian Soviet poet and translator, playwright, publicist. Classic of Belarusian literature. People's poet of the BSSR. Academician of the Academy of Sciences of the BSSR and the Academy of Sciences of the USSR. Winner of the Stalin Prize of the first degree",
        ytLink: "https://www.youtube-nocookie.com/embed/9FZehV2qJTk?controls=0",
        years: {
            birth: 1882,
            death: 1942,
        },
        profileImage: {
            src: "/RPI_2/img/poets/poet_2.jpg",
            alt: "Janka Kupala"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Janka Kupalas Home"
        },
        images: [
            {
                src: "/RPI_2/img/poets/poet_2_slide1.jpg",
                alt: "Janka Kupala"
            },
            {
                src: "/RPI_2/img/poets/poet_2_slide2.jpg",
                alt: "Janka Kupala"
            },
            {
                src: "/RPI_2/img/poets/poet_2_slide3.jpg",
                alt: "Janka Kupala"
            },
            {
                src: "/RPI_2/img/poets/poet_2_slide4.jpg",
                alt: "Janka Kupala"
            },
        ],
        biography: [
            {
                year: 1904,
                title: "The first poem",
                description: "The first poem in the Belarusian language — «May share» is dated July 15, 1904."
            },
            {
                year: 1908,
                title: "The first collection",
                description: "In 1908, the first collection of Kupala was published in St. Petersburg under the name «Zhaleyka» («Pipe»)."
            },
            {
                year: 1912,
                title: "The first play",
                description: "On June 3, 1912, Kupala completed his first play, the comedy Paylinka, which was published in St. Petersburg in the same year, and then was staged first in St. Petersburg, then in Vilna."
            },
            {
                year: 1914,
                title: "Our field",
                description: "On April 7, 1914, Kupala became the editor of the newspaper Nasha Niva"
            },
            {
                year: 1915,
                title: "Batskauschyna",
                description: "In 1915, the poem Batskayshchyna (Fatherland) was written"
            }
        ]
    },
    {
        id: 2,
        name: "Peter Brovko",
        description: "Belarusian Soviet writer, poet and translator, playwright, publicist. People 's Poet of the Belarusian SSR",
        ytLink: "https://www.youtube-nocookie.com/embed/LozL_I6RlxA?controls=0",
        years: {
            birth: 1905,
            death: 1980,
        },
        profileImage: {
            src: "/RPI_2/img/poets/poet_1.jpg",
            alt: "Peter Brovko"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Peter Brovko Home"
        },
        images: [
            {
                src: "/RPI_2/img/poets/poet_3_slide1.jpg",
                alt: "Peter Brovko"
            },
            {
                src: "/RPI_2/img/poets/poet_3_slide2.jpg",
                alt: "Peter Brovko"
            },
            {
                src: "/RPI_2/img/poets/poet_3_slide3.jpg",
                alt: "Peter Brovko"
            },
        ],
        biography: [
            {
                year: 1926,
                title: "Debut",
                description: "He has been engaged in literary activity since 1926. He made his debut in the newspaper Chyrvonaya Polachchyna and in the literary almanac Naddzvinne"
            },
            {
                year: 1943,
                title: "Secretary of the Joint Venture of the BSSR",
                description: "In 1943-1945 he was the executive secretary of the Joint Venture of the BSSR"
            },
            {
                year: 1945,
                title: "The flame",
                description: "In 1945-1948 — Editor - in - chief of the literary magazine Polymya"
            },
            {
                year: 1957,
                title: "When rivers merge",
                description: "In 1957, he wrote the novel When Rivers Merge, dedicated to the construction of hydroelectric power plants on the border of the three republics, the friendship of Belarusians, Lithuanians and Latvians"
            },
        ]
    },
    {
        id: 3,
        name: "Grigory Borodulin",
        description: "Soviet and Belarusian poet, essayist, editor, translator. People's Poet of Belarus (1992)",
        ytLink: "https://www.youtube-nocookie.com/embed/spSY6JflnZ0?controls=0",
        years: {
            birth: 1935,
            death: 2014,
        },
        profileImage: {
            src: "/RPI_2/img/poets/poet_1.jpg",
            alt: "Grigory Borodulin"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Grigory Borodulin Home"
        },
        images: [
            {
                src: "/RPI_2/img/poets/poet_4_slide1.jpg",
                alt: "Grigory Borodulin"
            },
            {
                src: "/RPI_2/img/poets/poet_4_slide2.jpg",
                alt: "Grigory Borodulin"
            },
            {
                src: "/RPI_2/img/poets/poet_4_slide3.jpg",
                alt: "Grigory Borodulin"
            },
            {
                src: "/RPI_2/img/poets/poet_4_slide4.jpg",
                alt: "Grigory Borodulin"
            },
        ],
        biography: [
            {
                year: 1953,
                title: "Start of publication",
                description: "He began publishing in 1953, the first poems were published in the newspaper Krasnaya Smena (bel. Chyrvonaya Zmena)"
            },
            {
                year: 1959,
                title: "The first collection",
                description: "The first collection of poetry A Month over the Steppe was published in 1959. In total, about 70 collections of poetry were published (among which there are collections of satire and humor, as well as poems for children), critical articles, essays, translations"
            },
            {
                year: 2006,
                title: "Collection of poems",
                description: "In the summer of 2006, a book of selected poems by Borodulin, Runes of Perunova, was published"
            },
            {
                year: 2013,
                title: "Ushachinsky heritage",
                description: "In 2013, Ryhor Borodulin's Ushatsky Word Collection was published. This is not just a dialectical dictionary from Grigory Borodulin's homeland-Ushachiny -it is, in fact, a complete description of the living traditions of an entire Belarusian district with a separate Ushachsky culture, as Borodulin says"
            },
        ]
    },
    {
        id: 4,
        name: "Vladimir Korotkevich",
        description: "Belarusian Soviet writer, publicist, poet, translator and playwright, screenwriter, classic of Belarusian literature. He is one of the most prominent figures in the Belarusian literature of the XX century. He became the first Belarusian writer who turned to the genre of historical detective",
        ytLink: "https://www.youtube-nocookie.com/embed/3d-AOoWTgPo?controls=0",
        years: {
            birth: 1930,
            death: 1984,
        },
        profileImage: {
            src: "/RPI_2/img/poets/poet_1.jpg",
            alt: "Vladimir Korotkevich"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Vladimir Korotkevich Home"
        },
        images: [
            {
                src: "/RPI_2/img/poets/poet_5_slide1.jpg",
                alt: "Vladimir Korotkevich"
            },
            {
                src: "/RPI_2/img/poets/poet_5_slide2.jpg",
                alt: "Vladimir Korotkevich"
            },
            {
                src: "/RPI_2/img/poets/poet_5_slide3.jpg",
                alt: "Vladimir Korotkevich"
            },
        ],
        biography: [
            {
                year: 1951,
                title: "Debut",
                description: "As a poet, he made his debut in 1951 — he published two poems in the Orsha district newspaper Lenin's Appeal: There will be a channel (in Russian) and Yakub Kolas (in Belarusian)."
            },
            {
                year: 1958,
                title: "The Gypsy King",
                description: "In 1958, he wrote a satirical and humorous novel The Gypsy King, in writing which the fact of the existence of a Gypsy kingdom in the Grodno region at the end of the XVIII century was used."
            },
            {
                year: 1962,
                title: "Booksellers",
                description: "The theme of the awakening of the Belarusian people in the 1880s was revealed to them in the story of the Bookseller (1962), which shows the immortal spirit of the people, the desire of ordinary people for truth and enlightenment"
            },
            {
                year: 1958,
                title: "The Wild Hunt of King Stach",
                description: "In the historical detective story The Wild Hunt of King Stakh (1958), the writer depicted the events of the 1880s in one of the remote corners of Belarus. In this story, the author tried to show the society of that time, with its national, cultural and historical features, with its patriotic ideas"
            },
        ]
    }
]

export {
    poets
}