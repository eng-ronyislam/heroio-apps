import React from 'react';
import AppCard from '../AppCard/AppCard';

const TrendingApps = ({ trandingApps }) => {
    return (
            <div className=' container px-2 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {trandingApps.map(app => (
                <AppCard key={app.id} app={app}></AppCard>
            ))}
        </div>
    );
};

export default TrendingApps;