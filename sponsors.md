# Sponsors

We are very grateful to all our sponsors for supporting our meetups. If you are interested in sponsoring, please contact us.

<SponsorsCarousel>
  <div class="sponsor-card">
    <a href="https://www.abertay.ac.uk/business/cyberquarter/" target="_blank">
      <img alt="CyberQuarter" src="/images/sponsors/abertay-cyber-quarter-logo.jpg">
      <div class="name">Abertay Cyber Quarter</div>
    </a>
  </div>
  <div class="sponsor-card">
    <a href="https://player.stv.tv" target="_blank">
      <img alt="STV Player" src="/images/sponsors/stv-player-logo.png">
      <div class="name">STV Player</div>
    </a>
  </div>
  <div class="sponsor-card">
    <a href="https://www.mtc.co.uk" target="_blank">
      <img alt="mtc" src="/images/sponsors/mtc.png">
      <div class="name">mtc.</div>
    </a>
  </div>
</SponsorsCarousel>


<style>
  .sponsors {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .sponsor img {
    border-radius: 25px;
    width: 100%;
  }

  .sponsor-name {
    font-weight: bold;
  }

  .sponsor-description {
    font-style: italic;
  }

  @media (max-width: 600px) {
    .sponsors {
      grid-template-columns: 1fr;
    }

    html .sponsor {
      border-bottom: 2px solid black;
    }

    html.dark .sponsor {
      border-bottom: 2px solid #DFDFD7;
    }
  }
</style>
