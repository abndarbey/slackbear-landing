import { Container } from "@mantine/core"
import { ReactNode } from "react"
import { sectionCardStyles } from "./styles"

interface SectionCardProps {
    children: ReactNode
}

export function HeroSection(props: SectionCardProps) {
    const { classes } = sectionCardStyles()
    return (
        <div className={classes.heroSectionWrapper}>
            <Container size="lg">
                {props.children}
            </Container>
        </div>
    )
}

export function InfoSection(props: SectionCardProps) {
    const { classes } = sectionCardStyles()
    return (
        <div className={classes.infoSectionWrapper}>
            <Container size="lg">
                {props.children}
            </Container>
        </div>
    )
}