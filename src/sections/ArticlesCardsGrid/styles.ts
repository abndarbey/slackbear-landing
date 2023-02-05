import { createStyles } from "@mantine/core"

export const articlesCardsGridStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        borderRadius: 10,

        '&:hover': {
            transform: 'scale(1.01)',
            // boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
    description: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 400,
    },

    image: {
        borderRadius: 20,
    },
}))