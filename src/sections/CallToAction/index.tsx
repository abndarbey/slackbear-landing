import { Text, Title, TextInput, Button, Image, Container } from '@mantine/core'
import mailboxImg from 'assets/images/mailbox.svg'
import SectionWrapper from 'components/SectionWrapper'
import { ctaStyles } from './styles'

export default function CallToAction() {
    const { classes } = ctaStyles()
    
    return (
        <SectionWrapper>
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Title className={classes.title}>
                        Drop your email and we will get back yo you.
                    </Title>

                    <div className={classes.controls}>
                        <TextInput
                            placeholder="Your email"
                            classNames={{ input: classes.input, root: classes.inputWrapper }}
                        />
                        <Button className={classes.control}>Submit</Button>
                    </div>
                </div>
                <Image src={mailboxImg.src} className={classes.image} alt="img" />
            </div>
        </SectionWrapper>
    )
}