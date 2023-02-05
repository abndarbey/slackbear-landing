import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import FeaturesCards from 'sections/FeatureCards'
import Footer from 'components/Footer'

import { portfolioHero } from 'data/portfolioData/index'
import CallToAction from 'sections/CallToAction'
import ArticleCardList from 'sections/ArticelCardsList'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Portfolio' />
            <HeroHeader {...portfolioHero} />
            <ArticleCardList />
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
