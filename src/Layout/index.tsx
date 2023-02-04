import { useRouter } from 'next/router'
import Topbar from 'components/Topbar'
import Topbar2 from 'components/Topbar/Topbar2'
import GenericHeader from 'components/GenericHeader'
import { ReactNode } from 'react'
import { layoutStyles } from './styles'

interface ILayoutProps {
    children: ReactNode
}

export function LandingLayout(props: ILayoutProps) {
    const { classes } = layoutStyles()
    const router = useRouter()

    return (
        <div className={classes.container}>
            <nav className={classes.topbar}>
                <Topbar2 />
            </nav>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    )
}

export function ErrorLayout(props: ILayoutProps) {
    return (
        <div>
            <GenericHeader />
            {props.children}
        </div>
    )
}
