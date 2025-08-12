
# Organisers

Meet the organisers! If you see us at the meetup or anywhere else around Dundee, be sure to say hello / introduce yourself.

<div class="organisers">
<div class="organiser">
  <img alt="william" src="/images/organisers/william.jpg" />
  <p>
    <span class="organiser-name">William Cameron</span> - <span class="pronouns">he/him</span> - Engineering Manager @ STV Player.
  </p>
</div>
  
  <div class="organiser">
  <img alt="dom" src="/images/organisers/dom.jpg" />
  <p>
    <span class="organiser-name">Dominik Subocz</span> - <span class="pronouns">he/him</span> - Frontend Developer @ mtc, computing student @ Abertay University, passionate web developer and designer with a love for sci-fi movies and creating intricate LEGO builds in his free time.
  </p>
</div>

<div class="organiser">
  <img alt="prakash" src="/images/organisers/jack.jpg" />
  <p>
    <span class="organiser-name">Jack Jefferson</span> - <span class="pronouns">he/him</span> - Backend Developer @ mtc, passionate advocate for open-source software and a strong believer in Linux as the ideal personal and development environment.
  </p>
</div>

<div class="organiser">
  <img alt="cheryl" src="/images/organisers/cheryl.jpg" />
  <p>
    <span class="organiser-name">Cheryl Torano</span> - <span class="pronouns">she/her</span> - Business Development Manager @ Abertay cyberQuarter, Cybersecurity professional and Ethical Hacker
  </p>
</div>

</div>

<style>
  .organisers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .organiser img {
    border-radius: 25px;
    width: 100%;
  }

  .organiser-name {
    font-weight: bold;
  }

  .pronouns {
    font-style: italic;
  }

  @media (max-width: 600px) {
    .organisers {
      grid-template-columns: 1fr;
    }

    html .organiser {
      border-bottom: 2px solid black;
    }

    html.dark .organiser {
      border-bottom: 2px solid #DFDFD7;
    }
  }
</style>
