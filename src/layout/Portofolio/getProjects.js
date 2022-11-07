import slide1 from "../../assets/project/slide1.png"
import slide2 from "../../assets/project/slide2.png"
import slide3 from "../../assets/project/slide3.png"
import source from '../../assets/project/source.png'
import figmaImg1 from '../../assets/project/figmaImg1.png'
import figmaImg2 from '../../assets/project/figmaImg2.png'
import sourceImg1 from '../../assets/project/sourceImg1.png'
import sourceImg2 from '../../assets/project/sourceImg2.png'
import sourceImg3 from '../../assets/project/sourceImg3.png'

export const defaultProjects = [
    {
        id: 1,
        name: 'MSI STORE',
        link: 'https://msi-atn.netlify.app/',
        img: slide1,
        imgSource: sourceImg1,
        imgFigma: figmaImg1,
        detail: 'Site to make online shopping',
        source: 'https://github.com/Theanhmgt/misstore',
        figma: 'https://www.figma.com/file/t7fsZHL3x8bu4KxpKW84J4/Tech-Online-Store-Design?node-id=49%3A53'
    },
    {
        id: 2,
        name: 'MY PORTOFOLIO',
        link: 'https://github.com/Theanhmgt/baucua',
        img: slide2,
        imgSource: sourceImg2,
        imgFigma: figmaImg2,
        detail: 'My portofolio',
        source: 'https://github.com/Theanhmgt/portfolio',
        figma: 'https://www.figma.com/file/pa5SA0sixmf8y7vLgUhcfM/Portfolio---Tomasz-Gajda?node-id=7%3A4'
    },
    {
        id: 3,
        name: 'BAU CUA TOM CA',
        link: 'https://theanhmgt.github.io/baucua/',
        img: slide3,
        imgSource: sourceImg3,
        imgFigma: source,
        detail: 'Site to play BauCua online',
        source: 'https://github.com/Theanhmgt/baucua',
        figma: ''
    },
]