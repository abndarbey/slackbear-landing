import { Container, Text, Button, Group } from '@mantine/core'
import { GithubIcon } from '@mantine/ds'
import { heroTitleStyles } from "./styles"

export default function HeroTitle() {
    const { classes } = heroTitleStyles()

    return (
        <div className={classes.wrapper}>
            <Container className={classes.inner}>
                <h1 className={classes.title}>
                    Small Teams With a {' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        Large
                    </Text>{' '} Impact
                </h1>

                <Text className={classes.description} color="dimmed">
                    Get digital products, engineered & designed to meet your business needs.
                </Text>

                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        Get started
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/mantinedev/mantine"
                        size="xl"
                        variant="default"
                        className={classes.control}
                        leftIcon={<GithubIcon size={20} />}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    )
}