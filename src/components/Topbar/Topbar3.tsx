import { useState } from 'react'
import { Header, Container, Group, Burger, Paper, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Logo from 'components/Logo'
import { topbarLinks } from './links'
import ThemeToggler from 'components/ThemeToggler'
import { topbar3Styles } from './styles'

export default function Topbar() {
    const [opened, { toggle, close }] = useDisclosure(false)
    const [active, setActive] = useState(topbarLinks[0].link)
    const { classes, cx } = topbar3Styles()

    const items = topbarLinks.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                close();
            }}
        >
            {link.label}
        </a>
    ))

    return (
        <Header height={60} className={classes.root}>
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