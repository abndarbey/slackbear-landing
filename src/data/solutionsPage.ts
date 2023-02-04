import { IconLeaf, IconLine } from '@tabler/icons'
import image from 'assets/images/world.svg'

export const solutionsHero = {
    title: `Solutions`,
    description: `
        Let's talk. We would love to understand your product and vision and help you with the experience we have gained by building multiple digital products.
    `,
    image: image,
}

export const solutionsFeatureCards = {
    columns: 2,
    superTitle: `Case Studies`,
    title: `Confidence to Show Our Work`,
    description: `
        Choosing a partner is difficult, but it doesn't have to be uninformed.
    `,
    cardData: [
        {
            icon: IconLeaf ,
            link: 'https://www.springbook.in',
            title: 'Springbook',
            description: `
                Agile processes allow Wednesday to bridge the gap between your vision and the team that executes it.
                We iterate fast, seek feedback, ask questions, and communicate openly.
            `,
        },
        {
            icon: IconLine,
            link: 'https://www.nexport.in',
            title: 'Nexport',
            description: `
                Like attracts like. We've spent years building high-performance applications and are known for quality.
                We've written books on Software Development and spoken at international conferences.
            `,
        },
    ]
}