---
title: "Radio button"
description: "The redesigned radio button element"
keywords: "radio,button,form,input"
---

Add a `siimple-radio` class to an `<input type="radio">` element to style it as a radio. 
By default, the radio will be displayed unchecked, but you can add a `checked` attribute to the `<input>` element to display the radio as checked.

```html preview="true"
<div class="siimple--mb-1">
    <input type="radio" id="radio0" class="siimple-radio">
    <label class="siimple-label" for="radio0">Default radio</label>
</div>
<div class="siimple--mb-0">
    <input type="radio" id="radio1" class="siimple-radio" checked >
    <label class="siimple-label" for="radio1">Active radio</label>
</div>
```

#### Disabled radio

Add a `disabled` attribute to the `<input>` element to display the radio as disabled.

```html preview="true"
<input type="radio" id="radio2" class="siimple-radio" checked disabled />
<label class="siimple-label" for="radio2">Disabled radio</label>
```


#### Colored radio

Use `siimple-radio--error`, `siimple-radio--warning` and `siimple-radio--success` to change the color of the radio element.

```html preview="true"
<input type="radio" id="radio3" class="siimple-radio siimple-radio--success" checked />
<label class="siimple-label" for="radio2">Colored radio</label>
```


