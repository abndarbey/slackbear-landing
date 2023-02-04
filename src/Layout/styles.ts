import { createStyles } from '@mantine/core'

export const layoutStyles = createStyles((theme) => {
    return {
        container: {
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateColumns: 'auto',
            gridTemplateAreas: `
                'topbar'
                'content'
                'footer'
            `
        },
        topbar: {
            gridArea: 'topbar',
            backgroundColor: 'yellow',
        },
        content: {
            gridArea: 'content',
            height: '100%',
            width: '100%',
            overflowY: 'scroll',
            padding: 0,
            margin: 0,
        },
        footer: {
            gridArea: 'footer',
            backgroundColor: 'yellow',
        },
    }
})