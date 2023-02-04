import {
    TextInput,
    Paper,
    Button,
    Textarea,
} from '@mantine/core'

export default function ContactForm() {
    return (
        <Paper withBorder shadow="md" p={30} radius="md">
            <TextInput label="Name" placeholder="Your Name" required />
            <TextInput label="Email" placeholder="Your Email" required mt="md" />
            <TextInput label="Company Name" placeholder="Your Company Name (Optional)" mt="md" />
            <Textarea label="Message" placeholder="Tell us more about you project" mt="md" />
            <Button fullWidth mt="xl">Submit</Button>
        </Paper>
    )
}