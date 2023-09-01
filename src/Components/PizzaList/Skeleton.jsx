import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="582" cy="527" r="20" />
    <circle cx="418" cy="286" r="18" />
    <circle cx="562" cy="525" r="56" />
    <circle cx="139" cy="126" r="113" />
    <rect x="0" y="261" rx="11" ry="11" width="283" height="27" />
    <rect x="2" y="315" rx="10" ry="10" width="280" height="88" />
    <rect x="239" y="458" rx="0" ry="0" width="0" height="15" />
    <rect x="7" y="426" rx="10" ry="10" width="105" height="32" />
    <rect x="126" y="422" rx="19" ry="19" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
