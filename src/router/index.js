import { createRouter, createWebHistory } from "vue-router";

import TestView from "../views/TestView.vue"; //For Testing
import HomeView from "../views/HomeView.vue"; //For Testing

import SuppliersView from "../views/Suppliers/IndexSuppliers.vue";
import CreateSupplierView from "../views/Suppliers/CreateSupplier.vue";
import EditSupplierView from "../views/Suppliers/EditSupplier.vue";

import CountriesView from "../views/Countries/IndexCountries.vue";
import CreateCountryView from "../views/Countries/CreateCountry.vue";

import CitiesView from "../views/Cities/IndexCities.vue";
import CreateCityView from "../views/Cities/CreateCity.vue";

import AreasView from "../views/Areas/IndexAreas.vue";
import CreateAreaView from "../views/Areas/CreateArea.vue";

const routes = [

  { path: "/", component: HomeView },

  { path: "/test", component: TestView },

  { path: "/suppliers", name: "suppliers", component: SuppliersView }, //children[]
  { path: "/suppliers/create", name: "suppliers.create", component: CreateSupplierView, },

  { path: "/countries", name: "countries", component: CountriesView, },
  { path: "/countries/create", name: "countries.create", component: CreateCountryView, },

  { path: "/cities", name: "cities", component: CitiesView },  //children[]
  { path: "/cities/create", name: "cities.create", component: CreateCityView, },

  { path: "/areas", name: "areas", component: AreasView },  //children[]
  { path: "/areas/create", name: "areas.create", component: CreateAreaView, },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
