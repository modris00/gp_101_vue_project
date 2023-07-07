<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Edit CampaignService</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="updateCampaignService(this.$route.params.id)">
          <div class="card-body">
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                type="number"
                v-model="amount"
                class="form-control"
                placeholder="Enter Amount"
                id="amount"
              />
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                v-model="description"
                class="form-control"
                placeholder="Enter description"
                id="description"
              />
            </div>

            <div class="form-group">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  v-model="status"
                  id="status"
                />
                <label class="custom-control-label" for="status">Status</label>
              </div>
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
              <label for="service_id">Service ID</label>
              <input
                type="number"
                v-model="service_id"
                class="form-control"
                placeholder="Enter service id"
              />
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label>Start Date:</label>
                <div
                  class="input-group date"
                  id="reservationdate"
                  data-target-input="nearest"
                >
                  <input
                    type="date"
                    class="form-control datetimepicker-input"
                    v-model="start_date"
                    data-target="#reservationdate"
                  />
                  <div
                    class="input-group-append"
                    data-target="#reservationdate"
                    data-toggle="datetimepicker"
                  >
                    <div class="input-group-text">
                      <i class="fa fa-calendar"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>End Date:</label>
                <div
                  class="input-group date"
                  id="reservationdate"
                  data-target-input="nearest"
                >
                  <input
                    type="date"
                    v-model="end_date"
                    class="form-control datetimepicker-input"
                    data-target="#reservationdate"
                  />
                  <div
                    class="input-group-append"
                    data-target="#reservationdate"
                    data-toggle="datetimepicker"
                  >
                    <div class="input-group-text">
                      <i class="fa fa-calendar"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
  // name: "CreateCampaignDonor",
  mounted() {
    this.getCampaignService(this.$route.params.id);
  },
  data() {
    return {
      campaignService: "",

      amount: "",
      status: "",
      description: "",

      start_date: "",
      end_date: "",

      campaign_id: "",
      service_id: "",
    };
  },
  methods: {
    updateCampaignService(id) {
      axios
        .put(`${this.$store.state.url}/campaigns-services/${id}`, {
          amount: this.amount,
          status: this.status,
          description: this.description,

          campaign_id: this.campaign_id,
          service_id: this.service_id,

          start_date: this.start_date,
          end_date: this.end_date,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);

          // redirect view index All Campaigns-beneficiaries
          this.$router.push("/campaign-services");
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
    getCampaignService(id) {
      axios
        .get(`${this.$store.state.url}/campaigns-services/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.campaignService = response.data.data;
          this.amount = this.campaignService.amount;
          this.status = this.campaignService.status == 1 ? true : false;
          this.description = this.campaignService.description;
          this.start_date = this.campaignService.start_date;
          this.end_date = this.campaignService.end_date;
          this.campaign_id = this.campaignService.campaign_id;
          this.service_id = this.campaignService.service_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
