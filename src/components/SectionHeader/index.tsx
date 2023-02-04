import { Fragment } from 'react'
import {Title, Text } from '@mantine/core'
import { sectionTitleStyles } from './styles'

interface SectionHeaderProps {
    title: string
    description?: string
    superTitle?: string
}
export function SectionHeader(props: SectionHeaderProps) {
    const { classes } = sectionTitleStyles()
    
    return (
        <Fragment>
            {props.superTitle &&
                <Text className={classes.supTitle}>{props.superTitle}</Text>
            }
    
            <Title order={2} className={classes.title} align="center" mt="sm">
                {props.title}
            </Title>
    
            {props.description &&
                <Text color="dimmed" className={classes.description} align="center" mt="md">
                    {props.description}
                </Text>
            }
        </Fragment>
    )
}