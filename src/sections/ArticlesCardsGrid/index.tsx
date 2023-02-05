import { createStyles, SimpleGrid, Card, Image, Text, AspectRatio } from '@mantine/core'
import SectionWrapper from 'components/SectionWrapper'

const mockdata = [
    {
        superTitle: 'Fullstack, Design, InsureTech',
        title: 'Full Stack Development for a InsureTech company in Europe',
        description: `
            The customer wanted to build a platform to sell insurance policies direct to customers via an interactive web
            and mobile application. The policies were a combination of life, health, and income insurance.
            These were created by collaborating with industry leading insurance companies in these sectors.
            The platform had to automate functions such as accounting, billing, policy document generation, and payments.
            A configuration management system had to be built to allow generation of connectors to talk to legacy systems from partner insurance providers.
        `,
        image:
            'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    },
    {
        superTitle: 'CI & CD, Release Management, DevOps',
        title: 'CI and CD pipelines for a leading e-commerce company to support SAAS and enterprise releases',
        description: `
            The customer wanted to build a release management pipeline that allowed them to test, build,
            and deploy their solution as a white-labelled offering to their customers.
            They also wanted the pipeline to support enterprise deployments of specific versions,
            these were deployed on premise or as an independent cloud deployment.
            Enterprise customers could request for features to either be built or added to a version they purchased.
        `,
        image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    },
    {
        superTitle: 'Publishing, Subscription, Encryption',
        title: 'Subscription platform for a leading market research publishing group',
        description: `
            The customer wanted to build a subscription platform. Users could subscribe to different market research reports.
            The reports can be viewed via the web application and apple newsstand. Security was the top most priority as login credentials,
            and reports could not be shared.
        `,
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    },
    {
        superTitle: 'OCR, Fullstack, Machine Learning',
        title: 'A GST invoice financing platform for SMEs and MSMEs',
        description: `
            The customer wanted to build a first of its kind invoice financing platform for SMEs and MSMEs.
            Users could register with their GST details and share invoices that have been approved for income tax credit
            to lenders and other marketplaces. User's past financial information would be collected by integrating
            with account aggregators with the user's consent. Users could view loan offers from multiple lenders and
            select the one that is most apt.
        `,
        image:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    },
]

const articlesCardsGridStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        borderRadius: 10,

        '&:hover': {
            transform: 'scale(1.01)',
            // boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
    description: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 400,
    },

    image: {
        borderRadius: 20,
    },
}))

export default function ArticlesCardsGrid() {
    const { classes } = articlesCardsGridStyles()

    const cards = mockdata.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <ArticleCard {...article}/>
        </Card>
    ))

    return (
        <SectionWrapper>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </SectionWrapper>
    )
}

interface ArticleCardProps {
    superTitle: string
    title: string
    description: string
    image: any
}
function ArticleCard(props: ArticleCardProps) {
    const { classes } = articlesCardsGridStyles()
    const description: string = props.description.substring(0, 220) + "..."

    return (
        <Card key={props.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={props.image} alt='img' className={classes.image} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {props.superTitle}
            </Text>
            <Text className={classes.title} mt={5}>
                {props.title}
            </Text>
            <Text color='dimmed' className={classes.description} mt={5}>
                {description}
            </Text>
        </Card>
    )
}