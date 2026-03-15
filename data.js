/* ============================================================
   SCRIPTURA — Shared Data & Utilities  (js/data.js)
   ============================================================ */

/* ── BIBLE BOOK DATA ──────────────────────────────────────────
   Each entry: [abbreviation, full name, chapters, genre, slug]
   slug = the filename used in books/<slug>.html
   ─────────────────────────────────────────────────────────── */

const BOOKS_OT = [
  // Torah / Pentateuch
  ['Gen','Genesis',50,'Torah','genesis'],
  ['Exo','Exodus',40,'Torah','exodus'],
  ['Lev','Leviticus',27,'Torah','leviticus'],
  ['Num','Numbers',36,'Torah','numbers'],
  ['Deu','Deuteronomy',34,'Torah','deuteronomy'],
  // Historical
  ['Jos','Joshua',24,'History','joshua'],
  ['Jdg','Judges',21,'History','judges'],
  ['Rut','Ruth',4,'History','ruth'],
  ['1Sa','1 Samuel',31,'History','1-samuel'],
  ['2Sa','2 Samuel',24,'History','2-samuel'],
  ['1Ki','1 Kings',22,'History','1-kings'],
  ['2Ki','2 Kings',25,'History','2-kings'],
  ['1Ch','1 Chronicles',29,'History','1-chronicles'],
  ['2Ch','2 Chronicles',36,'History','2-chronicles'],
  ['Ezr','Ezra',10,'History','ezra'],
  ['Neh','Nehemiah',13,'History','nehemiah'],
  ['Est','Esther',10,'History','esther'],
  // Wisdom / Poetry
  ['Job','Job',42,'Wisdom','job'],
  ['Psa','Psalms',150,'Wisdom','psalms'],
  ['Pro','Proverbs',31,'Wisdom','proverbs'],
  ['Ecc','Ecclesiastes',12,'Wisdom','ecclesiastes'],
  ['Son','Song of Songs',8,'Wisdom','song-of-songs'],
  // Major Prophets
  ['Isa','Isaiah',66,'Major Prophets','isaiah'],
  ['Jer','Jeremiah',52,'Major Prophets','jeremiah'],
  ['Lam','Lamentations',5,'Major Prophets','lamentations'],
  ['Eze','Ezekiel',48,'Major Prophets','ezekiel'],
  ['Dan','Daniel',12,'Major Prophets','daniel'],
  // Minor Prophets
  ['Hos','Hosea',14,'Minor Prophets','hosea'],
  ['Joe','Joel',3,'Minor Prophets','joel'],
  ['Amo','Amos',9,'Minor Prophets','amos'],
  ['Oba','Obadiah',1,'Minor Prophets','obadiah'],
  ['Jon','Jonah',4,'Minor Prophets','jonah'],
  ['Mic','Micah',7,'Minor Prophets','micah'],
  ['Nah','Nahum',3,'Minor Prophets','nahum'],
  ['Hab','Habakkuk',3,'Minor Prophets','habakkuk'],
  ['Zep','Zephaniah',3,'Minor Prophets','zephaniah'],
  ['Hag','Haggai',2,'Minor Prophets','haggai'],
  ['Zec','Zechariah',14,'Minor Prophets','zechariah'],
  ['Mal','Malachi',4,'Minor Prophets','malachi'],
];

const BOOKS_NT = [
  // Gospels
  ['Mat','Matthew',28,'Gospels','matthew'],
  ['Mar','Mark',16,'Gospels','mark'],
  ['Luk','Luke',24,'Gospels','luke'],
  ['Joh','John',21,'Gospels','john'],
  // History
  ['Act','Acts',28,'History','acts'],
  // Pauline Epistles
  ['Rom','Romans',16,'Pauline Epistles','romans'],
  ['1Co','1 Corinthians',16,'Pauline Epistles','1-corinthians'],
  ['2Co','2 Corinthians',13,'Pauline Epistles','2-corinthians'],
  ['Gal','Galatians',6,'Pauline Epistles','galatians'],
  ['Eph','Ephesians',6,'Pauline Epistles','ephesians'],
  ['Phi','Philippians',4,'Pauline Epistles','philippians'],
  ['Col','Colossians',4,'Pauline Epistles','colossians'],
  ['1Th','1 Thessalonians',5,'Pauline Epistles','1-thessalonians'],
  ['2Th','2 Thessalonians',3,'Pauline Epistles','2-thessalonians'],
  ['1Ti','1 Timothy',6,'Pauline Epistles','1-timothy'],
  ['2Ti','2 Timothy',4,'Pauline Epistles','2-timothy'],
  ['Tit','Titus',3,'Pauline Epistles','titus'],
  ['Phm','Philemon',1,'Pauline Epistles','philemon'],
  // General Epistles
  ['Heb','Hebrews',13,'General Epistles','hebrews'],
  ['Jam','James',5,'General Epistles','james'],
  ['1Pe','1 Peter',5,'General Epistles','1-peter'],
  ['2Pe','2 Peter',3,'General Epistles','2-peter'],
  ['1Jo','1 John',5,'General Epistles','1-john'],
  ['2Jo','2 John',1,'General Epistles','2-john'],
  ['3Jo','3 John',1,'General Epistles','3-john'],
  ['Jud','Jude',1,'General Epistles','jude'],
  // Apocalyptic
  ['Rev','Revelation',22,'Apocalyptic','revelation'],
];

