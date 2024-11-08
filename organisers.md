
# Organisers

Meet the organisers! If you see us at the meetup or anywhere else around Dundee, be sure to say hello / introduce yourself.

<div class="organisers">
<div class="organiser">
  <img alt="william" src="/images/organisers/william.jpg" />
  <p>
    <span class="organiser-name">William Cameron</span> - <span class="pronouns">he/him</span> - Principal Engineer @ STV Player, Spends his time watching Netflix and coding React and Node.js
  </p>
</div>
<div class="organiser">
  <img alt="placeholder" src="/images/organisers/placeholder.jpg" />
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
