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
        description: "Belarusian writer, playwright, poet and translator, public figure. One of the classics and founders of the new Belarusian literature. People's Poet of the Byelorussian SSR (1926). Academician of the Academy of Sciences of the Byelorussian SSR (1928). Member of the SP of the USSR (1934). Honored Scientist of the Byelorussian SSR",
        ytLink: "",
        years: {
            birth: 1882,
            death: 1956,
        },
        profileImage: {
            src: "img/poet_1.jpg",
            alt: "Yakub Kolas"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Yakub Kolas Home"
        },
        images: [
            {
                src: "img/poet_1_slide1.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "img/poet_1_slide2.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "img/poet_1_slide3.jpg",
                alt: "Yakub Kolas"
            },
        ],
        biography: [
            {
                year: 1910,
                title: "Что-то сделал в этом году",
                description: "Тут типа о том, что он сделал в этом году, только с тонной воды."
            },
            {
                year: 1918,
                title: "Что-то сделал в этом году",
                description: "Тут типа о том, что он сделал в этом году, только с тонной воды."
            },
            {
                year: 1925,
                title: "Что-то сделал в этом году",
                description: "Тут типа о том, что он сделал в этом году, только с тонной воды."
            }
        ]
    },
]

export {
    poets
}


