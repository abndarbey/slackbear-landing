import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import FeaturesCards from 'sections/FeatureCards'
import Footer from 'components/Footer'

import { serviceHero, serviceFeatureCards } from 'data/servicepage'
import CallToAction from 'sections/CallToAction'
import HeroBanner2 from 'sections/HeroBanner2'

export default function Services() {
    return (
        <Fragment>
            <PageTitle title='Services' />
            <HeroHeader {...serviceHero} />
            <FeaturesCards {...serviceFeatureCards} />
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
