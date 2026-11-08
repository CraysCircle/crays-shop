"use client";
import {usePathname} from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Basket,
  CaretRight,
  Check,
  Clock,
  Coffee,
  DeviceMobile,
  Drop,
  FacebookLogo,
  ForkKnife,
  InstagramLogo,
  Leaf,
  List,
  MagnifyingGlass,
  MapPin,
  Minus,
  Plus,
  QrCode,
  Receipt,
  ShoppingBag,
  TiktokLogo,
  UserCircle,
  X,
} from "@phosphor-icons/react";

const CRAYS_RED = "#F31248";

const navItems = [
  { label: "Food", href: "/food" },
  { label: "Drinks", href: "/drinks" },
  { label: "Offers", href: "/offers" },
  { label: "Crays App", href: "/app" },
];

const offers = [
  {
    id: "coffee-croissant",
    badge: "MORNING DEAL",
    title: "Coffee & Croissant",
    description: "Freshly brewed coffee and a butter croissant.",
    price: "€2.50",
    image: "/assets/offer-coffee-croissant.png",
    category: "food",
  },
  {
    id: "sandwich-drink",
    badge: "FRESH & FAST",
    title: "Mozzarella Sandwich & Drink",
    description: "With tomato, pesto and baby spinach.",
    price: "€4.50",
    image: "/assets/offer-sandwich-drink.png",
    category: "food",
  },
  {
    id: "donut-coffee",
    badge: "SWEET BREAK",
    title: "Donut & Coffee",
    description: "A sweet treat and hot coffee of your choice.",
    price: "€3.50",
    image: "/assets/offer-donut-coffee.png",
    category: "food",
  },
];

const foodCategories = [
  {
    eyebrow: "ALL DAY",
    title: "Freshly made",
    copy: "Croissants, sandwiches, salads and warm favourites prepared for fast-moving days.",
    icon: ForkKnife,
  },
  {
    eyebrow: "BETTER BREAKS",
    title: "Snacks that fit",
    copy: "Fruit, yogurt, bakery treats and small bites for every kind of stop.",
    icon: ShoppingBag,
  },
  {
    eyebrow: "CLEAR CHOICES",
    title: "Know what’s inside",
    copy: "Ingredients, allergens and nutrition will be visible before you buy.",
    icon: Leaf,
  },
];

const drinkCategories = [
  {
    eyebrow: "BARISTA QUALITY",
    title: "Coffee, your way",
    copy: "Espresso, cappuccino, iced coffee and fast favourites from morning to late.",
    icon: Coffee,
  },
  {
    eyebrow: "CHILLED",
    title: "Ready when you are",
    copy: "Water, juices, soft drinks and Crays originals kept perfectly cold.",
    icon: Drop,
  },
  {
    eyebrow: "SMARTER PICKS",
    title: "Easy to compare",
    copy: "Clear product information and simple filters make every choice faster.",
    icon: MagnifyingGlass,
  },
];

function Logo({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="/" aria-label="Crays Store home">
      <img src="/assets/crays-mark.svg" alt="" />
      <strong>crays</strong>
      <span>store</span>
    </a>
  );
}

function Header({ basketCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="utility-bar">In fast. Out easy.</div>
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="store-link" href="/stores">
            <MapPin weight="bold" />
            <span>Find a store</span>
          </a>
          <a className="account-link" href="/account" aria-label="My account">
            <UserCircle weight="regular" />
            <span>My account</span>
          </a>
          <a className="basket-link" href="/offers" aria-label={`${basketCount} items selected`}>
            <Basket />
            {basketCount > 0 && <span className="basket-count">{basketCount}</span>}
          </a>
          <button
            className="menu-button"
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <List />}
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              <span>{item.label}</span>
              <CaretRight />
            </a>
          ))}
          <a href="/stores">
            <span>Find a store</span>
            <MapPin />
          </a>
          <a href="/account">
            <span>My account</span>
            <UserCircle />
          </a>
        </nav>
      </div>
    </>
  );
}

