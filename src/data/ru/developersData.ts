import PavelPicture from "../../assets/img/pavel.jpg"
import SaydullinPicture from "../../assets/img/me_f.jpg"

const developersData: {
    id: number,
    name: string,
    lastName: string,
    description: string,
    githubLink: string,
    yearsOld: string,
    profileImage: {
        src: string,
        alt: string
    }
}[] = [
    {
        id: 0,
        name: "Saydullin",
        lastName: "Sady",
        description: "BSUIR Student, 2 course",
        githubLink: "https://github.com/Saydullin",
        yearsOld: "20 years old",
        profileImage: {
            src: SaydullinPicture,
            alt: "Saydullin"
        }
    },
    {
        id: 1,
        name: "Pavel",
        lastName: "Romanko",
        description: "BSUIR Student, 2 course",
        githubLink: "https://github.com/Saydullin",
        yearsOld: "19 years old",
        profileImage: {
            src: PavelPicture,
            alt: "Pavel"
        }
    },
    
]

export {
    developersData
}


