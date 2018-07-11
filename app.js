// adds bootstrap 4 to the body

// bootstrap css
var boot = document.createElement("link");
boot.setAttribute('href', "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
boot.setAttribute("rel", "stylesheet");
boot.setAttribute("integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm");
boot.setAttribute("crossorigin", "anonymous");
document.body.appendChild(boot)


// bootstrap jquery
var boot = document.createElement("script");
boot.setAttribute('src', "https://code.jquery.com/jquery-3.2.1.slim.min.js");
boot.setAttribute("integrity", "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN");
boot.setAttribute("crossorigin", "anonymous");
document.body.appendChild(boot)

// bootstrap popper.js
var boot = document.createElement("script");
boot.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js");
boot.setAttribute("integrity", "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q");
boot.setAttribute("crossorigin", "anonymous");
document.body.appendChild(boot)


// bootstrap javascript
var boot = document.createElement("script");
boot.setAttribute('src', "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js");
boot.setAttribute("integrity", "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl");
boot.setAttribute("crossorigin", "anonymous");
document.body.appendChild(boot)


// create text to put in index
var person = document.createTextNode("Person.Name");
var age = document.createTextNode("Person.Age");
var page1 = document.createTextNode("Page 1");
var page2 = document.createTextNode("Page 2");
var head1 = document.createTextNode("Header");
var head2 = document.createTextNode("Header");
var subhead = document.createTextNode("Sub Header");
var lorem1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
var lorem2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
var lorem3 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

// creates a row div
var row = document.createElement("div");
row.classList.add("row");
row.classList.add("justify-content-center");


// now we'll have a fluid container
var main = document.getElementById("main");
main.classList.add("container-fluid");

// creates and adds the top element to index
var top = document.createElement("h1");

top.appendChild(person);
row.appendChild(top);
main.appendChild(row);

// non centered row
var row = document.createElement("div");
row.classList.add("row");


// navbar
var nav = document.createElement("nav");
nav.classList.add("nav")

var nav_item1 = document.createElement("a");
nav_item1.classList.add("nav-link");
nav_item1.setAttribute("href", "#");

var nav_item2 = document.createElement("a");
nav_item2.classList.add("nav-link");
nav_item2.setAttribute("href", "#");

var nav_item3 = document.createElement("a");
nav_item3.classList.add("ml-auto");
nav_item3.setAttribute("href", "#");

nav_item1.appendChild(page1);
nav_item2.appendChild(page2);
nav_item3.appendChild(age);

nav.appendChild(nav_item1);
nav.appendChild(nav_item2);
row.appendChild(nav);
row.appendChild(nav_item3);
main.appendChild(row);


// main content
var content = document.createElement("div");
content.classList.add("row");

var left = document.createElement("div");
left.classList.add("col-md-8");

var header1 = document.createElement("h3");
header1.appendChild(head1);
left.appendChild(header1);

var stuffing1 = document.createElement("p");
stuffing1.appendChild(lorem1);
left.appendChild(stuffing1);

var header2 = document.createElement("h3");
header2.appendChild(head2);
left.appendChild(header2);

var stuffing2 = document.createElement("p");
stuffing2.appendChild(lorem2);
left.appendChild(stuffing2);

content.appendChild(left);

var right = document.createElement("div");
right.classList.add("col-md-4");

var header3 = document.createElement("h3");
header3.appendChild(subhead);
right.appendChild(header3);

var stuffing3 = document.createElement("p");
stuffing3.appendChild(lorem3);
right.appendChild(stuffing3);

content.appendChild(right);

main.appendChild(content);
