import { Fragment } from 'react'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import FeaturesCards from 'sections/FeatureCards'
import Footer from 'components/Footer'

import { solutionsHero, solutionsFeatureCards } from 'data/solutionsData'
import CallToAction from 'sections/CallToAction'

export default function Home() {
    return (
        <Fragment>
            <PageTitle title='Solutions' />
            <HeroHeader {...solutionsHero} />
            <FeaturesCards {...solutionsFeatureCards} />
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
