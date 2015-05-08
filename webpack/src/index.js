define(['./components/hello',
        './components/hi',
        './components/search',
        './components/button',
        './components/buttonToolbar',
        './components/buttonGroup',
        './components/dropdownButton',
        './components/menuItem',
        './components/splitButton'],
function(Hello, Hi, Search, Button, ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, SplitButton) {
  return {
    Hello: Hello,
    Hi: Hi,
    Search: Search,
    Button: Button,
    ButtonToolbar: ButtonToolbar,
    ButtonGroup: ButtonGroup,
    DropdownButton: DropdownButton,
    MenuItem: MenuItem,
    SplitButton: SplitButton
  };
});
