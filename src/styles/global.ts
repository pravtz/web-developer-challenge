import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

:root { 
  --primary: #71bb00;
  --secundary: #9f9f9f;
  --danger: #d65923
  --write: #FFFFFF;
  --black: #232323;

  --borderRadiusBox: 3px;
  --borderRadiusInput: 8px;
  --borderRadiusPhoto: 36px;

  --spacing1: 8px;
  --spacing2: 16px;
  --spacing3: 24px;
  --spacing4: 32px;
  --spacing5: 40px;
  --spacing6: 48px;

    --fontSize-xs: 0.75rem;     //12px  
    --fontSize-sm: 0.875rem;    //14px  
    --fontSize-md: 1rem;        //16px  
    --fontSize-lg: 1.125rem;    //18px  
    --fontSize-xl: 1.25rem ;    //20px 
    --fontSize-2xl: 1.5rem ;    //24px  
    --fontSize-3xl: 1.875rem;   //30px  
    --fontSize-4xl: 2.25rem;    //36px  
    --fontSize-5xl: 3rem;       //48px 
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  html, body, #__next {
    height: 100%;

  }
  body {
    font-family: 'Roboto', sans-serif;
  }

`

export default GlobalStyled