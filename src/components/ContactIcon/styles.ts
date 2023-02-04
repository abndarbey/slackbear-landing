import { createStyles } from "@mantine/core"

export type ContactIconVariant = 'white' | 'gradient'

interface ContactIconStyles {
    variant: ContactIconVariant;
}

export const contactIconStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage: variant === 'gradient'
            ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
                theme.colors[theme.primaryColor][6]
            } 100%)`
            : 'none',
        backgroundColor: 'transparent',
    },

    title: {
        color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: theme.colorScheme === 'dark' ? theme.white :  theme.colors.dark[6],
    },
}))