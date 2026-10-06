import "./App.css";
import reactLogo from "./assets/react.svg";

const timeline = [
  { year: "1966", label: "Groundbreaking", text: "August 5th — Port Authority breaks ground" },
  { year: "1968", label: "Steel starts rising", text: "≈ 3 floors built per week" },
  { year: "1970", label: "North Tower tops out", text: "WTC1 reaches 110 floors" },
  { year: "1971", label: "South Tower tops out", text: "WTC2 structurally complete" },
  { year: "1973", label: "Official dedication", text: "April 4th — ribbon-cutting" },
];

const specs = [
  { value: "417 m", label: "North Tower (WTC1) roof height", sub: "1,368 ft — 110 floors" },
  { value: "415 m", label: "South Tower (WTC2) roof height", sub: "1,362 ft — 110 floors" },
  { value: "63 × 63 m", label: "Footprint of each tower", sub: "207 × 207 ft square plan" },
  { value: "~418,000 m²", label: "Combined office floor area", sub: "≈ 9 million sq ft" },
  { value: "198", label: "Elevators, both towers combined", sub: "sky lobbies on floors 44 & 78" },
  { value: "43,600", label: "Windows, both towers", sub: "each only 45 cm / 18 in wide" },
];

const materials = [
  {
    swatch: "steel",
    name: "Structural steel",
    detail: "≈ 100,000–200,000 tons — 244 columns/tower forming a rigid “tube”",
  },
  {
    swatch: "aluminum",
    name: "Aluminum cladding",
    detail: "Silver alloy wrapped around the steel columns",
  },
  {
    swatch: "glass",
    name: "Glass",
    detail: "43,600 narrow windows, only 45 cm wide",
  },
  {
    swatch: "concrete",
    name: "Concrete",
    detail: "≈ 425,000 cubic yards — floor slabs, no interior columns needed",
  },
];

function Hero() {
  return (
    <header className="hero">
      <div className="hero-towers" aria-hidden="true">
        <div className="tower tower-north">
          <span>WTC1</span>
        </div>
        <div className="tower tower-south">
          <span>WTC2</span>
        </div>
      </div>
      <div className="hero-text">
        <p className="kicker">World Trade Center · Lower Manhattan, New York</p>
        <h1>
          The Twin
          <br />
          Towers
        </h1>
        <p className="hero-dates">1973 – 2001</p>
      </div>
    </header>
  );
}

