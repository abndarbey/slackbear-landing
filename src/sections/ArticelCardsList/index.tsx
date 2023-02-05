import { createStyles, Card, Image, Avatar, Text, Group } from '@mantine/core'
import SectionWrapper from 'components/SectionWrapper'
import { articelData } from './data'
import { articleCardListStyles } from './styles'

interface ArticleCardListProps {
    image: string
    category: string
    title: string
    date: string
    author: {
        name: string
        avatar: string
    }
}

export default function ArticleCardList() {
    const { classes } = articleCardListStyles()
    let props = articelData
    
    return (
        <SectionWrapper>
            <Card withBorder radius="md" shadow="md" p={0} className={classes.card}>
                <Group>
                    <Image src={props.image} width="30%" alt='img' />
                    <div className={classes.body}>
                        <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                            {props.category}
                        </Text>
                        <Text className={classes.title} mt="xs" mb="md">
                            {props.title}
                        </Text>
                    </div>
                </Group>
            </Card>
        </SectionWrapper>
    )
}