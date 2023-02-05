import { Text, ThemeIcon, SimpleGrid, Image } from '@mantine/core'
import SectionWrapper from 'components/SectionWrapper'
import { featuresGrid2Styles } from './styles'

interface FeaturesGrid2CardProps {
    title: string
    description: string
    icon: any
}

interface FeaturresGrid2Props {
    columns: number
    image: any
    cardData: FeaturesGrid2CardProps[]
}

export default function FeaturesGrid2(props: FeaturresGrid2Props) {
    const { classes, theme } = featuresGrid2Styles()

    const items = props.cardData.map((item, key) => (
        <div className={classes.item} key={key}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={80} radius="md">
                {/* <Image src={props.image} alt='img' /> */}
                <item.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
            </ThemeIcon>

            <div className={classes.itemWrapper}>
                <Text weight={700} size="lg" className={classes.itemTitle}>
                    {item.title}
                </Text>
                <Text color="dimmed">{item.description}</Text>
            </div>
        </div>
    ))

    return (
        <SectionWrapper size="md">
            <SimpleGrid
                cols={props.columns}
                spacing={80}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
            >
                {items}
            </SimpleGrid>
        </SectionWrapper>
    )
}