define(['./components/hello',
        './components/hi',
        './components/search',
        './components/button',
        './components/buttonToolbar'], function(Hello, Hi, Search, Button, ButtonToolbar) {
  return {
    'Hello': Hello,
    'Hi': Hi,
    'Search': Search,
    'Button': Button,
    'ButtonToolbar': ButtonToolbar
  };
});