function ServiceRibbon() {
  const services = [
    [Clock, "Open late"],
    [Leaf, "Fresh every day"],
    [QrCode, "Scan & Go"],
    [Receipt, "Digital receipts"],
  ];
  return (
    <div className="service-ribbon" aria-label="Crays Store services">
      {services.map(([Icon, label]) => (
        <div className="service-item" key={label}>
          <Icon />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__image">
        <img
          src="/assets/hero-storefront.png"
          alt="Two customers walking past a Crays Store at dusk"
          fetchPriority="high"
        />
      </div>
      <div className="home-hero__content">
        <p className="eyebrow">YOUR STORE. YOUR MOMENT.</p>
        <h1>EVERYTHING HERE. RIGHT NEAR.</h1>
        <p className="hero-copy">
          From your first coffee to your late-night snack — Crays Store fits your day.
        </p>
        <div className="button-row">
          <a className="button button--dark" href="/stores">
            Find a store
          </a>
          <a className="text-link text-link--dark" href="/offers">
            Explore offers
          </a>
        </div>
      </div>
    </section>
  );
}

function AutoCheckout() {
  const steps = [
    {
      number: "01",
      title: "CHECK IN",
      copy: "Open the Crays App and start your store visit.",
      icon: DeviceMobile,
    },
    {
      number: "02",
      title: "PICK UP",
      copy: "Choose what you want. Your basket stays visible.",
      icon: Basket,
    },
    {
      number: "03",
      title: "YOU’RE DONE",
      copy: "Walk out and receive your digital receipt.",
      icon: Receipt,
    },
  ];

  return (
    <>
      <section className="auto-section">
        <img
          className="auto-section__background"
          src="/assets/auto-checkout-store.png"
          alt="Crays Store automatic-checkout entrance at night"
        />
        <div className="auto-section__content">
          <p className="eyebrow">CRAYS AUTO CHECKOUT</p>
          <h2>
            WALK IN.
            <br />
            PICK UP.
            <br />
            MOVE ON.
          </h2>
          <p>
            Check in, choose what you want, and walk out. Your digital receipt arrives
            automatically — and you stay in control.
          </p>
          <div className="button-row">
            <a className="button button--light" href="/app">
              See how it works
            </a>
            <a className="text-link text-link--light" href="/stores">
              Find a store <ArrowRight />
            </a>
          </div>
        </div>
        <img
          className="auto-section__phone"
          src="/assets/crays-phone.png"
          alt="Crays App showing a checked-in visit, detected items and a ready receipt"
        />
      </section>
      <section className="steps-section" aria-labelledby="steps-heading">
        <p className="eyebrow" id="steps-heading">
          AS EASY AS THAT
        </p>
        <div className="steps-grid">
          {steps.map(({ number, title, copy, icon: Icon }) => (
            <article className="step-card" key={number}>
              <div>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <Icon />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AppBand() {
  return (
    <section className="app-band">
      <div className="app-band__content">
        <h2>YOUR STORE IN YOUR POCKET.</h2>
        <p>Offers, Scan & Go, receipts and support — all in one place.</p>
        <a className="button button--dark" href="/app">
          Discover the Crays App
        </a>
      </div>
      <img
        src="/assets/crays-phone.png"
        alt="Crays App automatic-checkout visit"
        loading="lazy"
      />
    </section>
  );
}

function MorningCampaign() {
  return (
    <section className="morning-campaign">
      <img
        src="/assets/morning-bundle.png"
        alt="Crays breakfast bundle with croissant sandwich, yogurt, espresso drink and fruit"
        loading="lazy"
      />
      <div className="morning-campaign__content">
        <p className="eyebrow">YOUR MORNING. YOUR STORE.</p>
        <h2>MORNINGS, MADE BETTER.</h2>
        <p>Breakfast, coffee and everything for the road — ready at your Crays Store.</p>
        <a className="button button--light" href="/stores">
          Find a store
        </a>
      </div>
      <div className="price-card" aria-label="Morning deal 4 euros 90">
        <strong>
          <span>€</span>4<sup>90</sup>
        </strong>
        <span>MORNING DEAL</span>
      </div>
    </section>
  );
}

function OfferCard({ offer, quantity, onAdd, onRemove }) {
  return (
    <article className="offer-card">
      <div className="offer-card__image">
        <span className="offer-badge">{offer.badge}</span>
        <img src={offer.image} alt="" loading="lazy" />
        {quantity === 0 ? (
          <button
            className="offer-add"
            type="button"
            onClick={() => onAdd(offer.id)}
            aria-label={`Add ${offer.title}`}
          >
            <Plus weight="bold" />
          </button>
        ) : (
          <div className="quantity-control" aria-label={`${quantity} ${offer.title} selected`}>
            <button type="button" onClick={() => onRemove(offer.id)} aria-label="Remove one">
              <Minus weight="bold" />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => onAdd(offer.id)} aria-label="Add one">
              <Plus weight="bold" />
            </button>
          </div>
        )}
      </div>
      <div className="offer-card__body">
        <div>
          <h3>{offer.title}</h3>
          <p>{offer.description}</p>
        </div>
        <strong className="offer-price">{offer.price}</strong>
      </div>
    </article>
  );
}

function OffersSection({ quantities, onAdd, onRemove, title = "JUST RIGHT FOR YOU", showAll = true }) {
  return (
    <section className="offers-section">
      <div className="section-heading">
        <h2>{title}</h2>
        {showAll && (
          <a href="/offers">
            VIEW ALL OFFERS <ArrowRight />
          </a>
        )}
      </div>
      <div className="offer-grid">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            quantity={quantities[offer.id] || 0}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
      <p className="availability-note">
        Opening range shown. Products, pricing and availability may vary by store.
      </p>
    </section>
  );
}

function StoreFinderBand({ compact = false }) {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();
    const place = query.trim();
    if (!place) {
      setMessage("Enter a city or postcode to continue.");
      return;
    }
    setMessage(`No live Crays Store result is available for “${place}” yet. New locations will appear here first.`);
  }

  return (
    <section className={`finder-band ${compact ? "finder-band--compact" : ""}`}>
      <div>
        <h2>YOUR CRAYS STORE IS CLOSER THAN YOU THINK.</h2>
        {!compact && <p>Search future and open locations across Europe.</p>}
      </div>
      <form onSubmit={submit} noValidate>
        <label className="sr-only" htmlFor={compact ? "footer-store-search" : "store-search"}>
          Enter city or postcode
        </label>
        <div className="finder-control">
          <MapPin aria-hidden="true" />
          <input
            id={compact ? "footer-store-search" : "store-search"}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setMessage("");
            }}
            placeholder="Enter city or postcode"
            autoComplete="postal-code"
          />
        </div>
        <button className="button button--light" type="submit">
          Find stores
        </button>
      </form>
      {message && (
        <p className="finder-message" role="status">
          {message}
        </p>
      )}
    </section>
  );
}

function Footer() {
  const columns = [
    ["Explore", ["Food", "Drinks", "Offers", "Find a store"]],
    ["Crays App", ["Scan & Go", "Receipts", "Support"]],
    ["Help", ["FAQ", "Contact us", "Store feedback"]],
    ["About", ["About Crays", "Sustainability", "Careers", "Press"]],
  ];
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo compact />
          <div className="social-links" aria-label="Social media">
            <a href="/about" aria-label="Instagram">
              <InstagramLogo />
            </a>
            <a href="/about" aria-label="Facebook">
              <FacebookLogo />
            </a>
            <a href="/about" aria-label="TikTok">
              <TiktokLogo />
            </a>
          </div>
        </div>
        {columns.map(([title, links]) => (
          <div className="footer-column" key={title}>
            <h3>{title}</h3>
            {links.map((link) => (
              <a key={link} href={link === "Find a store" ? "/stores" : `/${link.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-legal">
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/accessibility">Accessibility</a>
          <button type="button">Cookie settings</button>
        </div>
        <span>© 2026 Crays. All rights reserved.</span>
      </div>
    </footer>
  );
}

function HomePage(props) {
  return (
    <>
      <HomeHero />
      <ServiceRibbon />
      <AutoCheckout />
      <AppBand />
      <MorningCampaign />
      <OffersSection {...props} />
      <StoreFinderBand compact />
    </>
  );
}

function CategoryPage({ type }) {
  const isFood = type === "food";
  const categories = isFood ? foodCategories : drinkCategories;
  return (
    <>
      <section className={`page-hero page-hero--${type}`}>
        <div>
          <p className="eyebrow">{isFood ? "FRESH. FAST. FULL OF CHOICE." : "HOT. COLD. ALWAYS READY."}</p>
          <h1>{isFood ? "FOOD FOR EVERY PART OF YOUR DAY." : "DRINKS THAT MOVE WITH YOU."}</h1>
          <p>
            {isFood
              ? "Breakfast, lunch, late-night snacks and everything in between."
              : "From your first coffee to something ice-cold for the road."}
          </p>
          <a className="button button--light" href="/stores">
            Find a store
          </a>
        </div>
        <img
          src={isFood ? "/assets/offer-sandwich-drink.png" : "/assets/offer-coffee-croissant.png"}
          alt=""
        />
      </section>
      <section className="category-grid-section">
        <div className="section-heading">
          <h2>{isFood ? "MADE FOR REAL DAYS" : "YOUR NEXT DRINK, SORTED"}</h2>
        </div>
        <div className="category-grid">
          {categories.map(({ eyebrow, title, copy, icon: Icon }) => (
            <article key={title}>
              <Icon />
              <p className="eyebrow">{eyebrow}</p>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="/offers">
                Explore offers <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>
      <MorningCampaign />
      <StoreFinderBand compact />
    </>
  );
}

function OffersPage(props) {
  return (
    <>
      <section className="simple-hero">
        <p className="eyebrow">CRAYS STORE OFFERS</p>
        <h1>MORE OF WHAT YOU WANT. LESS OF THE WAIT.</h1>
        <p>Opening offers built for mornings, quick lunches and late-night stops.</p>
      </section>
      <OffersSection {...props} title="CURRENT OFFERS" showAll={false} />
      <section className="member-callout">
        <div>
          <p className="eyebrow">CRAYS APP</p>
          <h2>YOUR OFFERS, READY WHEN YOU ARE.</h2>
          <p>Keep favourites, Scan & Go and digital receipts together in one place.</p>
        </div>
        <a className="button button--light" href="/app">
          Discover the app
        </a>
      </section>
      <StoreFinderBand compact />
    </>
  );
}

function AppPage() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    ["CHECK IN", "Start a visit at the store entrance and see your active Store clearly."],
    ["PICK UP", "Your detected items stay visible so you can review your basket as you shop."],
    ["MOVE ON", "Leave when you’re ready and receive a clear digital receipt in the app."],
  ];
  return (
    <>
      <section className="app-page-hero">
        <div>
          <p className="eyebrow">CRAYS APP</p>
          <h1>YOUR STORE IN YOUR POCKET.</h1>
          <p>Offers, store visits, Scan & Go, receipts and support — together by design.</p>
          <a className="button button--dark" href="#app-steps">
            See how it works
          </a>
        </div>
        <img src="/assets/crays-phone.png" alt="Crays App store session" />
      </section>
      <section className="app-steps" id="app-steps">
        <div className="app-steps__tabs" role="tablist" aria-label="How the Crays App works">
          {steps.map(([title], index) => (
            <button
              key={title}
              type="button"
              role="tab"
              aria-selected={activeStep === index}
              onClick={() => setActiveStep(index)}
            >
              <span>0{index + 1}</span>
              {title}
            </button>
          ))}
        </div>
        <div className="app-steps__panel" role="tabpanel">
          <span>0{activeStep + 1}</span>
          <h2>{steps[activeStep][0]}</h2>
          <p>{steps[activeStep][1]}</p>
          <div className="status-chip">
            <Check weight="bold" /> You stay in control
          </div>
        </div>
      </section>
      <StoreFinderBand compact />
    </>
  );
}

function StoresPage() {
  return (
    <>
      <section className="stores-hero">
        <div>
          <p className="eyebrow">FIND A CRAYS STORE</p>
          <h1>YOUR NEXT STOP STARTS HERE.</h1>
          <p>Search by city or postcode. New European locations will appear here as they open.</p>
        </div>
      </section>
      <StoreFinderBand />
      <section className="store-empty-state">
        <MapPin />
        <p className="eyebrow">OPENING NETWORK</p>
        <h2>WE’RE PREPARING THE FIRST CRAYS STORE LOCATIONS.</h2>
        <p>
          We won’t show invented opening hours or availability. Verified stores will be published
          here with their exact services and local range.
        </p>
      </section>
    </>
  );
}

function AccountPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="account-page">
      <div className="account-page__intro">
        <p className="eyebrow">MY CRAYS</p>
        <h1>ONE PLACE FOR EVERY STORE VISIT.</h1>
        <p>Offers, Scan & Go, receipts and support will live behind one secure CRAYS sign-in.</p>
      </div>
      <div className="account-card">
        {!submitted ? (
          <>
            <p className="eyebrow">EARLY ACCESS</p>
            <h2>BE FIRST THROUGH THE DOOR.</h2>
            <p>Leave your email to hear when customer accounts become available.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label htmlFor="account-email">Email address</label>
              <input id="account-email" type="email" required placeholder="you@example.com" />
              <button className="button button--dark" type="submit">
                Keep me updated
              </button>
            </form>
          </>
        ) : (
          <div className="success-state" role="status">
            <Check weight="bold" />
            <h2>YOU’RE ON THE LIST.</h2>
            <p>This frontend confirmation is local for now. Secure account persistence follows in Step 2.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function TextPage({ kind }) {
  const content = {
    privacy: ["PRIVACY", "Privacy comes before convenience.", "The production privacy notice will describe every purpose, legal basis, recipient, retention period and customer right before customer data is collected."],
    terms: ["TERMS", "Clear rules, written for real people.", "Customer terms, purchase terms and Store-specific seller information will be published before transactions are enabled."],
    accessibility: ["ACCESSIBILITY", "Crays Store should work for everyone.", "We are building keyboard, screen-reader, contrast, motion and responsive support into the frontend from its first release."],
    about: ["ABOUT CRAYS STORE", "Convenience, redesigned for Europe.", "Crays Store combines fresh everyday retail, a premium customer experience and technology that removes friction without removing control."],
  };
  const [eyebrow, title, copy] = content[kind] || content.about;
  return (
    <section className="text-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
      <section aria-label="Operating Entity"><p className="eyebrow">Operating Entity</p><h2>Crays AG</h2><address>Schindellegistrasse 73<br />CH-8808 Pfäffikon<br />Switzerland</address><p>CEO: Kai Thorben Biesenbach</p></section>
      <a className="text-link text-link--dark" href="/">
        Back to home <ArrowRight />
      </a>
    </section>
  );
}

function PageRouter(props) {
  const path = usePathname().replace(/\/+$/, "") || "/";
  if (path === "/") return <HomePage {...props} />;
  if (path === "/food") return <CategoryPage type="food" />;
  if (path === "/drinks") return <CategoryPage type="drinks" />;
  if (path === "/offers") return <OffersPage {...props} />;
  if (path === "/app" || path === "/scan-and-go" || path === "/receipts") return <AppPage />;
  if (path === "/stores" || path === "/find-a-store") return <StoresPage />;
  if (path === "/account") return <AccountPage />;
  if (["/privacy", "/terms", "/accessibility", "/about"].includes(path)) {
    return <TextPage kind={path.slice(1)} />;
  }
  return <TextPage kind="about" />;
}

/** @param {{pageContent?: import('react').ReactNode}} props */
export function App({pageContent = null} = {}) {
  const [quantities, setQuantities] = useState({});
  const basketCount = useMemo(
    () => Object.values(quantities).reduce((total, quantity) => total + quantity, 0),
    [quantities],
  );

  function addOffer(id) {
    setQuantities((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
  }

  function removeOffer(id) {
    setQuantities((current) => ({ ...current, [id]: Math.max(0, (current[id] || 0) - 1) }));
  }

  return (
    <div className="site-shell">
      <Header basketCount={basketCount} />
      {pageContent !== null ? <div id="main" tabIndex={-1}>{pageContent}</div> : <main id="main">
        <PageRouter quantities={quantities} onAdd={addOffer} onRemove={removeOffer} />
      </main>}
      <Footer />
    </div>
  );
}
