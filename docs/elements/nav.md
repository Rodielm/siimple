---
title: "Navigation"
description: "Navigation components that includes menus, tabs and pills"
--- 

<style>
.siimple-nav:first-child {
    margin-bottom: 0px !important;
}
</style>

A **navigation** component is a collection of vertical and horizontal navigation links. You have an example of a vertical navigation element displayed on the left side of this documentation site.

You can build a navigation component adding a `siimple-nav` class to a wrapper `<div>` or `<nav>` element, and usually contains a list of navigation items with the class `siimple-nav-item`.

```html preview="true"
<div class="siimple-nav">
    <a class="siimple-nav-item">Link 1</a>
    <a class="siimple-nav-item">Link 2</a>
    <a class="siimple-nav-item">Link 3</a>
</div>
```

#### Active navigation item

Add `siimple-nav-item--active` to an item of the navigation to mark it as active.

```html preview="true"
<div class="siimple-nav">
    <a class="siimple-nav-item">Link 1</a>
    <a class="siimple-nav-item siimple-nav-item--active">Link 2</a>
    <a class="siimple-nav-item">Link 3</a>
</div>
```

#### Vertical navigation

You can switch your navigation element to a vertically aligned navigation adding `siimple-nav--vertical` to the wrapper navigation component.

```html
<div class="siimple-nav siimple-nav--vertical">
    . . .
</div>
```

#### Tabs

You can style your navigation component with a modern tabbed interface, just adding the `siimple-nav--tabs` class to the wrapper navigation component. Note that tabs items will fill the width of the wrapper element.

```html preview="true"
<div class="siimple-nav siimple-nav--tabs">
    <a class="siimple-nav-item">Link 1</a>
    <a class="siimple-nav-item siimple-nav-item--active">Link 2</a>
    <a class="siimple-nav-item">Link 3</a>
</div>
```

#### Pills

Alternatively you can style your navigation component with a pilled interface adding the `siimple-nav--pills` class to the wrapper navigation.

```html preview="true"
<div class="siimple-nav siimple-nav--pills">
    <a class="siimple-nav-item">Link 1</a>
    <a class="siimple-nav-item siimple-nav-item--active">Link 2</a>
    <a class="siimple-nav-item">Link 3</a>
</div>
```

#### Fill items

You can force the navigation items to proportionately fill all the available width of the wrapper navigation component by adding the `siiple-nav--fill` class. This will only take effect on horizontally navigation components.

```html preview="true"
<div class="siimple-nav siimple-nav--pills siimple-nav--fill">
    <a class="siimple-nav-item">Link 1</a>
    <a class="siimple-nav-item siimple-nav-item--active">Link 2</a>
    <a class="siimple-nav-item">Link 3</a>
</div>
```

#### Group and divider

You can display a group label to your navigation items adding a new `<div>` element with the class `siimple-nav-group`, or display a divider rule adding a `<div>` element with the class `siimple-nav-divider`.

Note that both elements will be only visible on basic vertically navigation. On horizontal, tabs and pills navigation will be hidden.

```html preview="true"
<div class="siimple-nav siimple-nav--vertical">
    <div class="siimple-nav-group">Group label</div>
    <a class="siimple-nav-item">Link 1</a>
    <a class="siimple-nav-item siimple-nav-item--active">Link 2</a>
    <a class="siimple-nav-item">Link 3</a>
</div>
```



