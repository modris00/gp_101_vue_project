<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create Campaign</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createCampaign">
          <div class="card-body">
            <div class="form-group">
              <label for="title">Title Campaign</label>
              <input
                type="text"
                v-model="title"
                class="form-control"
                id="title"
                placeholder="Enter Title"
              />
            </div>
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                type="number"
                v-model="amount"
                class="form-control"
                id="amount"
                placeholder="Description"
              />
            </div>
            <div class="col-sm-6">
              <!-- select -->
              <div class="form-group">
                <label>Status</label>
                <select class="form-control" v-model="status">
                  <option value="Finished">Finished</option>
                  <option value="Not Finished">Not Finished</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Statr Date:</label>
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
            <div class="form-group">
              <label>Currency</label>
              <select class="form-control" v-model="currency_id">
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
  name: "CreateCampaign",
  mounted() {
    this.indexCurrency();
    // this.getUser();
  },
  data() {
    return {
      id: "",
      title: "",
      amount: "",
      status: "",
      start_date: "",
      end_date: "",
      currency_id: "",
      admin_id: localStorage.getItem("id"),
      currency: [],
    };
  },
  methods: {
    // getUser() {
    //   this.admin_id = localStorage.getItem("id");
    // },
    createCampaign() {
      this.$axios
        .post(`/api/campaigns`, {
          title: this.title,
          amount: this.amount,
          status: this.status,
          start_date: this.start_date,
          end_date: this.end_date,
          currency_id: this.currency_id,
          admin_id: this.admin_id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);

          // redirect view index All Campaign
          this.$router.push("/campaigns");
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
  },
};
</script>

<style></style>
