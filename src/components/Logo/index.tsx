import Image from 'next/image'
import { createStyles, useMantineColorScheme } from '@mantine/core'
import { useRouter } from 'next/router'

// const logoSvg = require('../../assets/logos/slackbear_dark_logo.svg')
const lightLogo = require('../../assets/logos/slackbear_logo.png')
const darkLogo = require('../../assets/logos/slackbear_logo_dark.png')

const logoStyles = createStyles({
    image: {
        cursor: 'pointer',
    },
})

export default function Logo() {
    const router = useRouter()
    const { classes } = logoStyles()
    const { colorScheme } = useMantineColorScheme()
    return (
        <Image
            className={classes.image}
            width={'100'}
            src={colorScheme === 'dark' ? darkLogo : lightLogo}
            alt="Random unsplash image"
            onClick={(e: any) => router.push('/')}
        />
    )
}