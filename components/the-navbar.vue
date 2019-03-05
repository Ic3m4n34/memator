<template>
  <div class="the-navbar">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item">
              Über mich
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Tierphysiotherapie
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Therapieangebot
                </a>
                <a class="navbar-item">
                  Behandlungsablauf
                </a>
                <a class="navbar-item">
                  Einsatzgebiete
                </a>
                <a class="navbar-item">
                  Behandlungskosten
                </a>
                <a class="navbar-item">
                  Schmerzen erkennen
                </a>
              </div>
            </div>
            <a class="navbar-item">
              Links
            </a>
            <a class="navbar-item">
              Kontakt
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              Social Media Icons
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style lang="scss" scoped>

</style>
