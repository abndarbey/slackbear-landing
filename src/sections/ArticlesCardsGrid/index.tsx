import { SimpleGrid, Card, Image, Text, AspectRatio } from '@mantine/core'
import SectionHeader from 'components/SectionHeader'
import SectionWrapper from 'components/SectionWrapper'
import { ArticleCardProps } from 'types/types'
import { articlesData } from './data'
import { articlesCardsGridStyles } from './styles'

interface ArticleCardsGridProps {
    columns: number
    cardLimit: number
    showSectionHeader?: {
        superTitle?: string
        title: string
        description: string
    }
    showDescription?: boolean
    cardData: ArticleCardProps[]

}

export default function ArticleCardsGrid(props: ArticleCardsGridProps) {
    const cards = props.cardData.slice(0, props.cardLimit).map((article, key) => (
        <ArticleCard key={key} {...article} showDescription={props.showDescription} />
    ))

    return (
        <SectionWrapper>
            {props.showSectionHeader &&
                <SectionHeader
                    superTitle={props.showSectionHeader.superTitle}
                    title={props.showSectionHeader.title}
                    description={props.showSectionHeader.description}
                />
            }
            <SimpleGrid cols={props.columns} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </SectionWrapper>
    )
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
            {props.showDescription &&
                <Text color='dimmed' className={classes.description} mt={5}>
                    {description}
                </Text>
            }
        </Card>
    )
}