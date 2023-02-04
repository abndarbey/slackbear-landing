import { Title, Text, Button, Container } from '@mantine/core'
import { useRouter } from 'next/router'
import { ButtonProps } from 'types/types'
import { Dots } from 'components/Dots'
import { heroBannerStyles } from './styles'
import { HeroSection } from 'components/SectionCard'

interface HeroBannerProps {
    titleFragment1: string
    titleHighlight: string
    titleFragment2: string
    description?: string
    button1: ButtonProps
    button2: ButtonProps
}

export default function HeroBanner(props: HeroBannerProps) {
    const { classes } = heroBannerStyles()
    const router = useRouter()

    return (
        <HeroSection>
            <div className={classes.inner}>
                <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
                <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

                <div className={classes.inner}>
                    <Title className={classes.title}>
                        {props.titleFragment1}{' '}
                        <Text component="span" className={classes.highlight} inherit>
                            {props.titleHighlight}
                        </Text>{' '}
                        {props.titleFragment2}
                    </Title>

                    <Container p={0} size={600}>
                        <Text size="lg" color="dimmed" className={classes.description}>
                            {props.description}
                        </Text>
                    </Container>

                    <div className={classes.controls}>
                        <Button className={classes.control} size="lg" variant="default" color="gray">
                            {props.button1.name}
                        </Button>
                        <Button className={classes.control} size="lg" onClick={(e: any) => router.push(props.button2.link)}>
                            {props.button2.name}
                        </Button>
                    </div>
                </div>
            </div>
        </HeroSection>
    )
}