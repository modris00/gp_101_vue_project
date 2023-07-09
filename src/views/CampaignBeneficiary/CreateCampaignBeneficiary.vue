<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create CampaignBeneficiary</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createCampaignBeneficiary">
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
                <option value="finished">Finished</option>
                <option value="not_finished">Not Finished</option>
              </select>
            </div>

            <div class="form-group">
              <label for="campaign_id">Campaign ID</label>
              <input
                type="number"
                v-model="campaign_id"
                class="form-control"
                placeholder="Enter campaign id"
              />
            </div>

            <div class="form-group">
              <label for="beneficiary_id">Beneficiary ID</label>
              <input
                type="number"
                v-model="beneficiary_id"
                class="form-control"
                placeholder="Enter beneficiary id"
              />
            </div>

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Create</button>
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
  data() {
    return {
      // campaignBeneficiary: "",
      amount: "",
      status: "",
      description: "",
      campaign_id: "",
      beneficiary_id: "",
    };
  },
  methods: {
    createCampaignBeneficiary() {
      this.$axios
        .post(`/api/campaigns-beneficiaries`, {
          amount: this.amount,
          status: this.status,
          description: this.description,
          campaign_id: this.campaign_id,
          beneficiary_id: this.beneficiary_id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);

          // redirect view index All Campaigns-donors
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
  },
};
</script>

<style></style>
