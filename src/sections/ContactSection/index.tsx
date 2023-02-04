import { SimpleGrid, Box, Text } from '@mantine/core'
import ContactIconsList from 'components/ContactIcon'
import { InfoSection } from 'components/SectionCard'
import { SectionHeader } from 'components/SectionHeader'
import ContactForm from './ContactForm'
import { contactDetailsStyles } from './styles'

export default function ContactDetails() {
    const { classes } = contactDetailsStyles()
    return (
        <InfoSection>
            <SectionHeader
                title="Let's build awesome digital products together"
                description={`However ambitious, we'd love to design and build your next big idea or work on an existing one.`}
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]} className={classes.inner}>
                <Box className={classes.details}>
                    <ContactIconsList />
                </Box>
                <ContactForm />
            </SimpleGrid>
        </InfoSection>
    )
}