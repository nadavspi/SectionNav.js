# SectionNav.js

An class that renders a menu with anchor links for navigating between sections of a page. Useful in cases where such a menu can't be generated by the server (e.g., the menu isn't critical and the content is dynamic).

## Installation
```bash
npm install --save section-nav
```

## Example

Let's say you have this HTML:

```html
<div id="section-nav"></div>
<section>
    <h1>Section one</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
<section id="already-has-an-id">
    <h1>Section two</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
<section>
    <h1>Section three</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
<section>
    <h1>Section four</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
```

You'd instantiate the class:

```javascript
import SectionNav from 'section-nav';

const nav = new SectionNav({
  targetElement: document.getElementById('section-nav'),
  selector: 'section',
});
```

And the result would look like this:

```html
<div id="section-nav">
    <ul>
        <li><a href="#section-1">Section 1</a></li>
        <li><a href="#already-has-an-id">Section 2</a></li>
        <li><a href="#section-3">Section 3</a></li>
        <li><a href="#section-4">Section 4</a></li>
    </ul>
</div>
<section id="section-1">
    <h1>section one</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
<section id="already-has-an-id">
    <h1>section two</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
<section id="section-3">
    <h1>section three</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
<section id="section-4">
    <h1>section four</h1>
    <p>Convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id! Ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis!</p>
</section>
```
