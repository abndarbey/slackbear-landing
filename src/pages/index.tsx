import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroBanner from 'sections/HeroBanner'
import FeaturesGrid from 'sections/FeaturesGrid'
import FeaturesCards from 'sections/FeatureCards'
import CallToAction from 'sections/CallToAction'
import Footer from 'components/Footer'

import { homeHero, homeFeatureGrid, homeFeatureCards } from 'data/homepage'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Home' />
            <HeroBanner {...homeHero} />
            <FeaturesGrid {...homeFeatureGrid} />
            <FeaturesCards {...homeFeatureCards} />
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
