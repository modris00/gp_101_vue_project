import { createRouter, createWebHistory } from "vue-router";
import { checkAuth } from "@/plugins/CheckAuth";
import store from "@/store/index";

import TestView from "../views/TestView.vue"; //For Testing
import DataView from "../views/DataView.vue"; //For Testing
import HomeView from "../views/HomeView.vue";

import SuppliersView from "../views/Suppliers/IndexSuppliers.vue";
import CreateSupplierView from "../views/Suppliers/CreateSupplier.vue";
import EditSupplierView from "../views/Suppliers/EditSupplier.vue";
import ArchiveSupplierView from "../views/Suppliers/ArchiveSupplier.vue";
// Model Faq
import FaqsView from "../views/Faq/IndexFaq.vue";
import CreateFaqView from "../views/Faq/CreateFaq.vue";
import EditFaqView from "../views/Faq/EditFaq.vue";
import ArchiveFaqView from "../views/Faq/ArchiveFaq.vue";
// Model Admin
import AdminsView from "../views/Admin/IndexAdmin.vue";
import EditAdminView from "../views/Admin/EditAdmin.vue";
import CreateAdminView from "../views/Admin/CreateAdmin.vue";
import ArchiveAdminView from "../views/Admin/ArchiveAdmin.vue";
// Model Categories
import CategoriesView from "../views/Category/IndexCategory.vue";
import CreateCategoryView from "../views/Category/CreateCategory.vue";
import EditCategoryView from "../views/Category/EditCategory.vue";
import ArchiveCategoryView from "../views/Category/ArchiveCategory.vue";

// Model subCategories
import SubCategoriesView from "../views/SubCategory/IndexSubCategory.vue";
import CreateSubCategoryView from "../views/SubCategory/CreateSubCategory.vue";
import EditSubCategoryView from "../views/SubCategory/EditSubCategory.vue";
import ArchiveSubCategoriesView from "../views/SubCategory/ArchiveSubCategory.vue";
// Service
import CreateServiceView from "../views/Service/CreateService.vue";
import IndexServiceView from "../views/Service/IndexService.vue";
import EditServiceView from "../views/Service/EditService.vue";
import ArchiveServiceView from "../views/Service/ArchiveService.vue";

// Model Donor
import DonorView from "../views/Donor/IndexDonor.vue";
import CreateDonorView from "../views/Donor/CreateDonor.vue";
import EditDonorView from "../views/Donor/EditDonor.vue";
import ArchiveDonorView from "../views/Donor/ArchiveDonor.vue";

import CampaignDonorDetailsB from "../views/Donor/CampaignDonorDetailsB.vue";
import DonorCampaignDetails from "../views/Donor/DonorCampaignDetails.vue";


// Bills
import BillView from "../views/Bills/IndexBill.vue";
import CreateBillView from "../views/Bills/CreateBill.vue";
import EditBillView from "../views/Bills/EditBill.vue";
import ArchiveBillView from "../views/Bills/ArchiveBill.vue";

// Currencies
import CurrencyView from "../views/Currency/IndexCurrency.vue";
import CreateCurrencyView from "../views/Currency/CreateCurrency.vue";
import EditCurrencyView from "../views/Currency/EditCurrency.vue";
import ArchiveCurrencyView from "../views/Currency/ArchiveCurrency.vue";

// Campaigns CampaignDonorDetails
import CampaignsView from "../views/Campaign/IndexCampaign.vue";
import CampaignServiceDetails from "../views/Campaign/CampaignServiceDetails.vue";
import CampaignDonorDetails from "../views/Campaign/CampaignDonorDetails.vue";
import CampaignBeneficiaryDetails from "../views/Campaign/CampaignBeneficiaryDetails.vue";
import CreateCampaignView from "../views/Campaign/CreateCampaign.vue";
import EditCampaignView from "../views/Campaign/EditCampaign.vue";
import ArchiveCampaignView from "../views/Campaign/ArchiveCampaign.vue";
// Roles
import RoleView from "../views/Role/IndexRole.vue";
import CreateRoleView from "../views/Role/CreateRole.vue";
import EditRoleView from "../views/Role/EditRole.vue";
// CampaignsDonor

