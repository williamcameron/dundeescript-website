# Sponsors

We are very grateful to all our sponsors for supporting our meetups. If you are interested in sponsoring, please contact us.

<div class="sponsors-grid">
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
</div>


<style>
  .sponsors-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: center;
  }

  .sponsor-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem;
    border-radius: 12px;
  }

  .sponsor-card img {
    width: 135px;
    height: 135px;
    object-fit: contain;
    border-radius: 8px;
    background: transparent;
  }
  
  .sponsor-card a {
    justify-items: center;
  }

  .sponsor-card .name{ margin-top: 0.5rem; font-weight: 600; text-align:center }

  @media (max-width: 900px) {
    .sponsors-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .sponsors-grid { grid-template-columns: 1fr; }
  }
</style>
