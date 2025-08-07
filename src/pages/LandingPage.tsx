// 文件位置: src/pages/LandingPage.tsx

import Hero from '../components/whitefire/Hero';
import WhatYouReceive from '../components/whitefire/WhatYouReceive';
import TheProcess from '../components/whitefire/TheProcess';
import Faq from '../components/whitefire/Faq';
import Authorize from '../components/whitefire/Authorize';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <WhatYouReceive />
      <TheProcess />
      <Faq />
      <Authorize />
    </>
  );
};

export default LandingPage;