const BOOKS_APO = [
  // Deuterocanonical (Catholic & Orthodox)
  ['Tob','Tobit',14,'Deuterocanonical','tobit'],
  ['Jdt','Judith',16,'Deuterocanonical','judith'],
  ['1Mac','1 Maccabees',16,'Deuterocanonical','1-maccabees'],
  ['2Mac','2 Maccabees',15,'Deuterocanonical','2-maccabees'],
  ['Wis','Wisdom of Solomon',19,'Deuterocanonical','wisdom-of-solomon'],
  ['Sir','Sirach',51,'Deuterocanonical','sirach'],
  ['Bar','Baruch',6,'Deuterocanonical','baruch'],
  // Orthodox / Ethiopian additions
  ['3Mac','3 Maccabees',7,'Orthodox','3-maccabees'],
  ['4Mac','4 Maccabees',18,'Orthodox','4-maccabees'],
  ['PsS','Psalms of Solomon',18,'Orthodox','psalms-of-solomon'],
  ['PrM','Prayer of Manasseh',1,'Orthodox','prayer-of-manasseh'],
  // Pseudepigrapha (widely studied)
  ['1En','1 Enoch',108,'Pseudepigrapha','1-enoch'],
  ['Jub','Book of Jubilees',50,'Pseudepigrapha','jubilees'],
  ['4Ez','4 Ezra',16,'Pseudepigrapha','4-ezra'],
];

