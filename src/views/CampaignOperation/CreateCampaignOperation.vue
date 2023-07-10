<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create CampaignOperation</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createCampaignOperation">
          <div class="card-body">
            <div class="form-group">
              <label for="amount">Cost</label>
              <input
                type="number"
                v-model="CampaignOperation.cost"
                class="form-control"
                id="amount"
                placeholder="Enter Amount"
              />
            </div>
            <div class="form-group">
              <label for="amount">Description</label>
              <input
                type="text"
                v-model="CampaignOperation.description"
                class="form-control"
                id="amount"
                placeholder="Description"
              />
            </div>
            <div class="form-group">
              <label>Status</label>
              <select
                class="form-control"
                v-model="CampaignOperation.cost_type"
              >
                <option value="Additional">Additional</option>
                <option value="Primary">Primary</option>
              </select>
            </div>
            <div class="form-group">
              <label> Date:</label>
              <div
                class="input-group date"
                id="reservationdate"
                data-target-input="nearest"
              >
                <input
                  type="date"
                  class="form-control datetimepicker-input"
                  v-model="CampaignOperation.date"
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
              <label>Campaigns</label>
              <select
                class="form-control"
                v-model="CampaignOperation.campaign_id"
              >
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
              <label>Services</label>
              <select
                class="form-control"
                v-model="CampaignOperation.service_id"
              >
                <option value="" selected>Enter Services</option>
                <option
                  v-for="(item, index) in services"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
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
export default {
  name: "CreateCampaignDonor",
  mounted() {
    this.indexServices();
    this.indexCampaign();
  },
  data() {
    return {
      CampaignOperation: {
        id: "",
        date: "",
        cost: "",
        cost_type: "",
        description: "",
        admin_id: 1,
        service_id: "",
        campaign_id: "",
      },
      services: [],
      Campaigns: [],
    };
  },
  methods: {
    createCampaignOperation() {
      this.$axios
        .post(`/api/campaign-operations`, this.CampaignOperation)
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);

          // redirect view index All CampaignOperation
          this.$router.push("/campaign-operations");
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
    indexServices() {
      this.$axios
        .get(`/api/services`)
        .then((response) => {
          this.services = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
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
