import { ReactNode } from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import GlobalTheme from './GlobalTheme'

interface ThemeProviderProps {
    children: ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    })
    
    const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    
    useHotkeys([['mod+J', () => toggleColorScheme()]])
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme,
                    colors: {
                        brand: ['#99d7e7', '#80cde2', '#66c2dc', '#4db8d6', '#33aed0', '#19a4ca', '#009ac4', '#008bb0', '#007b9d', '#006c89'],
                        pink: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
                        oceanBlue: ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
                    },
                    primaryColor: 'brand',
                }}
            >
                <GlobalTheme />
                {props.children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
