import { Header, Menu, Group, Center, Burger, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons'
import Logo from 'components/Logo'
import ThemeToggler from 'components/ThemeToggler'
import { useRouter } from 'next/router'
import { topbarLinks } from './links'
import { topbar2Styles } from './styles'

export default function Topbar2() {
    const router = useRouter()
    const [opened, { toggle }] = useDisclosure(false)
    const { classes } = topbar2Styles()

    const items = topbarLinks.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item
                key={item.link}
                onClick={(e: any) => router.push(item.link)}>
                    {item.label}
                </Menu.Item>
        ))

    if (menuItems) {
        return (
            <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
                <Menu.Target>
                    <a
                        href={link.link}
                        className={classes.link}
                        onClick={(e: any) => router.push(link.link)}
                    >
                        <Center>
                            <span className={classes.linkLabel}>{link.label}</span>
                            <IconChevronDown size={12} stroke={1.5} />
                        </Center>
                    </a>
                </Menu.Target>
                <Menu.Dropdown>{menuItems}</Menu.Dropdown>
            </Menu>
        )
    }

    return (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(e: any) => router.push(link.link)}
        >
            {link.label}
        </a>
    )
})

    return (
        <Header height={60}>
            <Container size="lg">
                <div className={classes.inner}>
                    <Logo />
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <ThemeToggler />
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                </div>
            </Container>
        </Header>
    )
}