# Prime React and Nextjs FOUC Demo

## Usage

```
npm install
npm run dev
```

On a browser, navigate to http://localhost:3000.  Upon refresh, you can see a flash of unstyled content (FOUC), where the arrows below the datatable headers appear below the header names themselves for a brief second.

You can also see this issue more clearly by opening the inspector, opening the command menu (Command+Shift+P on mac or Control+Shift+P on windows/linux) and disabling javascript (type disable javascript and "Enter").  Upon refresh, the arrow will stay below the header name.

Demo: https://github.com/user-attachments/assets/4aee373d-4ca7-4d12-bf2c-f9919f4fe9ad
