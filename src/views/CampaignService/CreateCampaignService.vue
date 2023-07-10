<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create CampaignService</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createCampaignService">
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
                type="number"
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

            <!-- <div class="form-group">
              
              <input
                type="number"
                v-model="campaign_id"
                class="form-control"
                placeholder="Enter campaign id"
              />
            </div> -->
            <div class="form-group">
              <label for="campaign_id">Campaign </label>
              <select class="form-control" v-model="campaign_id">
                <option v-for="item in Campaigns" :value="item.id">
                  {{ item.title }}
                </option>
              </select>
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
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.indexCampaign();
  },
  data() {
    return {
      Campaigns: [],
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
    createCampaignService() {
      this.$axios
        .post(`/api/campaigns-services`, {
          amount: this.amount,
          status: this.status,
          description: this.description,
          start_date: this.start_date,
          end_date: this.end_date,
          campaign_id: this.campaign_id,
          service_id: this.service_id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);

          // redirect view index All Campaigns-donors
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
  },
};
</script>

<style></style>
