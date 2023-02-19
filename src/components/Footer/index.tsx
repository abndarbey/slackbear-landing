import { Anchor, Group, ActionIcon, Container, Text } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons'
import Logo from 'components/Logo'
import { footerStyles } from './styles'
import { footerLinks } from './links'

export default function Footer() {
    const { classes } = footerStyles()
    const items = footerLinks.map((link) => (
        <Anchor<'a'>
            color="dimmed"
            key={link.label}
            href={link.link}
            sx={{ lineHeight: 1 }}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ))

    return (
        <div className={classes.footer}>
            <Container size="lg" className={classes.inner}>
                <Logo />
                {/* <Group className={classes.links}>{items}</Group> */}
                <Text color="dimmed" size="sm">
                    &copy; {(new Date().getFullYear())} Slackbear Communications. All rights reserved.
                </Text>
                <Group spacing="xs" position="right" noWrap>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    )
}