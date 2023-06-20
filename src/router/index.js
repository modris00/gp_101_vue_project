import { createRouter, createWebHistory } from "vue-router";

import TestView from "../views/TestView.vue"; //For Testing
import HomeView from "../views/HomeView.vue"; //For Testing

import SuppliersView from "../views/suppliers/IndexSuppliers.vue";
import CreateSupplierView from "../views/suppliers/CreateSupplier.vue";
import EditSupplierView from "../views/suppliers/EditSupplier.vue";

import CountriesView from "../views/countries/IndexCountries.vue";
import CreateCountryView from "../views/countries/CreateCountry.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