import CampaignsDonorView from "../views/CampaignDonor/IndexCampaignDonor.vue";
import CreateCampaignDonorView from "../views/CampaignDonor/CreateCampaignDonor.vue";
import EditCampaignDonorView from "../views/CampaignDonor/EditCampaignDonor.vue";
import ArchiveCampaignsDonorView from "../views/CampaignDonor/ArchiveCampaignDonor.vue";

//CampaignOperation
import CampaignOperationView from "../views/CampaignOperation/IndexCampaignOperation.vue";
import CreateCampaignOperationView from "../views/CampaignOperation/CreateCampaignOperation.vue";
import EditCampaignOperationView from "../views/CampaignOperation/EditCampaignOperation.vue";
import ArchiveCampaignOperationView from "../views/CampaignOperation/ArchiveCampaignOperation.vue";

import CountriesView from "../views/Countries/IndexCountries.vue";
import CreateCountryView from "../views/Countries/CreateCountry.vue";
import EditCountryView from "../views/Countries/EditCountry.vue";
import ArchiveCountryView from "../views/Countries/ArchiveCountry.vue";

import CitiesView from "../views/Cities/IndexCities.vue";
import CreateCityView from "../views/Cities/CreateCity.vue";
import EditCityView from "../views/Cities/EditCity.vue";
import ArchiveCityView from "../views/Cities/ArchiveCity.vue";

import AreasView from "../views/Areas/IndexAreas.vue";
import CreateAreaView from "../views/Areas/CreateArea.vue";
import EditAreaView from "../views/Areas/EditArea.vue";
import ArchiveAreaView from "../views/Areas/ArchiveArea.vue";

import BeneficiariesView from "../views/Beneficiaries/IndexBeneficiaries.vue";
import CreateBeneficiaryView from "../views/Beneficiaries/CreateBeneficiary.vue";
import EditBeneficiaryView from "../views/Beneficiaries/EditBeneficiary.vue";
import ArchiveBeneficiaryView from "../views/Beneficiaries/ArchiveBeneficiary.vue";
import BeneficiaryCampaignDetails from "../views/Beneficiaries/BeneficiaryCampaignDetails.vue";

import ContactRequestsView from "../views/ContactRequests/IndexContactRequests.vue";
// import CreateContactRequestView from "../views/ContactRequests/CreateContactRequest.vue";
import EditContactRequestView from "../views/ContactRequests/EditContactRequest.vue";
import ArchiveContactRequestsView from "../views/ContactRequests/ArchiveContactRequests.vue";

import CampaignBeneficiaryView from "../views/CampaignBeneficiary/IndexCampaignBeneficiaries.vue";
import CreateCampaignBeneficiaryView from "../views/CampaignBeneficiary/CreateCampaignBeneficiary.vue";
import EditCampaignBeneficiaryView from "../views/CampaignBeneficiary/EditCampaignBeneficiary.vue";
import ArchiveCampaignBeneficiaryView from "../views/CampaignBeneficiary/ArchiveCampaignBeneficiary.vue";

import CampaignServicesView from "../views/CampaignService/IndexCampaignServices.vue";
import CreateCampaignServiceView from "../views/CampaignService/CreateCampaignService.vue";
import EditCampaignServiceView from "../views/CampaignService/EditCampaignService.vue";
import ArchiveCampaignServicesView from "../views/CampaignService/ArchiveCampaignServices.vue";

import rolePermisssion from "../views/RolePermisssion/rolePermission.vue";

import LoginView from "../views/Auth/Login.vue";
import UserView from "../views/Auth/User.vue";