/* ── KEY QUOTES ─────────────────────────────────────────────── */
const QUOTES = [
  { text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', ref: 'John 3:16', version: 'KJV', ctx: 'Gospel of John · Discourse with Nicodemus' },
  { text: 'The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures.', ref: 'Psalm 23:1–2', version: 'KJV', ctx: 'Psalms of David · A Psalm of Trust' },
  { text: 'Blessed are the meek: for they shall inherit the earth.', ref: 'Matthew 5:5', version: 'KJV', ctx: 'Gospel of Matthew · The Sermon on the Mount' },
  { text: 'For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.', ref: 'Jeremiah 29:11', version: 'KJV', ctx: 'Book of Jeremiah · Letter to the Exiles' },
  { text: 'In the beginning was the Word, and the Word was with God, and the Word was God.', ref: 'John 1:1', version: 'KJV', ctx: 'Gospel of John · The Prologue' },
  { text: 'I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.', ref: 'John 11:25', version: 'KJV', ctx: 'Gospel of John · The Raising of Lazarus' },
  { text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', ref: 'Joshua 1:9', version: 'NIV', ctx: 'Book of Joshua · God\'s Commission to Joshua' },
  { text: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud.', ref: '1 Corinthians 13:4', version: 'NIV', ctx: 'First Epistle to the Corinthians · Hymn to Love' },
];

/* ── KEY CHARACTERS ──────────────────────────────────────────── */
const CHARACTERS = [
  { initials:'M',  name:'Moses',           desc:'Lawgiver and prophet, led the Exodus from Egypt and received the Torah at Sinai.', testament:'Old Testament', genre:'Torah', slug:'moses' },
  { initials:'D',  name:'David',           desc:'Shepherd, warrior, and Israel\'s greatest king — ancestor of the Messiah.', testament:'Old Testament', genre:'History', slug:'david' },
  { initials:'Is', name:'Isaiah',          desc:'The "Evangelical Prophet" — foresaw the Suffering Servant and the Virgin birth.', testament:'Old Testament', genre:'Major Prophets', slug:'isaiah' },
  { initials:'M',  name:'Mary of Nazareth',desc:'Mother of Jesus, Theotokos — the most venerated woman in Christian tradition.', testament:'New Testament', genre:'Gospels', slug:'mary' },
  { initials:'P',  name:'Paul of Tarsus',  desc:'Apostle to the Gentiles, author of thirteen epistles, martyr in Rome.', testament:'New Testament', genre:'Epistles', slug:'paul' },
  { initials:'Jn', name:'John the Apostle',desc:'The Beloved Disciple — author of the Fourth Gospel, three Epistles, and the Apocalypse.', testament:'New Testament', genre:'Gospels', slug:'john-apostle' },
  { initials:'Es', name:'Esther',          desc:'Jewish queen who risked her life to save her people from Haman\'s genocide.', testament:'Old Testament', genre:'History', slug:'esther' },
  { initials:'Jb', name:'Job',             desc:'The great questioner — his story explores suffering, faith, and divine mystery.', testament:'Old Testament', genre:'Wisdom', slug:'job' },
  { initials:'Ab', name:'Abraham',         desc:'Father of faith — called from Ur, he became the ancestor of Israel and of Christ.', testament:'Old Testament', genre:'Torah', slug:'abraham' },
  { initials:'Pt', name:'Peter',           desc:'Prince of the Apostles, first Bishop of Rome, author of two epistles.', testament:'New Testament', genre:'Gospels', slug:'peter' },
  { initials:'Sl', name:'Solomon',         desc:'Builder of the Temple, wisest of kings — author of Proverbs, Ecclesiastes and Song of Songs.', testament:'Old Testament', genre:'Wisdom', slug:'solomon' },
  { initials:'Rh', name:'Ruth',            desc:'Moabite widow whose faithfulness made her ancestor of David and of Christ.', testament:'Old Testament', genre:'History', slug:'ruth' },
];

/* ── UTILITY FUNCTIONS ────────────────────────────────────────── */

/**
 * Render a books grid into a container element.
 * @param {Array}   data        - Array from BOOKS_OT / BOOKS_NT / BOOKS_APO
 * @param {string}  containerId - ID of the target <div>
 * @param {string}  basePath    - Relative path to books/ folder (default 'books/')
 */
function buildBooksGrid(data, containerId, basePath = 'books/') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = data.map(([abbr, name, chs, genre, slug]) => `
    <a class="book-cell" href="${basePath}${slug}.html">
      <span class="book-abbr">${abbr}</span>
      <span class="book-name">${name}</span>
      <span class="book-chapters">${chs} chapter${chs !== 1 ? 's' : ''} · ${genre}</span>
    </a>
  `).join('');
}

/**
 * Tab switcher for the books browser pane.
 * @param {string} tab - 'ot' | 'nt' | 'apo'
 * @param {string[]} keys - ordered array of tab keys matching .tab-btn order
 */
function switchTab(tab, keys = ['ot','nt','apo']) {
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', keys[i] === tab));
  document.querySelectorAll('.books-pane').forEach(p => p.classList.remove('active'));
  const pane = document.getElementById('pane-' + tab);
  if (pane) pane.classList.add('active');
}

/**
 * Quote carousel initializer.
 * Expects elements: #q-text, #q-ref, #q-ctx, #quote-nav
 */
function initQuoteCarousel(quotesArray = QUOTES) {
  let qIdx = 0;
  const nav = document.getElementById('quote-nav');
  if (!nav) return;

  quotesArray.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'quote-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => showQuote(i);
    nav.appendChild(d);
  });

  function showQuote(i) {
    qIdx = i;
    const q = quotesArray[i];
    const tEl = document.getElementById('q-text');
    const rEl = document.getElementById('q-ref');
    const cEl = document.getElementById('q-ctx');
    if (tEl) tEl.textContent = q.text;
    if (rEl) rEl.textContent = `${q.ref} — ${q.version}`;
    if (cEl) cEl.textContent = q.ctx;
    document.querySelectorAll('.quote-dot').forEach((d, j) => d.classList.toggle('active', j === i));
  }

  setInterval(() => showQuote((qIdx + 1) % quotesArray.length), 6000);
}

/**
 * Mark the current page's nav link as active.
 * Matches href against window.location.pathname.
 */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', href === path);
  });
}

/* Auto-run on load */
document.addEventListener('DOMContentLoaded', setActiveNav);
