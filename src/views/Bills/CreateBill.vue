<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create Bill</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createBill">
          <div class="card-body">
            <div class="form-group">
              <label for="title">Cost</label>
              <input
                type="number"
                v-model="Bill.cost"
                class="form-control"
                id="title"
                placeholder="Enter Cost"
              />
            </div>
            <div class="form-group">
              <label for="amount">Description</label>
              <input
                type="text"
                v-model="Bill.description"
                class="form-control"
                id="amount"
                placeholder="Description"
              />
            </div>
            <div class="form-group">
              <label>Campaigns</label>
              <select class="form-control" v-model="Bill.campaign_id">
                <option value="" selected>Enter Campaign</option>
                <option
                  v-for="(item, index) in Campaigns"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.title }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>Suppliers</label>
              <select class="form-control" v-model="Bill.supplier_id">
                <option value="" selected>Enter Suppliers</option>
                <option
                  v-for="(item, index) in supplier"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>Campaign Service</label>
              <select class="form-control" v-model="Bill.campaign_service_id">
                <option value="" selected>Enter Campaign Service</option>
                <option
                  v-for="(item, index) in campaign_service"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.description }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label>Currency</label>
              <select class="form-control" v-model="Bill.currency_id">
                <option value="" selected>Enter currency</option>
                <option
                  v-for="(item, index) in currency"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Image</label>
              <div class="input-group">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    @change="onFileSelected"
                  />
                  <label class="custom-file-label" for="exampleInputFile"
                    >Choose file</label
                  >
                </div>
                <div class="input-group-append">
                  <span class="input-group-text">Upload</span>
                </div>
              </div>
            </div>

            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateBill",
  mounted() {
    this.indexCurrency();
    this.indexCampaignServices();
    this.indexSuppliers();
    this.indexCampaign();
  },
  data() {
    return {
      Bill: {
        id: "",
        cost: "",
        image: "",
        description: "",
        currency_id: "",
        campaign_id: "",
        supplier_id: "",
        campaign_service_id: "",
      },
      currency: [],
      supplier: [],
      campaign_service: [],
      Campaigns: [],
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
      console.log(event.target.files.length);
      this.Bill.image = event.target.files[0]; // maybe should be event.target.files[event.target.files.length - 1]
    },
    createBill() {
      const formData = new FormData();
      formData.append("cost", this.Bill.cost);
      formData.append("image", this.Bill.image);
      formData.append("id", this.Bill.id);
      formData.append("campaign_id", this.Bill.campaign_id);
      formData.append("description", this.Bill.description);
      formData.append("currency_id", this.Bill.currency_id);
      formData.append("supplier_id", this.Bill.supplier_id);
      formData.append("campaign_service_id", this.Bill.campaign_service_id);
      this.$axios
        .post(`/api/bills`, formData)
        .then((response) => {
          console.log(response);
          this.Bill = {
            id: "",
            cost: "",
            image: null,
            description: "",
            currency_id: "",
            campaign_id: "",
            supplier_id: "",
            campaign_service_id: "",
          };
          this.$toast.success(response.data.message);

          // redirect view index All Campaign
          this.$router.push("/bills");
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.error(error.message);
          }
        });
    },
    indexCurrency() {
      this.$axios
        .get(`/api/currencies`)
        .then((response) => {
          this.currency = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    indexSuppliers() {
      this.$axios
        .get(`/api/suppliers`)
        .then((response) => {
          console.log(response);
          this.supplier = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    indexCampaignServices() {
      this.$axios
        .get(`/api/campaigns-services`)
        .then((response) => {
          console.log(response);
          this.campaign_service = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    indexCampaign() {
      this.$axios
        .get(`/api/campaigns`)
        .then((response) => {
          this.Campaigns = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
