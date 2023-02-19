import Topbar from 'components/Topbar'
import { ReactNode } from 'react'
import { layoutStyles } from './styles'

interface ILayoutProps {
    children: ReactNode
}

export function LandingLayout(props: ILayoutProps) {
    const { classes } = layoutStyles()

    return (
        <div className={classes.container}>
            <nav className={classes.topbar}>
                <Topbar />
            </nav>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    )
}
