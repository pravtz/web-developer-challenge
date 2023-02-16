import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
  html, body, #__next {
    height: 100%;

  }


:root, body { 
  --primary: #71bb00;
  --secundary: #9f9f9f;
  --danger: #d65923;
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
  --spacing7: 52px;
  --spacing8: 56px;

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


`

export default GlobalStyled