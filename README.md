# scriptura


# Scriptura — The Living Bible Reference

Scriptura is a growing static website dedicated to the study and exploration of the Bible.
The goal of the project is to build a visually rich and structured reference resource covering:

* Biblical books and summaries
* Important characters
* Key verses and quotes
* Infographics and timelines
* Apocryphal and deuterocanonical texts
* External resources for reading the Bible online

The site is designed to expand gradually over time, eventually including **the lives of saints from Catholic and Orthodox traditions**.

---

# Project Goals

This project aims to provide a structured and visual Bible reference website that is:

* Easy to navigate
* Visually elegant
* Expandable over time
* Built using simple static web technologies

The long-term vision is to create a **comprehensive Bible reference library** with summaries, timelines, characters, quotes, and visual learning materials.

---

# Current Features (Implemented)

The following sections are currently implemented as individual pages:

Home

* Landing page introducing the project
* Navigation to all major sections

Old Testament

* Entry point for exploring the 39 books

New Testament

* Entry point for the 27 books of the New Testament

Apocrypha / Deuterocanon

* Page dedicated to deuterocanonical and related texts

Characters

* Future directory of important biblical figures

Verses

* Key quotes and notable passages

Infographics

* Visual representations of biblical narratives and themes

Read Online

* External links to major Bible platforms

Saints

* Placeholder page for future development

Many sections are currently marked **Coming Soon** while the structure is being prepared.

---

# Technology Stack

The site is built using a simple static architecture:

HTML
CSS
JavaScript

Hosting is planned via **GitHub Pages**, which allows the entire site to be hosted for free.

Advantages of this approach:

* No backend required
* Easy deployment
* Easy version control
* Lightweight and fast

---

# Folder Structure

scriptura/

index.html
old-testament.html
new-testament.html
apocrypha.html
characters.html
verses.html
infographics.html
read-online.html
saints.html

css/
    style.css

js/
    data.js
    components.js

books/
    (future book pages)

images/
    (future infographics and media)

---

# Design System

The site uses a consistent design theme inspired by illuminated manuscripts and classical typography.

Fonts used:

* IM Fell English
* Crimson Pro
* Cormorant Garamond

Color palette includes:

* parchment backgrounds
* gold accents
* deep ink tones
* crimson highlights

All styling is centralized in:

css/style.css

This allows visual changes to be made across the entire site easily.

---

# Data Architecture

The project includes a shared data file:

js/data.js

This file contains structured data such as:

* Old Testament book list
* New Testament book list
* Apocryphal books
* Key quotes
* Major biblical characters

Utility functions also exist for:

* building book grids
* quote carousel functionality
* navigation highlighting

This structure allows many pages to be generated dynamically.

---

# Development Status

Current stage: **Foundation / Structure**

Completed:

* Project structure
* Page architecture
* Navigation system
* Shared stylesheet
* Shared data file
* Section placeholders

Next steps:

* Create individual book pages
* Add summaries and characters
* Build infographic pages
* Implement quote and story rotation
* Add search functionality
* Begin saints section

---

# Deployment

The project will be deployed using **GitHub Pages**.

Once published, the site will be accessible at:

https://USERNAME.github.io/scriptura/

---

# Future Expansion

Planned additions include:

* Full summaries for all biblical books
* Character profiles
* Biblical timelines
* Maps of journeys
* Genealogies
* Saints (Catholic and Orthodox)
* Additional infographics
* Searchable scripture references

The goal is to grow the site steadily into a comprehensive and visually engaging Bible reference.

---

# License



## Recent Update — Responsive Navigation (Mobile Menu)

A responsive navigation improvement was added to support mobile devices.

### Changes Made

Two small updates were applied across the project.

#### 1. Updated Stylesheet

The file:

css/style.css

was replaced with an updated version that includes styles for a responsive navigation menu and hamburger button.

This allows the navigation bar to collapse into a mobile menu on smaller screens.

---

#### 2. Hamburger Button Added to All Pages

Each HTML page now includes a hamburger button inside the navigation element.

Added inside `<nav>` before `</nav>`:

```html
<button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
  <span></span><span></span><span></span>
</button>
```

---

#### 3. Navigation Toggle Script

A small JavaScript toggle script was added at the bottom of every page before the closing `</body>` tag.

This script opens and closes the navigation menu on mobile devices.

```html
<script>
(function(){
  var btn  = document.getElementById('nav-hamburger');
  var menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;
  btn.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
})();
</script>
```

---

### Result

The website navigation is now:

* mobile responsive
* accessible via hamburger menu on small screens
* automatically collapsible when a link is clicked

This ensures better usability across phones, tablets, and desktops.


This project is currently maintained as an open educational resource.
