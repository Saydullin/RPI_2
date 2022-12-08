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
            src: "/img/poets/poet_1.jpg",
            alt: "Yakub Kolas"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Yakub Kolas Home",
        },
        images: [
            {
                src: "/img/poets/poet_1_slide1.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/img/poets/poet_1_slide2.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/img/poets/poet_1_slide3.jpg",
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
            },
        ]
    },
    {
        id: 1,
        name: "Янка Купала",
        description: "Белорусский советский поэт и переводчик, драматург, публицист. Классик белорусской литературы. Народный поэт БССР. Академик АН БССР и АН УССР. Лауреат Сталинской премии первой степени.",
        ytLink: "",
        years: {
            birth: 1882,
            death: 1942,
        },
        profileImage: {
            src: "/img/poets/poet_2.jpg",
            alt: "Janka Kupala"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Janka Kupalas Home"
        },
        images: [
            {
                src: "/img/poets/poet_2_slide1.jpg",
                alt: "Janka Kupala"
            },
            {
                src: "/img/poets/poet_2_slide2.jpg",
                alt: "Janka Kupala"
            },
            {
                src: "/img/poets/poet_2_slide3.jpg",
                alt: "Janka Kupala"
            },
            {
                src: "/img/poets/poet_2_slide4.jpg",
                alt: "Janka Kupala"
            },
        ],
        biography: [
            {
                year: 1908,
                title: "«Жалейка»",
                description: "Целостная книга лирики, прежде всего дум и переживаний, высказанных от имени крестьянина и самого поэта как крестьянского песняра. Стремясь утвердить себя поэтом народных масс, выразителем их дум и чувств."
            },
            {
                year: 1910,
                title: "«Гусляр»",
                description: "Второй поэтический сборник белорусского поэта Янка Купала, изданный в октября 1910 года. Сборник положил начало философскому течению в белорусской национальной лирической поэзии."
            },
            {
                year: 1913,
                title: "«Дорогой жизни»",
                description: "Тут типа о том, что он сделал в этом году, только с тонной воды."
            },
            {
                year: 1922,
                title: "«Наследие»",
                description: "Тут типа о том, что он сделал в этом году, только с тонной воды."
            },
            {
                year: 1925,
                title: "«Безымянное»",
                description: "Тут типа о том, что он сделал в этом году, только с тонной воды."
            },
        ]
    },
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
            src: "/img/poets/poet_1.jpg",
            alt: "Yakub Kolas"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Yakub Kolas Home"
        },
        images: [
            {
                src: "/img/poets/poet_1_slide1.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/img/poets/poet_1_slide2.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/img/poets/poet_1_slide3.jpg",
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
            },
        ]
    },
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
            src: "/img/poets/poet_1.jpg",
            alt: "Yakub Kolas"
        },
        locationCoordinates: {
            lat: 0,
            lng: 0,
            query: "Yakub Kolas Home"
        },
        images: [
            {
                src: "/img/poets/poet_1_slide1.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/img/poets/poet_1_slide2.jpg",
                alt: "Yakub Kolas"
            },
            {
                src: "/img/poets/poet_1_slide3.jpg",
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
            },
        ]
    }
]

export {
    poets
}


