import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import FeaturesCards from 'sections/FeatureCards'
import Footer from 'components/Footer'

import { caseStudiesHero } from 'data/caseStudiesData/index'
import CallToAction from 'sections/CallToAction'
import ArticlesCardsGrid from 'sections/ArticlesCardsGrid'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Case Studies' />
            <HeroHeader {...caseStudiesHero} />
            <ArticlesCardsGrid />
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
