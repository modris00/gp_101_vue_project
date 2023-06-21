import { createRouter, createWebHistory } from "vue-router";

import TestView from "../views/TestView.vue"; //For Testing
import HomeView from "../views/HomeView.vue"; //For Testing

import SuppliersView from "../views/Suppliers/IndexSuppliers.vue";
import CreateSupplierView from "../views/Suppliers/CreateSupplier.vue";
import EditSupplierView from "../views/Suppliers/EditSupplier.vue";

import CountriesView from "../views/Countries/IndexCountries.vue";
import CreateCountryView from "../views/Countries/CreateCountry.vue";
// Model Faq
import FaqsView from '../views/Faq/IndexFaq.vue'
import CreateFaqView from '../views/Faq/CreateFaq.vue'
import EditFaqView from '../views/Faq/EditFaq.vue'
// Model Admin
import AdminsView from '../views/Admin/IndexAdmin.vue'
import EditAdmin from '../views/Admin/EditAdmin.vue'
import CreateAdminView from '../views/Admin/CreateAdmin.vue'

// Model Categories
import CategoriesView from '../views/Category/IndexCategory.vue'
import CreateCategoryView from '../views/Category/CreateCategory.vue'
import EditCategoryView from '../views/Category/EditCategory.vue'

// Model subCategories
import SubCategoriesView from '../views/SubCategory/IndexSubCategory.vue'
import CreateSubCategoryView from '../views/SubCategory/CreateSubCategory.vue'
import EditSubCategoryView from '../views/SubCategory/EditSubCategory.vue'

// Model Donor
import DonorView from '../views/Donor/IndexDonor.vue'
import CreateDonorView from '../views/Donor/CreateDonor.vue'
import EditDonorView from '../views/Donor/EditDonor.vue'



const routes = [
  { path: "/", component: HomeView },

  { path: "/test", component: TestView },

  {
    path: "/suppliers",
    name: "suppliers",
    component: SuppliersView,
    // children: [],
  },
  { path: "/suppliers/create", name: "suppliers.create", component: CreateSupplierView, },

  {
    path: "/countries",
    name: "countries",
    component: CountriesView,
    // children: [],
  },
  { path: "/countries/create", name: "countries.create", component: CreateCountryView, },
  {
    path: '/faqs',
    name: 'faqs',
    component: FaqsView
  },
  {
    path: '/faq/create',
    name: 'faqs.create',
    component: CreateFaqView
  },
  {
    path: '/faqs/:id/edit',
    name: 'faqs.edit',
    component: EditFaqView
  },
  {
    path: '/sub-categories',
    name: 'sub-categories',
    component: SubCategoriesView
  },
  {
    path: '/sub-categories/create',
    name: 'sub-categories.create',
    component: CreateSubCategoryView
  },
  {
    path: '/sub-categories/:id/edit',
    name: 'sub-categories.edit',
    component: EditSubCategoryView
  }
  ,
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/category/create',
    name: 'categories.create',
    component: CreateCategoryView
  },
  {
    path: '/category/:id/edit',
    name: 'categories.edit',
    component: EditCategoryView
  }, {
    path: '/admins',
    name: 'admins',
    component: AdminsView
  }, {
    path: '/admin/create',
    name: 'admins.create',
    component: CreateAdminView
  },
  {
    path: '/admin/:id/edit',
    name: 'admins.edit',
    component: EditAdmin
  }
  ,
  {
    path: '/donors',
    name: 'donors',
    component: DonorView
  },
  {
    path: '/donor/create',
    name: 'donors.create',
    component: CreateDonorView
  },
  {
    path: '/donor/:id/edit',
    name: 'donors.edit',
    component: EditDonorView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
