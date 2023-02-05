import { ButtonVariant } from "@mantine/core"
import { TablerIcon } from "@tabler/icons"
import { ReactNode } from "react"

export type PageProps = {
    title?: string
    code?: any
}

export type ButtonProps = {
    name: string
    link: string
    icon?: TablerIcon
    color?: string
    variant?: ButtonVariant
}

export type FeatureProps = {
    icon: TablerIcon
    title: string
    description: string
    link?: string
    externalLink?: boolean
}

export type ArticleCardProps = {
    superTitle: string
    title: string
    description: string
    image: any
    showDescription?: boolean
}