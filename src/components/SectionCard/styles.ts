import { createStyles } from "@mantine/core"

export const sectionCardStyles = createStyles((theme) => ({
    heroSectionWrapper: {
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#FAFAFA' // theme.white,
    },

    infoSectionWrapper: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl,
    },
}))