import { useState } from 'react'
import { Header, Container, Group, Burger, Paper, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Logo from 'components/Logo'
import { topbarLinks } from './links'
import ThemeToggler from 'components/ThemeToggler'
import { topbarStyles, HEADER_HEIGHT } from './styles'
import Link from 'next/link'

export default function Topbar() {
    const [opened, { toggle, close }] = useDisclosure(false)
    const [active, setActive] = useState(topbarLinks[0].link)
    const { classes, cx } = topbarStyles()

    const items = topbarLinks.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(e) => {
                setActive(link.link)
                close()
            }}
        >
            {link.label}
        </Link>
    ))

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Container className={classes.header}>
                <Logo />
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <div className={classes.hiddenMobile}>
                    <ThemeToggler />
                </div>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    )
}