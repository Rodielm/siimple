---
title: "Checkbox"
description: "The redesigned checkbox element"
keywords: "checkbox,check,checked,form"
---

Style your checkbox elements adding the `siimple-checkbox` style to the `<input>` element. 
By default, the checkbox will be displayed unchecked, but you can add a **checked** attribute to the `<input>` element to display the checkbox as checked.

```html preview="true"
<div class="siimple--mb-1">
    <input type="checkbox" id="checkbox0" class="siimple-checkbox" />
    <label class="siimple-label" for="checkbox0">Default checkbox</label>
</div>
<div class="siimple--mb-0">
    <input type="checkbox" id="checkbox1" class="siimple-checkbox" checked />
    <label class="siimple-label" for="checkbox1">Active checkbox</label>
</div>
```

#### Disabled checkbox

Add a `disabled` attribute to the `<input>` element to display the checkbox as disabled.

```html preview="true"
<input type="checkbox" id="checkbox2" class="siimple-checkbox" checked disabled />
<label class="siimple-label" for="checkbox2">Disabled checkbox</label>
```

#### Indeterminate state

Checkboxes can also display the **indeterminate** state. Remember that there is no HTML attribute to set this state, the only way to set this state is via [JavaScript](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate).

```html preview="true"
<input type="checkbox" id="checkbox4" class="siimple-checkbox" />
<label class="siimple-label" for="checkbox4">Indeterminate checkbox</label>

<!-- Set the indeterminate state via javascript -->
<script type="text/javascript">
    document.getElementById("checkbox4").indeterminate = true;
</script>
```


#### Colored checkbox

Use `siimple-checkbox--error`, `siimple-checkbox--warning` and `siimple-checkbox--success` to change the color of the checked checkbox.

```html preview="true"
<input type="checkbox" id="checkbox3" class="siimple-checkbox siimple-checkbox--success" checked />
<label class="siimple-label" for="checkbox3">Colored checkbox</label>
```


