---
layout: page.11ty.cjs
title: <dodex-widget> ⌲ Home
---

# &lt;dodex-widget>

`<dodex-widget>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<dodex-widget>` is just an HTML element. You can it anywhere you can use HTML!

```html
<dodex-widget></dodex-widget>
```

  </div>
  <div>

<dodex-widget></dodex-widget>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<dodex-widget>` can be configured with attributed in plain HTML.

```html
<dodex-widget name="HTML"></dodex-widget>
```

  </div>
  <div>

<dodex-widget name="HTML"></dodex-widget>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<dodex-widget>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;dodex-widget&gt;</h2>
    <dodex-widget .name=${name}></dodex-widget>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;dodex-widget&gt;</h2>
<dodex-widget name="lit-html"></dodex-widget>

  </div>
</section>
