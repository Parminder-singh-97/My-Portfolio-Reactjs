import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SkillData from '../../Data/SkillData/SkillsData';


const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 4 },
};


const SkillSlider = () => {
    
    const items = SkillData.map((certificate) => (
        <div className="item" key={certificate.id} data-value={certificate.id}>
          <img 
            src={certificate.img} 
            className=''
            alt='' 
            style={{ width: '100%', height: '50px', objectFit: 'contain'  }}
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
        autoPlayInterval={1000}
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    
    </>
);

}
export default SkillSlider;