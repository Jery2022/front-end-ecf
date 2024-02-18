import styled from 'styled-components';
import HeroImage from '../../utils/HeroImage/HeroImage';

export default function Landing() {
  const LandingDiv = styled.div`
    .Landing {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: yellow;
      border: 1px solid red;
    }
  `;
  return (
    <>
      <LandingDiv>
        <div className="Landing">
          <HeroImage />
        </div>
      </LandingDiv>
    </>
  );
}
