import { ReactNode } from 'react'
import { ButtonStylesParams, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
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
                    components: {
                        Button: {
                            // Subscribe to theme and component params
                            styles: (theme, params: ButtonStylesParams) => ({
                                root: {
                                // height: 80,
                                // padding: '0 30px',
                                // marginLeft: theme.spacing.md,
                                backgroundColor:
                                    params.variant === 'filled'
                                    ? theme.colors[params.color || theme.primaryColor][6]
                                    : undefined,
                                    ":hover": {
                                        backgroundColor: theme.colorScheme === "dark" ? "#fff" : "#000",
                                        color: theme.colorScheme === "dark" ? "#000" : "#fff",
                                        transition: "0.5s all ease",
                                    }
                                },
                            }),
                        },
                    },
                }}
            >
                <GlobalTheme />
                {props.children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
