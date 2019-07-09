import React from 'react';
import { CoverTitle, CoverSubTitle, BackPicture } from '../elements/index';
import { Link } from 'react-router-dom';

const CoverPage = () => {
    return (
        <BackPicture>
            <CoverTitle>Emma Barash</CoverTitle>
           <Link to='/main' style={{color: 'navajowhite', textDecoration: 'none'}}><CoverSubTitle>portfolio ={'>'}</CoverSubTitle></Link>
        </BackPicture>
    );
};

export default CoverPage;