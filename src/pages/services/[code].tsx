import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageTitle from 'components/PageTitle'
import HeroHeader from 'sections/HeroHeader'
import Footer from 'components/Footer'
import CallToAction from 'sections/CallToAction'
import PageLoader from 'components/PageLoader'
import FeaturesGrid2 from 'sections/FeaturesGrid2'
import {
    engineeringService,
    productDesignService,
    projectManagementService,
    staffAugmentationService,
    testingService,
    trainingService,
} from 'data/servicesData/index'
import Error404 from 'pages/404'

export default function Services() {
    const { query, isReady } = useRouter()
    if (!isReady) {
        return <PageLoader />
    }

    const code: any = query.code
    const title: string = code + ' ' + 'Service'
    let headerData: any = {}
    if (code === 'engineering') {
        headerData = engineeringService
    }
    else if (code === 'product-design') {
        headerData = productDesignService
    }
    else if (code === 'project-management') {
        headerData = projectManagementService
    }
    else if (code === 'staff-augmentation') {
        headerData = staffAugmentationService
    }
    else if (code === 'testing') {
        headerData = testingService
    }
    else if (code === 'training') {
        headerData = trainingService
    } else {
        return <Error404 />
    }
    
    return (
        <Fragment>
            <PageTitle title={title} />
            <HeroHeader {...headerData} />
            <FeaturesGrid2 {...headerData} />
            {/* <FeaturesCards {...serviceFeatureCards} /> */}
            <CallToAction />
            <Footer />
        </Fragment>
    )
}
