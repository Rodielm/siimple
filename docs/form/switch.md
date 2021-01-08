---
title: "Switch"
description: "A redesigned checkbox element that looks like a switch"
keywords: "switch,checkbox,form,input"
---

Using the `siimple-switch` class you can style your checkbox elements like a **switch element**. 
By default, the switch will be displayed inactive, but you can add a **checked** attribute to the `<input>` element to display the switch as actived.


```html preview="true"
<div class="siimple--mb-1">
    <input type="checkbox" id="checkbox0" class="siimple-switch" />
    <label class="siimple-label" for="checkbox0">Default switch</label>
</div>
<div class="siimple--mb-0">
    <input type="checkbox" id="checkbox1" class="siimple-switch" checked />
    <label class="siimple-label" for="checkbox1">Active switch</label>
</div>
```

#### Disabled switch

Add a `disabled` attribute to the `<input>` element to display the switch as disabled.

```html preview="true"
<input type="checkbox" id="checkbox2" class="siimple-switch" checked disabled />
<label class="siimple-label" for="checkbox2">Disabled switch</label>
```

#### Colored switch

Use `siimple-switch--error`, `siimple-switch--warning` and `siimple-switch--success` to change the color of the checked checkbox.

```html preview="true"
<input type="checkbox" id="checkbox3" class="siimple-switch siimple-switch--success" checked />
<label class="siimple-label" for="checkbox3">Colored switch</label>
```


