import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        An independent and self-motivated person with superior attention to detail, and therefore effective at completing tasks with minimal supervision.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/khairulnaqibhz/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;