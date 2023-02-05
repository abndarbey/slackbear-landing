import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import Footer from 'components/Footer'

import CallToAction from 'sections/CallToAction'
import ArticlesCardsGrid from 'sections/ArticlesCardsGrid'

import { caseStudiesHero, homeCaseStudiesData } from 'data/caseStudiesData/index'

export default function CaseStudies() {
    return (
        <Fragment>
            <PageTitle title='Case Studies' />
            <HeroHeader {...caseStudiesHero} />
            <ArticlesCardsGrid {...homeCaseStudiesData} showDescription />
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
