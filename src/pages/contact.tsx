import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import Footer from 'components/Footer'

import { contactHero } from 'data/contactpage'
import ContactSection from 'sections/ContactSection'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Contact Us' />
            <HeroHeader {...contactHero} />
            <ContactSection />
            <Footer />
        </Fragment>
    )
}
