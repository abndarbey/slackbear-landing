import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroBanner from 'sections/HeroBanner'
import FeaturesGrid from 'sections/FeaturesGrid'
import FeaturesCards from 'sections/FeatureCards'
import ArticlesCardsGrid from 'sections/ArticlesCardsGrid'
import CallToAction from 'sections/CallToAction'
import Footer from 'components/Footer'

import {
    homeHero,
    homeFeatureGrid,
    homeFeatureCards,
    homeCaseStudiesData,
} from 'data/homepageData'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Home' />
            <HeroBanner {...homeHero} />
            <FeaturesGrid {...homeFeatureGrid} />
            <FeaturesCards {...homeFeatureCards} />
            <ArticlesCardsGrid {...homeCaseStudiesData} />
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
