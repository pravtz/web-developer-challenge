import { render } from '@testing-library/react';
import { MyThemeProvider } from './myThemeProvider';


export const renderTheme = (children: any) => {
    return render(<MyThemeProvider>{children}</MyThemeProvider>);
};