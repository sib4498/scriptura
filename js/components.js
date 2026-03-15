<!-- ============================================================
     SCRIPTURA — Shared HTML Snippets  (js/components.js)
     
     These functions inject the shared nav and footer into every
     page so you only maintain them in one place.
     ============================================================ -->

/**
 * Call in each page's <body> like:
 *   <script>injectNav('old-testament')</script>   ← pass current page key
 *   <div id="main-nav"></div>                     ← target element
 *
 * OR just copy-paste the HTML blocks below directly into each
 * page if you prefer static HTML (easier for beginners).
 */

/* ── SHARED NAV HTML ──────────────────────────────────────────
   Copy this <nav> block into EVERY page.
   Adjust href paths with ../ prefix inside books/ subfolder.
   ─────────────────────────────────────────────────────────── */

/*
<nav>
  <a href="index.html" class="nav-brand">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <line x1="9" y1="1" x2="9" y2="17" stroke="#d4aa4e" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="4" y1="6" x2="14" y2="6" stroke="#d4aa4e" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    Scriptura
  </a>
  <ul class="nav-links">
    <li><a href="old-testament.html">Old Testament</a></li>
    <li><a href="new-testament.html">New Testament</a></li>
    <li><a href="apocrypha.html">Apocrypha</a></li>
    <li><a href="characters.html">Characters</a></li>
    <li><a href="verses.html">Verses</a></li>
    <li><a href="infographics.html">Infographics</a></li>
    <li><a href="read-online.html">Read Online</a></li>
    <li><a href="saints.html" class="nav-cta">Saints ✦ Soon</a></li>
  </ul>
</nav>
*/


/* ── SHARED FOOTER HTML ───────────────────────────────────────
   Copy this <footer> block into EVERY page.
   ─────────────────────────────────────────────────────────── */

/*
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div class="footer-brand">Scriptura</div>
        <p class="footer-tagline">A living reference for sacred scripture — the Bible with Apocrypha, biblical characters, key verses, and the Lives of the Saints.</p>
      </div>
      <div class="footer-col">
        <h5>Scripture</h5>
        <ul>
          <li><a href="old-testament.html">Old Testament</a></li>
          <li><a href="new-testament.html">New Testament</a></li>
          <li><a href="apocrypha.html">Apocrypha</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Explore</h5>
        <ul>
          <li><a href="characters.html">Characters</a></li>
          <li><a href="verses.html">Key Verses</a></li>
          <li><a href="infographics.html">Infographics</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Read Online</h5>
        <ul>
          <li><a href="https://www.biblegateway.com" target="_blank">Bible Gateway</a></li>
          <li><a href="https://www.bible.com" target="_blank">Bible.com</a></li>
          <li><a href="https://biblehub.com" target="_blank">Bible Hub</a></li>
          <li><a href="https://www.blueletterbible.org" target="_blank">Blue Letter Bible</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Scriptura. A sacred scripture reference project.</span>
      <span class="footer-copy" style="font-style:italic;">"In the beginning was the Word…" — John 1:1</span>
    </div>
  </div>
</footer>
*/


/* ── PAGE TEMPLATE ────────────────────────────────────────────
   Minimal skeleton every new page should follow:
   ─────────────────────────────────────────────────────────── */

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE TITLE — Scriptura</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IM+Fell+English:ital@0;1&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <!-- Page-specific styles here if needed -->
</head>
<body>

  <!-- NAV (copy from above) -->

  <!-- BREADCRUMB -->
  <div class="breadcrumb">
    <a href="index.html">Home</a>
    <span class="breadcrumb-sep">›</span>
    <span>Page Title</span>
  </div>

  <!-- PAGE HERO -->
  <section class="page-hero">
    <div class="page-hero-bg"></div>
    <div class="page-hero-content">
      <p class="section-tag">Section Tag</p>
      <h1 class="section-title">Page Title</h1>
      <p class="section-desc">Subtitle or description goes here.</p>
    </div>
  </section>

  <!-- PAGE CONTENT HERE -->

  <!-- FOOTER (copy from above) -->

  <script src="js/data.js"></script>
  <!-- Page-specific scripts here -->
</body>
</html>
*/
