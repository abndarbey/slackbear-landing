import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import Footer from 'components/Footer'

import { aboutHero } from 'data/aboutpageData'
import ContactSection from 'sections/ContactSection'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='About Us' />
            <HeroHeader {...aboutHero} />
            <ContactSection />
            <Footer />
        </Fragment>
    )
}
