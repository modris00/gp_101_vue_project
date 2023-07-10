<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create CampaignDonor</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createCampaignDonor">
          <div class="card-body">
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                type="number"
                v-model="CampaignDonor.amount"
                class="form-control"
                id="amount"
                placeholder="Enter Amount"
              />
            </div>
            <div class="form-group">
              <label>Donors</label>
              <select class="form-control" v-model="CampaignDonor.donor_id">
                <option value="" selected>Enter Donor</option>
                <option
                  v-for="(item, index) in Donors"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
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
import axios from "axios";
export default {
  name: "CreateCampaignDonor",
  mounted() {
    this.indexDonors();
    this.indexCampaign();
  },
  data() {
    return {
      CampaignDonor: {
        id: "",
        amount: "",
        donor_id: "",
        campaign_id: "",
      },
      Donors: [],
      Campaigns: [],
    };
  },
  methods: {
    createCampaignDonor() {
      this.$axios
        .post(`/api/campaigns-donors`, this.CampaignDonor)
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);

          // redirect view index All Campaigns-donors
          this.$router.push("/campaigns-donor");
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
    indexDonors() {
      this.$axios
        .get(`/api/donors`)
        .then((response) => {
          this.Donors = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
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
