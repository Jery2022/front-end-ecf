import React from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import Landing from '../Landing/Landing';

const ErrorDiv = styled.div`
  #error-page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <main>
        <article>
          <Landing />
          <ErrorDiv id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </ErrorDiv>
        </article>
      </main>
    </>
  );
}
