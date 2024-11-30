import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CertificateData from '../Data/cerificateData/CerificateData'


const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};


const CustomSlider = () => {
    
    const items = CertificateData.map((certificate) => (
        <div className="item" key={certificate.id} data-value={certificate.id}>
          <img 
            src={certificate.image} 
            alt='' 
            style={{ width: '100%', height: '400px', objectFit: 'contain' }}
          />
          <h3>{certificate.title}</h3>
        </div>
      ));
    return(
    <>
    <AliceCarousel
        mouseTracking
        disableButtonsControls
        disableDotsControls
        disableSlideInfo
        autoPlay
        autoPlayInterval={3000}
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    
    </>
);

}
export default CustomSlider;