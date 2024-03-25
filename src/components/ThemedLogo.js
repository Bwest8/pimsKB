import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ThemedLogo = () => (
  <ThemedImage
    alt="PDE Logo"
    sources={{
      light: useBaseUrl('img/pde-blue.png'),
      dark: useBaseUrl('img/pde-white.png'),
    }}
  />
);

export default ThemedLogo;