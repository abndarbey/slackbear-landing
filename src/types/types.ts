import { TablerIcon } from "@tabler/icons"

export type PageProps = {
    title?: string
    code?: any
}

export type ButtonProps = {
    name: string
    link: string
}

export type FeatureProps = {
    icon: TablerIcon
    title: string
    description: string
    link?: string
    externalLink?: boolean
}