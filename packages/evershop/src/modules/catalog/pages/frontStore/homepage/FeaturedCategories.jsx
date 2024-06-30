import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 page-width">
        <div>
          <h3 className="h4 uppercase mt-4 mb-4">Tour Packages</h3>
          <div className="mb-4">
            <p>
              Explore the world with our exclusive tour packages. Enjoy luxury transportation, guided tours, and unforgettable experiences at the best destinations.
            </p>
          </div>
          <Button url="/tour" title="Explore Tours" variant="primary" />
        </div>
        <div>
          <h3 className="h4 uppercase mt-4 mb-4">Hotel Accommodations</h3>
          <div className="mb-4">
            <p>
              Stay at the finest hotels with our curated selection of luxury accommodations. Enjoy world-class amenities, comfort, and excellent service at every destination.
            </p>
          </div>
          <Button url="/hotel" title="Book Hotels" variant="primary" />
        </div>
        <div>
          <h3 className="h4 uppercase mt-4 mb-4">Professional Tour Guides</h3>
          <div className="mb-4">
            <p>
              Discover new places with our experienced and knowledgeable tour guides. They will ensure you have an enriching and enjoyable travel experience, providing insights and local knowledge.
            </p>
          </div>
          <Button url="/tour-guide" title="Meet Our Guides" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
