import styled from 'styled-components';

// Colors
export const primaryColor = "#B0D400";
export const secondaryColor = "#000";
export const primaryBackgroundColor = "#fafafa";
export const inputTextBackgroundColor = "#fff";
export const lightColor = "#F2F2F2";
export const darkColor = "#243b55";


// Font sizes
export const primaryFontSize = "17px";
export const mainTitleFontSize = "34px";

// Containers
// Screen name + Container
export const MainContainer = styled.View`
  flex: 1;
  padding: 20px;
  background: ${lightColor};
`;

// Gener¡c components
export const ScreenTitleLabel = styled.Text`
    font-size: 30px;
    text-align: center;
`;

export const CtaButtonView = styled.View`
    padding: 10px;
    box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
    height: 48px;
    width: 90%;
    border-radius: 3px;
    background: ${primaryColor};
    align-items: center;
    margin: 30px 0;
`;

export const CtaTextView = styled.Text`
    color: white;
    font-size: 20px;
    width: 100%;
    height: 44px;
    text-align: center;
    padding-top: 0;
    font-weight: bold;
    line-height: 32px;
    font-weight: 400;
`;

// Search - Input components
export const GenericInput = styled.TextInput`
  background: ${inputTextBackgroundColor};
  height: 44px;
  width: 90%;
  margin: 6px 5% 6px 5%;
  border-radius: 3px;
  padding-left: 20px;
  font-size: 16px;
  color: ${secondaryColor};
  text-transform: uppercase;
  border: 1px solid #A1A6AC;
`;

// Containers
export const SearchContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 30px;
  padding: 50px 0;
`;