const routes = [
  {
    path: "/role-permisssion/:id",
    component: rolePermisssion,
    name: "rolePermisssion",
    // props: true,
  },
  {
    path: "/",
    component: HomeView,
    name: "home",
    // beforeEnter: (to, from, next) => {
    //   if (store.state.authenticated == true) {
    //     next();
    //   } else {
    //     next({ name: "login", params: { guard: "admin" } });
    //   }
    // },
  },

  {
    path: "/login/:guard",
    component: LoginView,
    name: "login",
    // beforeEnter: (to, from, next) => {
    //   if (store.state.authenticated == true) {
    //     next({ name: "home" });
    //   } else {
    //     next();
    //   }
    // },
  },
  { path: "/logout", name: "logout" },
  { path: "/user", component: UserView, name: "user" },

  { path: "/test", component: TestView, name: "test" },
  { path: "/data", component: DataView, name: "data" },
  {
    path: "/services",
    name: "services",
    component: IndexServiceView,
  },
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
  {
    path: "/services/archive",
    name: "services.archive",
    component: ArchiveServiceView,
  },
  {
    path: "/roles",
    name: "roles",
    component: RoleView,
  },
  {
    path: "/role/create",
    name: "roles.create",
    component: CreateRoleView,
  },
  {
    path: "/role/:id/edit",
    name: "roles.edit",
    component: EditRoleView,
  },

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
  {
    path: "/campaigns-donors/archive",
    name: "campaigns-donors.archive",
    component: ArchiveCampaignsDonorView,
  },

  {
    path: "/campaigns",
    name: "campaigns",
    component: CampaignsView,
  },
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
  {
    path: "/campaign/:id/service-details",
    name: "service-details",
    component: CampaignServiceDetails,
  },
  {
    path: "/campaign/:id/beneficiary-details",
    name: "beneficiary-details",
    component: CampaignBeneficiaryDetails,
  },
  {
    path: "/campaign/:id/donor-details",
    name: "donor-details",
    component: CampaignDonorDetails,
  },
  {
    path: "/campaign/archive",
    name: "campaigns.archive",
    component: ArchiveCampaignView,
  },
  //campaign-operations
  {
    path: "/campaign-operations",
    name: "campaign-operations",
    component: CampaignOperationView,
  },
  {
    path: "/campaign-operation/create",
    name: "campaign-operations.create",
    component: CreateCampaignOperationView,
  },
  {
    path: "/campaign-operations/:id/edit",
    name: "campaign-operations.edit",
    component: EditCampaignOperationView,
  },
  {
    path: "/campaign-operations/archive",
    name: "campaign-operations.archive",
    component: ArchiveCampaignOperationView, //
  },

  {
    path: "/suppliers",
    name: "suppliers",
    component: SuppliersView,
  }, //children[]
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
  {
    path: "/suppliers/archive",
    name: "suppliers.archive",
    component: ArchiveSupplierView,
  },

  {
    path: "/countries",
    name: "countries",
    component: CountriesView,
  },
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
  {
    path: "/countries/archive",
    name: "countries.archive",
    component: ArchiveCountryView,
  },

  {
    path: "/faqs",
    name: "faqs",
    component: FaqsView,
  },
  {
    path: "/faq/create",
    name: "faqs.create",
    component: CreateFaqView,
  },
  {
    path: "/faqs/:id/edit",
    name: "faqs.edit",
    component: EditFaqView,
  },
  {
    path: "/faqs/archive",
    name: "faqs.archive",
    component: ArchiveFaqView,
  },

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
  {
    path: "/sub-categories/archive",
    name: "sub-categories.archive",
    component: ArchiveSubCategoriesView,
  },

  {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
  },
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
  {
    path: "/categories/archive",
    name: "categories.archive",
    component: ArchiveCategoryView,
  },

  {
    path: "/admins",
    name: "admins",
    component: AdminsView,
  },
  {
    path: "/admin/create",
    name: "admins.create",
    component: CreateAdminView,
  },
  {
    path: "/admin/:id/edit",
    name: "admins.edit",
    component: EditAdminView,
  },
  {
    path: "/admins/archive",
    name: "admins.archive",
    component: ArchiveAdminView,
  },

  {
    path: "/donors",
    name: "donors",
    component: DonorView,
  },
  {
    path: "/donor/create",
    name: "donors.create",
    component: CreateDonorView,
  },
  {
    path: "/donor/:id/edit",
    name: "donors.edit",
    component: EditDonorView,
  },
  {
    path: "/donors/archive",
    name: "donors.archive",
    component: ArchiveDonorView,
  },

  {
    path: "/donors/:id/campaign-details",
    name: "donor-campaign-details",
    component: DonorCampaignDetails,
  },


  {
    path: "/cities",
    name: "cities",
    component: CitiesView,
  }, //children[]
  {
    path: "/cities/create",
    name: "cities.create",
    component: CreateCityView,
  },
  {
    path: "/cities/:id/edit",
    name: "cities.edit",
    component: EditCityView,
  },

  {
    path: "/cities/archive",
    name: "cities.archive",
    component: ArchiveCityView,
  },

  {
    path: "/areas",
    name: "areas",
    component: AreasView,
  }, //children[]
  {
    path: "/areas/create",
    name: "areas.create",
    component: CreateAreaView,
  },
  {
    path: "/areas/:id/edit",
    name: "areas.edit",
    component: EditAreaView,
  },
  {
    path: "/areas/archive",
    name: "areas.archive",
    component: ArchiveAreaView,
  },

  {
    path: "/bills",
    name: "bills",
    component: BillView,
  }, //children[]
  {
    path: "/bill/create",
    name: "bills.create",
    component: CreateBillView,
  },
  {
    path: "/bill/:id/edit",
    name: "bills.edit",
    component: EditBillView,
  },
  {
    path: "/bills/archive",
    name: "bills.archive",
    component: ArchiveBillView,
  },

  {
    path: "/contact-requests",
    name: "contactRequests",
    component: ContactRequestsView,
  }, //children[]
  // {
  //   path: "/contact-requests/create",
  //   name: "contactRequests.create",
  //   component: CreateContactRequestView,
  // },
  {
    path: "/contact-requests/:id/edit",
    name: "contactRequests.edit",
    component: EditContactRequestView,
  },
  {
    path: "/contact-requests/archive",
    name: "contactRequests.archive",
    component: ArchiveContactRequestsView,
  },

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
  {
    path: "/beneficiaries/archive",
    name: "beneficiaries.archive",
    component: ArchiveBeneficiaryView,
  },
  {
    path: "/beneficiaries/:id/campaign-details",
    name: "beneficiary-campaign-details",
    component: BeneficiaryCampaignDetails,
  },


  {
    path: "/currencies",
    name: "currencies",
    component: CurrencyView,
  }, //children[]
  {
    path: "/currency/create",
    name: "currencies.create",
    component: CreateCurrencyView,
  },
  {
    path: "/currency/:id/edit",
    name: "currencies.edit",
    component: EditCurrencyView,
  },
  {
    path: "/currencies/archive",
    name: "currencies.archive",
    component: ArchiveCurrencyView,
  },
  {
    path: "/campaign-beneficiary",
    name: "campaignBeneficiary",
    component: CampaignBeneficiaryView,
  }, //children[]
  {
    path: "/campaign-beneficiary/create",
    name: "campaignBeneficiary.create",
    component: CreateCampaignBeneficiaryView,
  },
  {
    path: "/campaign-beneficiary/:id/edit",
    name: "campaignBeneficiary.edit",
    component: EditCampaignBeneficiaryView,
  },
  {
    path: "/campaign-beneficiary/archive",
    name: "campaignBeneficiary.archive",
    component: ArchiveCampaignBeneficiaryView,
  },

  {
    path: "/campaign-services",
    name: "campaignService",
    component: CampaignServicesView,
  }, //children[]
  {
    path: "/campaign-services/create",
    name: "campaignService.create",
    component: CreateCampaignServiceView,
  },
  {
    path: "/campaign-services/:id/edit",
    name: "campaignService.edit",
    component: EditCampaignServiceView,
  },
  {
    path: "/campaign-services/archive",
    name: "campaignService.archive",
    component: ArchiveCampaignServicesView,
  },
  {
    path: "/campaign/campaign-donor-details",
    name: "campaign-donor-details",
    component: CampaignDonorDetailsB,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
