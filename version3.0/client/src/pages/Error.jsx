import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
     
        <Banner title="404" subtitle="Page Not Found">
          <Link to="/" className="btn-primary">
            Home page
          </Link>
        </Banner>
    
    </div>
  );
}

export default Error;
