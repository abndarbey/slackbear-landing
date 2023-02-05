import { createStyles } from "@mantine/core"

export const articleCardListStyles = createStyles((theme) => ({
    card: {
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
    },

    title: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
    },

    body: {
        padding: theme.spacing.md,
    },
}))