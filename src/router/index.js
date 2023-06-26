import { createRouter, createWebHistory } from "vue-router";

import TestView from "../views/TestView.vue"; //For Testing
import HomeView from "../views/HomeView.vue"; //For Testing

import SuppliersView from "../views/Suppliers/IndexSuppliers.vue";
import CreateSupplierView from "../views/Suppliers/CreateSupplier.vue";
import EditSupplierView from "../views/Suppliers/EditSupplier.vue";

// Model Faq
import FaqsView from "../views/Faq/IndexFaq.vue";
import CreateFaqView from "../views/Faq/CreateFaq.vue";
import EditFaqView from "../views/Faq/EditFaq.vue";
// Model Admin
import AdminsView from "../views/Admin/IndexAdmin.vue";
import EditAdminView from "../views/Admin/EditAdmin.vue";
import CreateAdminView from "../views/Admin/CreateAdmin.vue";

// Model Categories
import CategoriesView from "../views/Category/IndexCategory.vue";
import CreateCategoryView from "../views/Category/CreateCategory.vue";
import EditCategoryView from "../views/Category/EditCategory.vue";

// Model subCategories
import SubCategoriesView from "../views/SubCategory/IndexSubCategory.vue";
import CreateSubCategoryView from "../views/SubCategory/CreateSubCategory.vue";
import EditSubCategoryView from "../views/SubCategory/EditSubCategory.vue";
// Service
import CreateServiceView from "../views/Service/CreateService.vue";
import IndexServiceView from "../views/Service/IndexService.vue";
import EditServiceView from "../views/Service/EditService.vue";

// Model Donor
import DonorView from "../views/Donor/IndexDonor.vue";
import CreateDonorView from "../views/Donor/CreateDonor.vue";
import EditDonorView from "../views/Donor/EditDonor.vue";
// Campaigns
import CampaignsView from "../views/Campaign/IndexCampaign.vue";
import CreateCampaignView from "../views/Campaign/CreateCampaign.vue";
import EditCampaignView from "../views/Campaign/EditCampaign.vue";
// CampaignsDonor
import CampaignsDonorView from "../views/CampaignDonor/IndexCampaignDonor.vue";
import CreateCampaignDonorView from "../views/CampaignDonor/CreateCampaignDonor.vue";
import EditCampaignDonorView from "../views/CampaignDonor/EditCampaignDonor.vue";

import CountriesView from "../views/Countries/IndexCountries.vue";
import CreateCountryView from "../views/Countries/CreateCountry.vue";
import EditCountryView from "../views/Countries/EditCountry.vue";

import CitiesView from "../views/Cities/IndexCities.vue";
import CreateCityView from "../views/Cities/CreateCity.vue";
import EditCityView from "../views/Cities/EditCity.vue";

import AreasView from "../views/Areas/IndexAreas.vue";
import CreateAreaView from "../views/Areas/CreateArea.vue";
import EditAreaView from "../views/Areas/EditArea.vue";

import BeneficiariesView from "../views/Beneficiaries/IndexBeneficiaries.vue";
import CreateBeneficiaryView from "../views/Beneficiaries/CreateBeneficiary.vue";
import EditBeneficiaryView from "../views/Beneficiaries/EditBeneficiary.vue";

const routes = [
  { path: "/", component: HomeView },

  { path: "/test", component: TestView },

  {
    path: "/services/create",
    name: "services.create",
    component: CreateServiceView,
  },
  {
    path: "/services/:id/edit",
    name: "services.edit",
    component: EditServiceView,
  },
  { path: "/services", name: "services", component: IndexServiceView },

  {
    path: "/campaigns-donor",
    name: "campaigns-donors",
    component: CampaignsDonorView,
  },
  {
    path: "/campaigns-donors/create",
    name: "campaigns-donors.create",
    component: CreateCampaignDonorView,
  },
  {
    path: "/campaigns-donors/:id/edit",
    name: "campaigns-donors.edit",
    component: EditCampaignDonorView,
  },

  { path: "/campaigns", name: "campaigns", component: CampaignsView },
  {
    path: "/campaign/create",
    name: "campaigns.create",
    component: CreateCampaignView,
  },
  {
    path: "/campaign/:id/edit",
    name: "campaigns.edit",
    component: EditCampaignView,
  },

  { path: "/suppliers", name: "suppliers", component: SuppliersView }, //children[]
  {
    path: "/suppliers/create",
    name: "suppliers.create",
    component: CreateSupplierView,
  },
  {
    path: "/suppliers/:id/edit",
    name: "suppliers.edit",
    component: EditSupplierView,
  },

  { path: "/countries", name: "countries", component: CountriesView },
  {
    path: "/countries/create",
    name: "countries.create",
    component: CreateCountryView,
  },
  {
    path: "/countries/:id/edit",
    name: "countries.edit",
    component: EditCountryView,
  },

  { path: "/faqs", name: "faqs", component: FaqsView },
  { path: "/faq/create", name: "faqs.create", component: CreateFaqView },
  { path: "/faqs/:id/edit", name: "faqs.edit", component: EditFaqView },

  {
    path: "/sub-categories",
    name: "sub-categories",
    component: SubCategoriesView,
  },
  {
    path: "/sub-categories/create",
    name: "sub-categories.create",
    component: CreateSubCategoryView,
  },
  {
    path: "/sub-categories/:id/edit",
    name: "sub-categories.edit",
    component: EditSubCategoryView,
  },
  { path: "/categories", name: "categories", component: CategoriesView },
  {
    path: "/category/create",
    name: "categories.create",
    component: CreateCategoryView,
  },
  {
    path: "/category/:id/edit",
    name: "categories.edit",
    component: EditCategoryView,
  },

  { path: "/admins", name: "admins", component: AdminsView },
  { path: "/admin/create", name: "admins.create", component: CreateAdminView },
  { path: "/admin/:id/edit", name: "admins.edit", component: EditAdminView },

  { path: "/donors", name: "donors", component: DonorView },
  { path: "/donor/create", name: "donors.create", component: CreateDonorView },
  { path: "/donor/:id/edit", name: "donors.edit", component: EditDonorView },

  { path: "/cities", name: "cities", component: CitiesView }, //children[]
  { path: "/cities/create", name: "cities.create", component: CreateCityView },
  { path: "/cities/:id/edit", name: "cities.edit", component: EditCityView },

  { path: "/areas", name: "areas", component: AreasView }, //children[]
  { path: "/areas/create", name: "areas.create", component: CreateAreaView },
  { path: "/areas/:id/edit", name: "areas.edit", component: EditAreaView },

  {
    path: "/beneficiaries",
    name: "beneficiaries",
    component: BeneficiariesView,
  }, //children[]
  {
    path: "/beneficiaries/create",
    name: "beneficiaries.create",
    component: CreateBeneficiaryView,
  },
  {
    path: "/beneficiaries/:id/edit",
    name: "beneficiaries.edit",
    component: EditBeneficiaryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
