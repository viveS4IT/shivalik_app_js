import React, { useState, useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useParams } from 'react-router-dom';
import { getPropertyBySlug  } from '../api';

const Product_Details = () => {
    const { slug } = useParams();
    const [propertyDetails, setPropertyDetails] = useState(null);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const data = await getPropertyBySlug(slug);
                console.log("data", data);
                setPropertyDetails(data);
            } catch (error) {
                console.error('Error fetching property details:', error);
            }
        };

        fetchPropertyDetails();
    }, [slug]);

    return (
        <div>
            <Navbar />
            <PageHeader headertitle="Product Details" customclass="mb-0" />
            {propertyDetails && <ProductDetails property={propertyDetails} />}
            <CallToActionV1 />
            <Footer />
        </div>
    );
}

export default Product_Details;
