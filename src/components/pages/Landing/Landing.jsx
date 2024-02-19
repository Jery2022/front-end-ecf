import React from 'react';
import styled from 'styled-components';
//import BaseCarousel from '../../utils/Carousels/BaseCarousels';
import HeroImage from '../../utils/HeroImage/HeroImage';

export default function Landing() {
  const LandingDiv = styled.div`
    .Landing {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100vh;
      }
    }
  `;
  return (
    <>
      <article>
        <section>
          <LandingDiv>
            <div>
              <HeroImage />
            </div>
          </LandingDiv>
        </section>
      </article>
    </>
  );
}
