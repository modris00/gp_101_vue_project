<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Campaign-Service Records</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table
            id="contactRequests"
            class="table table-bordered table-striped"
          >
            <thead>
              <!-- actor , title, message, email, phone , stamps, del at -->
              <th>#</th>
              <th>Campaign Title</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr v-for="(CS, index) in campaignServices" :key="CS.id">
                <td>{{ index + 1 }}</td>
                <td>{{ CS.campaign_title ?? "--" }}</td>
                <td>{{ CS.service_name ?? "--" }}</td>
                <td>{{ CS.amount }}</td>
                <td>{{ CS.status == 1 ? "Active" : "Inactive" }}</td>
                <td>{{ CS.description }}</td>
                <td>{{ CS.start_date }}</td>
                <td>{{ CS.end_date }}</td>
                <td>
                  <router-link
                    style="margin-right: 2px"
                    class="btn btn-warning"
                    :to="{
                      name: 'campaignService.edit',
                      params: { id: CS.id },
                    }"
                    >Edit
                    <i class="fas fa-edit"></i>
                  </router-link>

                  <!-- prettier-ignore -->
                  <button type="button" @click="deleteItem($event, CS.id)" class="btn btn-danger">
                    Delete
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
    <!-- /.col -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.indexCampaignServices();
  },
  // name: "IndexAdmin",
  data() {
    return {
      campaignServices: [],
    };
  },
  methods: {
    indexCampaignServices() {
      this.$axios
        .get(`/api/campaigns-services`)
        .then((response) => {
          this.campaignServices = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          this.$toast.warning(error.message); // this key is from axios not laravel
          console.log(error);
        });
    },
    deleteItem(event, id) {
      console.log(event);
      this.$axios
        .delete(`/api/campaigns-services/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.campaignServices = this.campaignServices.filter(
            (item) => item.id != id
          );
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
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
