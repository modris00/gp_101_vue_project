<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img
        src="@/assets/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">GP</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="@/assets/dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">User</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column nav-legacy nav-child-indent"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Suppliers
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'suppliers.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'suppliers' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Countries
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'countries.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'countries' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Cities
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'cities.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'cities' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Areas
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'areas.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'areas' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users"></i>

              <p>
                Admins
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'admins.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'admins' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-hands-helping"></i>
              <p>
                Donors
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'donors.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'donors' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fas fa-list"></i> -->
              <!-- <i class=" nav-icon fa-solid fa-list-tree"></i> -->
              <i class="nav-icon fas fa-stream"></i>
              <p>
                Category
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'categories.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'categories' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class=" fas fa-list"></i> -->
              <i class="nav-icon fas fa-stream"></i>

              <p>
                SubCategory
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'sub-categories.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'sub-categories' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-handshake"></i>
              <p>
                Services
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'services.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'services' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-question fa-lg"> </i>
              <p>
                FAQ
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'faqs.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'faqs' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Beneficiaries
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'beneficiaries.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'beneficiaries' }" class="nav-link">
                  <i class="nav-icon fas fa-list"></i>
                  <p>Read</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "SiderbarComponent",
};
</script>
