<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Edit CampaignBeneficiary</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form
          @submit.prevent="updateCampaignBeneficiary(this.$route.params.id)"
        >
          <div class="card-body">
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                type="number"
                v-model="amount"
                class="form-control"
                id="amount"
                placeholder="Enter Amount"
              />
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                v-model="description"
                class="form-control"
                id="description"
                placeholder="Enter description"
              />
            </div>

            <div class="form-group">
              <label>Status: </label>
              <select class="form-control" v-model="status">
                <option value="finished" :selected="status == 'finished'">
                  Finished
                </option>
                <option
                  value="not_finished"
                  :selected="status == 'not_finished'"
                >
                  Not Finished
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="campaign_id">Campaign </label>
              <select class="form-control" v-model="campaign_id">
                <option v-for="item in Campaigns" :value="item.id">
                  {{ item.title }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="beneficiary_id">Beneficiary ID</label>
              <input
                type="number"
                v-model="beneficiary_id"
                class="form-control"
                id="beneficiary_id"
                placeholder="Enter beneficiary id"
              />
            </div>

            <!-- <div class="form-group">
              <label>Donors</label>
              <select class="form-control" v-model="CampaignDonor.donor_id">
                <option value="" selected disabled>Enter Donor</option>
                <option
                  v-for="(item, index) in Donors"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div> -->

            <!-- <div class="form-group">
              <label>Campaigns</label>
              <select class="form-control" v-model="CampaignDonor.campaign_id">
                <option value="" selected>Enter Campaign</option>
                <option
                  v-for="(item, index) in Campaigns"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.title }}
                </option>
              </select>
            </div> -->

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
  name: "CreateCampaignDonor",
  mounted() {
    this.indexCampaignBeneficiary(this.$route.params.id);
    this.indexCampaign();
  },
  data() {
    return {
      campaignBeneficiary: "",
      amount: "",
      status: "",
      description: "",
      campaign_id: "",
      beneficiary_id: "",
      Campaigns: [],
    };
  },
  methods: {
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
    updateCampaignBeneficiary(id) {
      this.$axios
        .put(`/api/campaigns-beneficiaries/${id}`, {
          amount: this.amount,
          status: this.status,
          description: this.description,
          campaign_id: this.campaign_id,
          beneficiary_id: this.beneficiary_id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);

          // redirect view index All Campaigns-beneficiaries
          this.$router.push("/campaign-beneficiary");
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
    indexCampaignBeneficiary(id) {
      this.$axios
        .get(`/api/campaigns-beneficiaries/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.campaignBeneficiary = response.data.data;
          this.amount = this.campaignBeneficiary.amount;
          this.status = this.campaignBeneficiary.status;
          this.description = this.campaignBeneficiary.description;
          this.campaign_id = this.campaignBeneficiary.campaign_id;
          this.beneficiary_id = this.campaignBeneficiary.beneficiary_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
