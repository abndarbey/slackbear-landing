import { createStyles } from "@mantine/core"

export const featuresGrid2Styles = createStyles((theme) => ({
    item: {
        display: 'flex',
    },

    itemWrapper: {
        marginLeft: theme.spacing.xl,
    },

    itemIcon: {
        padding: theme.spacing.xs,
        marginRight: theme.spacing.md,
    },

    itemTitle: {
        marginBottom: theme.spacing.sm,
    },
}))