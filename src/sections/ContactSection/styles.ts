import { createStyles } from "@mantine/core"

export const contactDetailsStyles = createStyles((theme) => ({
    inner: {
        alignItems: 'center',
        paddingTop: theme.spacing.xl * 2,
    },

    details: {
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        // backgroundColor: theme.white,
    }
}))