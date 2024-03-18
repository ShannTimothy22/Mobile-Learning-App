import React from 'react';

import { StyledContainer, InnerContainer, PageLogo, PageTitle, PageSubtitle } from '../components/styles';

const Login = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('../assets/image/Logo.png')} />
        <PageTitle>Hello !</PageTitle>
        <PageSubtitle>Best learning app for your learning experience</PageSubtitle>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
