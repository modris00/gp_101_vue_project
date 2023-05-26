<template>
  <div class="wrapper">

    <!-- Navbar -->
    <NavbarComponent />
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <SidebarComponent />
    <!-- /.main Sidebar Container -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <ContentHeaderComponent mainTitle="Dashboard" subTitle="Home" />
      <!-- /.content-header -->

      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <router-view />
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <FooterComponent />

  </div>
  <!-- ./wrapper -->
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import FooterComponent from "./components/Footer.vue";
import SidebarComponent from "./components/Sidebar.vue";
import ContentHeaderComponent from "./components/ContentHeader.vue";
export default {
  components: { NavbarComponent, FooterComponent, SidebarComponent, ContentHeaderComponent, },

}
</script>

