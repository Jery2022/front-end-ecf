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
      height: 100vh;
      /*.My-Button {
        width: 220px;
        height: 50px;
         margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;*/
      }
    }
  `;
  return (
    <>
      <article>
        <section>
          <LandingDiv>
            <div className="Landing">
              <HeroImage />
            </div>
          </LandingDiv>
        </section>
      </article>
    </>
  );
}
