import React, { useState } from 'react'
import NavigationBar from './NavigationBar';
import SingleQuestion from './SingleQuestion';
import PictureQuestion from './PictureQuestion';
import ProductQuestion from './ProductQuestion';
const HomePage = () => {
    const [websiteInfo, setWebsiteInfo] = useState({ questionNumber: 1, gallery: [], products: [] });

    const infoUploaded = () => {
        console.log(websiteInfo);
    }

    return (
        <div className="homePage">
            <NavigationBar />
            { websiteInfo.questionNumber === 1 && <SingleQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="What will you name your website?" placeholder="Ex. Desserts Galore" resultName="site_name" /> }
            { websiteInfo.questionNumber === 2 && <SingleQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="What will your website extension be?" placeholder="Ex. dessertsGalore" resultName="url_extension" /> }
            { websiteInfo.questionNumber === 3 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you will use as the main image on the homepage of your website" resultName="main_photo" /> }
            { websiteInfo.questionNumber === 4 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture first photo in your gallery (1/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 5 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture second photo in your gallery (2/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 6 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture third photo in your gallery (3/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 7 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture fourth photo in your gallery (4/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 8 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture fifth photo in your gallery (5/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 9 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture sixth photo in your gallery (6/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 10 && <ProductQuestion setWebsiteInfo={setWebsiteInfo} question="Upload information about one of the products you wish to sell" resultName="products" infoUploaded={infoUploaded} /> }
        </div>
    )
}

export default HomePage