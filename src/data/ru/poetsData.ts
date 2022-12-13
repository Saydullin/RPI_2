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
        name: "Якуб Колас",
        description: "Белорусский писатель, драматург, поэт и переводчик, общественный деятель. Один из классиков и основоположников новой белорусской литературы",
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
                title: "Первая публикация",
                description: "В 1906 году первая публикация — стихотворение «Край родимый» в белорусской газете «Наша доля»"
            },
            {
                year: 1913,
                title: "Женитьба",
                description: "3 июня 1913 женился на учительнице Марии Дмитриевне Каменской. Венчался в Варваринской церкви Пинске, которая с 1906 года принадлежал железнодорожному ведомству. С ней имел сыновей Даниила ( 1914—1996), Юрия (1917-1941 гг.), Михаила (1926-2020)"
            },
            {
                year: 1923,
                title: "Новая зямля",
                description: "Издание поэмы «Новая земля»"
            },
            {
                year: 1925,
                title: "Сымон музыка",
                description: "Издание поэмы «Сымон-музыкант»"
            },
            {
                year: 1925,
                title: "Академик",
                description: "С 1929 года — вице-президент Академии наук БССР, депутат ВС БССР"
            },
        ]
    },
    {
        id: 1,
        name: "Янка Купала",
        description: "Белорусский советский поэт и переводчик, драматург, публицист. Классик белорусской литературы. Народный поэт БССР. Академик АН БССР и АН УССР. Лауреат Сталинской премии первой степени",
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
                title: "Первое стихотворение",
                description: "Первое стихотворение на белорусском языке — «Мая доля» датируется 15 июля 1904 года."
            },
            {
                year: 1908,
                title: "Первый сборник",
                description: "В 1908 году в Петербурге был издан первый сборник Купалы под названием «Жалейка» («Дудочка»)."
            },
            {
                year: 1912,
                title: "Первая пьеса",
                description: "3 июня 1912 года Купала завершил первую свою пьесу-комедию «Паўлінка», которая в том же году была издана в Санкт-Петербурге, а затем была поставлена на сцене сначала в Санкт-Петербурге, затем в Вильне."
            },
            {
                year: 1914,
                title: "Наша нива",
                description: "7 апреля 1914 года Купала стал редактором газеты «Наша Ніва»"
            },
            {
                year: 1915,
                title: "Бацькаушчына",
                description: "В 1915 году было написано стихотворение «Бацькаўшчына» (Отечество)"
            }
        ]
    },
    {
        id: 2,
        name: "Пётр Бровка",
        description: "Белорусский советский писатель, поэт и переводчик, драматург, публицист. Народный поэт Белорусской ССР",
        ytLink: "https://www.youtube-nocookie.com/embed/spSY6JflnZ0?controls=0",
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
                title: "Дебют",
                description: "Литературной деятельностью занимался с 1926 года. Дебютировал в газете «Чырвоная Полаччына» и в литературном альманахе «Наддзвінне»"
            },
            {
                year: 1943,
                title: "Секретарь СП БССР",
                description: "В 1943—1945 годах был ответственным секретарём СП БССР"
            },
            {
                year: 1945,
                title: "Полымя",
                description: "В 1945—1948 годы — главный редактор литературного журнала «Полымя»"
            },
            {
                year: 1957,
                title: "Когда сливаются реки",
                description: "В 1957 году написал роман «Когда сливаются реки», посвящённый строительству ГЭС на границе трёх республик, дружбе белорусов, литовцев и латышей"
            },
        ]
    },
    {
        id: 3,
        name: "Григорий Бородулин",
        description: "Советский и белорусский поэт, эссеист, редактор, переводчик. Народный поэт Беларуси (1992)",
        ytLink: "https://www.youtube-nocookie.com/embed/P8e1IoXDcEE?controls=0",
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
                title: "Начало публикации",
                description: "Начал публиковаться в 1953 году, первые стихи были напечатаны в газете «Красная смена» (бел. «Чырвоная змена»)"
            },
            {
                year: 1959,
                title: "Первый сборник",
                description: "Первый сборник поэзии «Месяц над степью» (белор. «Маладзік над стэпам») вышел в 1959 году. Всего вышло около 70 сборников поэзии (среди которых есть сборники сатиры и юмора, а также стихи для детей), критических статей, эссе, переводов"
            },
            {
                year: 2006,
                title: "Сборник стихов",
                description: "Летом 2006 года вышла книга избранных стихотворений Бородулина «Руны Перуновы»"
            },
            {
                year: 2013,
                title: "Ушачинское достояние",
                description: "В 2013 г. вышел «Вушацкі словазбор Рыгора Барадуліна». Это не просто диалектический словарь из родины Григория Бородулина — Ушачины — это, по сути, полное описание живых традиций целого белорусского района с отдельной «ушачской», как говорит Бородулин, культурой"
            },
        ]
    },
    {
        id: 4,
        name: "Владимир Короткевич",
        description: "Белорусский советский писатель, публицист, поэт, переводчик и драматург, сценарист, классик белорусской литературы. Является одной из наиболее ярких фигур в белорусской литературе XX столетия. Стал первым белорусским писателем, обратившимся к жанру исторического детектива",
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
                title: "Дебют",
                description: "Как поэт дебютировал в 1951 году — опубликовал в оршанской районной газете «Ленинский призыв» два стихотворения: «Тут будет канал» (на русском языке) и «Якубу Коласу» (на белорусском языке)."
            },
            {
                year: 1958,
                title: "Цыганский король",
                description: "В 1958 году он написал сатирико-юмористическую повесть «Цыганский король», при написании которой был использован факт существования на Гродненщине в конце XVIII века цыганского «королевства»."
            },
            {
                year: 1962,
                title: "Книгоноши",
                description: "Тема пробуждения белорусского народа в 1880-х годах была им раскрыта в рассказе «Книгоноши» (1962), в котором показан бессмертный дух народа, стремление простого люда к правде и просвещению"
            },
            {
                year: 1958,
                title: "Дикая охота короля Стаха",
                description: "В историко-детективной повести «Дикая охота короля Стаха» (1958) писатель отобразил события 1880-х годов в одном из глухих уголков Белоруссии. В этой повести автор постарался показать общество того времени, с его национальными, культурными и историческими особенностями, с его патриотическими идеями"
            },
        ]
    }
]

export {
    poets
}