import { Title, Text, Button, Container } from '@mantine/core'
import { ButtonProps } from 'types/types'
import { Dots } from 'components/Dots'
import { heroBanner2Styles } from './styles'
import { useRouter } from 'next/router'
import { HeroSection } from 'components/SectionCard'

interface HeroBannerProps {
    title: string
    description?: string
}

export default function HeroBanner2(props: HeroBannerProps) {
    const { classes } = heroBanner2Styles()

    return (
        <HeroSection>
            <div className={classes.inner}>
                <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
                <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

                <div className={classes.inner}>
                    <Title className={classes.title}>
                        {props.title}
                    </Title>

                    <Container p={0} size={600}>
                        <Text size="lg" color="dimmed" className={classes.description}>
                            {props.description}
                        </Text>
                    </Container>

                    <div className={classes.controls}>
                        <Button className={classes.control} size="lg">
                            View Our Work
                        </Button>
                    </div>
                </div>
            </div>
        </HeroSection>
    )
}