function Location() {
  return (
    <section id="location" className="section band-paper">
      <div className="section-head">
        <span className="section-no">Location</span>
        <h2>A superblock in Lower Manhattan</h2>
      </div>
      <ul className="fact-list">
        <li><strong>City:</strong> New York City, United States</li>
        <li><strong>District:</strong> Financial District, Lower Manhattan</li>
        <li><strong>Site:</strong> 16-acre (6.5 ha) superblock, formerly “Radio Row”</li>
        <li><strong>Setting:</strong> on the Hudson River waterfront &mdash; foundations needed a watertight “slurry wall”</li>
      </ul>
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="section band-ink">
      <div className="section-head">
        <span className="section-no">Date of creation</span>
        <h2>Seven years from bedrock to ribbon-cutting</h2>
      </div>
      <ol className="timeline">
        {timeline.map((step) => (
          <li key={step.year} className="timeline-step">
            <span className="timeline-year">{step.year}</span>
            <div>
              <p className="timeline-label">{step.label}</p>
              <p className="timeline-text">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="timeline-note">Peak workforce: ≈ 3,500 workers on site per day</p>
    </section>
  );
}

function Architect() {
  return (
    <section id="architect" className="section band-paper">
      <div className="section-head">
        <span className="section-no">Architect</span>
        <h2>Minoru Yamasaki</h2>
      </div>
      <div className="two-col architect-grid">
        <figure className="architect-photo">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Architect%20Minoru%20Yamasaki%2C%201959.jpg?width=400"
            alt="Minoru Yamasaki, 1959"
          />
          <figcaption>Minoru Yamasaki, 1959 &mdash; Seattle Municipal Archives</figcaption>
        </figure>
        <ul className="fact-list">
          <li><strong>Born:</strong> 1912, Seattle &mdash; died 1986</li>
          <li><strong>Nationality:</strong> American, Japanese immigrant parents</li>
          <li><strong>Firm:</strong> Minoru Yamasaki &amp; Associates, with Emery Roth &amp; Sons and engineers Skilling &amp; Robertson</li>
          <li><strong>Known for:</strong> “tube-frame” skyscrapers, narrow gothic-style windows, New Formalism</li>
          <li><strong>Other works:</strong> Pruitt-Igoe, Rainier Tower, Century Plaza Towers/Hotels, BOK Towers, Torre Picasso</li>
        </ul>
      </div>
    </section>
  );
}

function SizeShape() {
  return (
    <section id="size" className="section band-ink">
      <div className="section-head">
        <span className="section-no">Size &amp; shape</span>
        <h2>Two square-plan towers, built as a matched pair</h2>
      </div>
      <div className="spec-grid">
        {specs.map((s) => (
          <div className="spec-cell" key={s.label}>
            <p className="spec-value">{s.value}</p>
            <p className="spec-label">{s.label}</p>
            <p className="spec-sub">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Materials() {
  return (
    <section id="materials" className="section band-paper">
      <div className="section-head">
        <span className="section-no">Materials</span>
        <h2>A steel tube wrapped in aluminum and glass</h2>
      </div>
      <div className="materials-grid">
        {materials.map((m) => (
          <div className="material-row" key={m.name}>
            <span className={`swatch swatch-${m.swatch}`} aria-hidden="true" />
            <div>
              <p className="material-name">{m.name}</p>
              <p className="material-detail">{m.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CostUse() {
  return (
    <section id="cost-use" className="section band-bronze">
      <div className="section-head">
        <span className="section-no">Cost &amp; use</span>
        <h2>Owned by a public authority, filled by private tenants</h2>
      </div>
      <div className="stat-row">
        <div className="stat">
          <p className="stat-value">$900M</p>
          <p className="stat-label">Cost in 1973 (≈ $6.8B ~ 6,790M today)</p>
        </div>
        <div className="stat">
          <p className="stat-value">~50,000</p>
          <p className="stat-label">Office workers per day</p>
        </div>
        <div className="stat">
          <p className="stat-value">430+</p>
          <p className="stat-label">Companies leasing office space</p>
        </div>
      </div>
      <ul className="fact-list fact-list-inverse">
        <li><strong>Owner:</strong> Port Authority of New York &amp; New Jersey</li>
        <li><strong>Use:</strong> offices, Windows on the World restaurant, observation deck, PATH train station</li>
      </ul>
    </section>
  );
}

function Environment() {
  return (
    <section id="environment" className="section band-paper">
      <div className="section-head">
        <span className="section-no">Environmental impact</span>
        <h2>Built before energy efficiency was a design brief</h2>
      </div>
      <div className="compare">
        <div className="compare-col">
          <p className="compare-title">1973 &mdash; the Twin Towers</p>
          <ul>
            <li>Single-glazed, narrow windows with little insulation value</li>
            <li>
              Cooled by the world's largest refrigeration plant at the time
              (60,000 tons of capacity) rather than passive design
            </li>
            <li>No solar power, no water recycling, no green roof</li>
          </ul>
        </div>
        <div className="compare-col">
          <p className="compare-title">2014 &mdash; One World Trade Center</p>
          <ul>
            <li>LEED Gold certified, on the same site</li>
            <li>Rainwater harvesting and high-efficiency glass curtain wall</li>
            <li>Built with a high share of recycled steel and concrete</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Legacy() {
  return (
    <section id="today" className="section band-ink">
      <div className="section-head">
        <span className="section-no">The site today</span>
        <h2>September 11, 2001 &mdash; and the memorial that followed</h2>
      </div>
      <ul className="fact-list fact-list-inverse">
        <li><strong>Sept 11, 2001:</strong> both towers destroyed, ≈ 2,750 killed on site</li>
        <li><strong>Memorial:</strong> “Reflecting Absence” by Michael Arad &amp; Peter Walker</li>
        <li><strong>Design:</strong> two 1-acre pools in the towers' footprints, victims' names on bronze</li>
        <li><strong>Opened:</strong> memorial 2011 · museum 2014</li>
        <li></li>
      </ul>

      <div className="pools">
        <figure className="pool">
          {/* Replace src below with the North Pool photo's Special:FilePath URL,
              e.g. https://commons.wikimedia.org/wiki/Special:FilePath/FILE_NAME.jpg?width=500 */}
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TU2cclLo2yd9skCP_CoolrDv7PmAG3IBflnjL3VyPe3gP9aaab_EHfNNdC-R90fZhkdeRihdE0vjeMRTIfm5Q4af0wxGy5CV9n0HyigFPGI_I0tlRkGnU-JsaOXg3aeCrdgcGJz6yo9V3A=w203-h304-k-no"
            alt="North Pool, National September 11 Memorial"
          />
          <figcaption>North Pool &mdash; footprint of the North Tower</figcaption>
        </figure>
        <figure className="pool">
          {/* Replace src below with the South Pool photo's Special:FilePath URL */}
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmfb5EeA8cV4vHoL1eT9LLr-t5vDOKXrK1p-IXqH0nqCva5mErgsUG99RgnGh57ML7lm1vmV-uG8wxUqTBPvIDqPgCpjovxz7afLifK5SCtn-MZdCpCnBDkPo0adiMOzya00eVgOA=w203-h114-k-no"
            alt="South Pool, National September 11 Memorial"
          />
          <figcaption>South Pool &mdash; footprint of the South Tower</figcaption>
        </figure>
      </div>

      <div className="video-embed">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1629352792225055%2F&show_text=false&width=267&t=0"
          width="267"
          height="476"
          allowFullScreen="false"
          allow="autoplay; encrypted-media"
        />
      </div>
    </section>
  );
}

function Opinions() {
  const students = ["BOHIC Axel", "CARRE Victor", "FRAPPA Damien"];
  return (
    <section id="opinions" className="section band-paper">
      <div className="section-head">
        <span className="section-no">Personal opinion</span>
        <h2>What the team thinks</h2>
      </div>
      <div className="opinions-grid">
        {students.map((name) => (
          <blockquote className="opinion" key={name}>
            <p>Write your personal opinion about the building here.</p>
            <cite>{name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Sources: Wikipedia, National September 11 Memorial &amp; Museum.</p>
      <p>
        STI2D &mdash; Technical English project, Made by Damien Frappa with{" "}
        <img src={reactLogo} alt="React logo" className="react-logo" />
        ReactJS.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="wtc">
      <nav className="top-nav">
        <span>World Trade Center</span>
        <span>1973 – 2001</span>
      </nav>
      <Hero />
      <Location />
      <Timeline />
      <Architect />
      <SizeShape />
      <Materials />
      <CostUse />
      <Environment />
      <Legacy />
      <Opinions />
      <Footer />
    </div>
  );
}
