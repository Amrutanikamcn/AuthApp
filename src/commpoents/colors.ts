// Define the theme structure
export interface Theme {
    background: string;
    textColor: string;
    textColorSecondary:string
    borderColor:string
    inputBackground:string
    buttonBackground:string
    buttonTextColor:string
    linkColor:string
  }

  
  // Default theme values
export const defaultTheme: Theme = {
    background: 'white',
    textColor: 'black',
    textColorSecondary:'#555',
    borderColor:'#DDD',
    inputBackground:'#fff',
    buttonBackground:'#007BFF',
    buttonTextColor:'#fff',
    linkColor:'#007BFF'
  };