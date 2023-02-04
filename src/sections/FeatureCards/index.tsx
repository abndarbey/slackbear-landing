import {
    Text,
    Card,
    SimpleGrid,
} from '@mantine/core'
import { IconGauge, IconUser, IconCookie } from '@tabler/icons'
import { InfoSection } from 'components/SectionCard'
import { SectionHeader } from 'components/SectionHeader'
import { featureCardsStyles } from './styles'
import { FeatureProps } from 'types/types'
import { useRouter } from 'next/router'

const mockdata = [
    {
        title: 'Extreme performance',
        description:
            'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
        icon: IconGauge,
    },
    {
        title: 'Privacy focused',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        icon: IconUser,
    },
    {
        title: 'No third parties',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconCookie,
    },
]

interface FeatureCardProps {
    columns: number
    superTitle?: string
    title: string
    description?: string
    cardData: FeatureProps[]
}

export default function FeaturesCards(props: FeatureCardProps) {
    const { classes, theme } = featureCardsStyles()
    const router = useRouter()

    const features = props.cardData.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
            <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
            <Text
                size="lg" weight={500} mt="md"
                className={classes.cardTitle}
                onClick={(e: any) => router.push(feature.link!)}
            >
                {feature.title}
            </Text>
            <Text size="sm" color="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ))
    
    return (
        <InfoSection>
            <SectionHeader
                superTitle={props.superTitle}
                title={props.title}
                description={props.description}
            />
            <SimpleGrid
                cols={props.columns}
                spacing="xl" mt={50}
                breakpoints={[{ maxWidth: 'md', cols: 1 }]}
            >
                {features}
            </SimpleGrid>
        </InfoSection>
    )
}