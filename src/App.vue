<template>
  <div class="wrapper">
    <NavbarComponent />
    <!---->

    <SidebarComponent />
    <!---->

    <div class="content-wrapper">
      <ContentHeaderComponent
        mainTitle="Dashboard"
        subTitle="Home"
       
      />
      <!---->

      <div class="content">
        <div class="container-fluid">
          <router-view />
          <!-- Main content -->
        </div>
      </div>
    </div>

    <FooterComponent />
    <!---->
  </div>
</template>

<script>
import NavbarComponent from "./components/app/Navbar.vue";
import FooterComponent from "./components/app/Footer.vue";
import SidebarComponent from "./components/app/Sidebar.vue";
import ContentHeaderComponent from "./components/app/ContentHeader.vue";
import axios from "axios";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ContentHeaderComponent,
  },
  mounted() {
    // this.getSuppliers();
  },
  data() {
    return {
      // suppliers: [],
    };
  },
  methods: {},
};
</script>
