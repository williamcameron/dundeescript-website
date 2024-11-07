We are very grateful to all our sponsors for supporting our meetups. If you are interested in sponsoring, please contact us.

<div class="sponsors">
<div class="sponsor">
  <img alt="CyberQuarter" src="/images/sponsors/abertay-cyber-quarter-logo.jpg">
  <p>
    <span class="sponsor-name">Abertay Cyber Quarter</span> - <span class="sponsor-description">The CyberQuarter provide us with an amazing venue to host our meetups. We are very grateful for their support.</span>
  </p>
</div>
<div class="sponsor">
  <img alt="STV Player" src="/images/sponsors/stv-player-logo.png">
  <p>
    <span class="sponsor-name">STV Player</span> - <span class="sponsor-description">STV Player sponsor refreshments and snacks for our meetups. We are very grateful for their support.</span>
  </p>
</div>
</div>


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
