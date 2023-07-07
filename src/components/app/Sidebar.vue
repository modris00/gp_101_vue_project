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

          <li class="nav-header text-success">Human Resource</li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users text-success"></i>
              <p>
                Admins
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'admins.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'admins' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'admins.archive' }" class="nav-link">
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-hands-helping text-success"></i>
              <p>
                Donors
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'donors.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'donors' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'donors.archive' }" class="nav-link">
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user-plus text-success"></i>
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
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'beneficiaries' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'beneficiaries.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-caravan text-success"></i>
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
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'suppliers' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'suppliers.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header text-primary">Countries</li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-flag text-primary"></i>
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
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'countries' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'countries.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-city text-primary"></i>
              <p>
                Cities
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'cities.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'cities' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'cities.archive' }" class="nav-link">
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-building text-primary"></i>
              <p>
                Areas
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'areas.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'areas' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'areas.archive' }" class="nav-link">
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header text-warning">Campaigns</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fas fa-list text-sm"></i> -->
              <!-- <i class=" nav-icon fa-solid fa-list-tree"></i> -->
              <i class="nav-icon fas fa-server text-warning"></i>
              <p>
                Campaign
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaigns.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'campaigns' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaigns.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fas fa-list text-sm"></i> -->
              <!-- <i class=" nav-icon fa-solid fa-list-tree"></i> -->
              <i class="nav-icon fas fa-hands-helping text-warning"></i>
              <p>
                Campaign Donor
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaigns-donors.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaigns-donors' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaigns-donors.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fas fa-list text-sm"></i> -->
              <!-- <i class=" nav-icon fa-solid fa-list-tree"></i> -->
              <i class="nav-icon fas fa-user-plus text-warning"></i>
              <p>
                Campaign Beneficiary
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaignBeneficiary.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaignBeneficiary' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaignBeneficiary.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file text-warning"></i>
              <p>
                Campaign Operations
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaign-operations.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaign-operations' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaign-operations.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file text-warning"></i>
              <p>
                Campaign Services
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaignService.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'campaignService' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'campaignService.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header text-info">Categories & Services</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-boxes text-info"></i>
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
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'categories' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'categories.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class=" fas fa-list"></i> -->
              <i class="nav-icon fas fa-box-open text-info"></i>

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
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'sub-categories' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'sub-categories.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-dolly text-info"></i>
              <p>
                Services
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'services.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'services' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'services.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header"><span class="currency">Finance</span></li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-coins currency"></i>

              <p>
                Currencies
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'currencies.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'currencies' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'currencies.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file-invoice-dollar currency"></i>

              <p>
                Bills
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'bills.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'bills' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'bills.archive' }" class="nav-link">
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header text-light">
            <span class="contact">communication</span>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-question fa-lg contact"> </i>
              <p>
                FAQ
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'faqs.create' }" class="nav-link">
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'faqs' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'faqs.archive' }" class="nav-link">
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-comments contact"></i>
              <p>
                Contact Requests
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <!-- <router-link
                  :to="{ name: 'contactRequests.create' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-plus text-sm"></i>
                  <p>Create</p>
                </router-link> -->
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'contactRequests' }" class="nav-link">
                  <i class="nav-icon fas fa-list text-sm"></i>
                  <p>Read</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'contactRequests.archive' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-archive text-sm"></i>
                  <p>Archive</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header text-danger">Settings</li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-sign-out-alt text-danger"></i>
              <p>Logout</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-unlock-alt text-danger"></i>
              <p>Change Password</p>
            </a>
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

<style scoped>
.currency {
  color: #4ee681;
}
.contact {
  color: #651ae8;
}
</style>
