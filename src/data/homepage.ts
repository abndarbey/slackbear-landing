import { IconGauge, IconUser, IconCookie, IconMagnet, IconGlobe, IconCpu } from '@tabler/icons'

export const homeHero = {
    titleFragment1: `Small Team With a`,
    titleHighlight: `Large`,
    titleFragment2: `Impact`,
    description: `
        Get digital products, engineered & designed to meet your business needs.
    `,
    button1: {
        name: `Explore More`,
        link: ``
    },
    button2: {
        name: `Contact Us`,
        link: `/contact`
    },
}

export const homeFeatureGrid = {
    columns: 2,
    superTitle: `Why work with us?`,
    title: `Integrate effortlessly with any technology stack`,
    description: `
        We work as a unit. Engineering, design, and project management under one roof.
    `,
    data: [
        {
            icon: IconGauge ,
            title: 'Agile',
            description: `
                Agile processes allow Wednesday to bridge the gap between your vision and the team that executes it.
                We iterate fast, seek feedback, ask questions, and communicate openly.
            `,
        },
        {
            icon: IconMagnet,
            title: 'We Attract The Best',
            description: `
                Like attracts like. We've spent years building high-performance applications and are known for quality.
                We've written books on Software Development and spoken at international conferences.
            `,
        },
        {
            icon: IconGlobe,
            title: 'Future Perfect',
            description: `
                You're not just investing money rather in your brand, identity, and business process.
                We think of your product like ours. We convert your investment into a product that meets the needs of your audience.
            `,
        },
        {
            icon: IconCpu,
            title: 'Bleeding Edge Tech',
            description: `
                We don't believe in re-inventing the wheel. We use existing frameworks and solutions to build your product within budget.
                Learning - our core value allows us to stay ahead of the curve.
            `,
        },
    ]
}
