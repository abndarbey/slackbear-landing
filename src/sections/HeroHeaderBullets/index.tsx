import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import image from 'assets/images/hero-banner.svg'
import { heroHeaderStyles } from './styles'

const description: string = `
    Let's talk. We would love to understand your product and vision and help you with the experience we have gained by building multiple digital products.
`

export default function HeroHeader() {
    const { classes } = heroHeaderStyles()
    return (
        <div>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Contact Us
                        </Title>
                        <Text color="dimmed" mt="md">{description}</Text>
        
                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck size={12} stroke={1.5} />
                            </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>TypeScript based</b> – build type safe applications, all components and hooks
                                export types
                            </List.Item>
                            <List.Item>
                                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                                any project
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>
                        </List>
        
                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Get started
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Source code
                            </Button>
                        </Group>
                    </div>
                    <Image src={image.src} className={classes.image} alt="img" />
                </div>
            </Container>
        </div>
    )
}