---
title: Upcoming changes
description: Updates and deprecations coming in the future and how to prepare for them.
---

# Upcoming changes

Updates and deprecations coming in the future and how to prepare for them.

<hr>

### 1. Time-picker feature for the Datepicker component

I'm working on adding a time picker to the Datepicker component, probably that feature will be released as a new optional setting that shouldn't conflict with the current version but there is a possibility that may affect the way the component is used.

### 2. Dialog component

I'm officially working in a new Dialog component inspired in the [Sweetalert library](https://sweetalert2.github.io/) I expect to have it ready during this month depending on the amount of work I have.

### 3. More components on the way

I want to add a couple of more components. I'm currently considering toast notifications, file input/manager, an autocomplete, a carousel, and probably more, still no special priority.

## Plans for the upcoming v2.x

This version will be mostly focused on clean the code and make the components even more flexible:

The main features will be:

- Install only the components you need for smaller bundle size
- Custom name for components
- And my favorite so far: the ability to install the same component multiple times with different default settings and name
 
Example of the coming up config file syntax. (The syntax probably will change for the final version)

```js
{
  '  
  //...
  't-title': {
    component: TTag,
     props: {
       tagName: 'h1',
       classes: 'font-5xl font-semibold'
     }
   },
  't-subtitle': {
    component: TTag,
    props: {
      tagName: 'h2',
      classes: 'font-3xl font-semibold'
    }
  },
  't-timepicker': {
    component: TDatepicker,
    props: {
      time: true,
      format: 'H:i:S',
      userFormat: 'H:i:S',
    }
  },
  //...
}
```
   
Use your custom tag:

```html
<!-- After: <t-tag tagName="h1">Title</t-h1> -->
<t-title>Title</t-title>

<!-- After: <t-tag tagName="h2">Subtitle</t-h1> -->
<t-subtitle>Subtitle</t-subtitle>

<!-- After: <t-datepicker :time="true" format="H:i:S" userFormat="H:i:S" /> -->
<t-timepicker  />
```


## Plans for version 3.x

I have big plans for the next version of this library that includes:

- New branding (website, logo, name, etc)
- Rebuilt for Vue 3
- More Typescript improvements
- No dependencies
- More accessibility features
- Stronger test coverage
- Strongly considering make a sibling library for React 
- Sponsorware premium components that may help me to maintain this project [more about the Sponsorware model →](https://calebporzio.com/sponsorware)

