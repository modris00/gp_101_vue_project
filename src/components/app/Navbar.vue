<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Home</a>
        <!-- <router-link to="#" class="nav-link">Home</router-link> -->
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fas fa-cog"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div class="dropdown-divider"></div>
          <a href="#" @click.prevent="_cookie()" class="dropdown-item">
            <i class="fas fa-sign-out-alt"></i> Logout
          </a>

          <div class="dropdown-divider"></div>

          <div class="dropdown-divider"></div>

          <div class="dropdown-divider"></div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavbarComponent",
  methods: {
    _cookie() {
      this.$axios.get("/sanctum/csrf-cookie").then((response) => {
        this.logout();
      });
    },
    logout() {
      this.$axios
        .get("/api/logout")
        .then((response) => {
          // localStorage.setItem("isLoggedIn", "0");
          localStorage.clear();
          this.$store.commit("setAuthentication", false);
          this.$router.push("/login/admin");
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.message);
        });
    },
  },
};
</script>
