<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Archives | CampaignServices</h3>

          <div class="card-tools">
            <div class="input-group input-group-sm" style="width: 150px">
              <input
                type="text"
                name="table_search"
                class="form-control float-right"
                placeholder="Search"
              />

              <div class="input-group-append">
                <button type="submit" class="btn btn-default">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th>#</th>
                <th>Campaign Title</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
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
                  <button @click="restoreItem(CS.id)" class="btn btn-success">
                    Restore
                    <i class="fas fa-trash-restore"></i>
                  </button>

                  <button @click="deleteItem(CS.id)" class="btn btn-danger">
                    Delete Permanently
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
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2";

export default {
  data() {
    return {
      campaignServices: [],
    };
  },
  mounted() {
    this.getCampaignServices();
  },
  methods: {
    getCampaignServices() {
      this.$axios
        .get(`/api/campaigns-services/archive`)
        .then((response) => {
          console.log(response);
          this.campaignServices = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    restoreItem(id) {
      this.$axios
        .get(`/api/campaigns-services/${id}/restore`)
        .then((response) => {
          console.log(response);
          this.$toast.success("restored successfully");
          // this.getArchivedCRs();
          this.campaignServices = this.campaignServices.filter(
            (cs) => cs.id != id
          );
        })
        .catch((error) => {
          this.$toast.warning("Failed to restore");
          console.log(error);
        });
    },
    deleteItem(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios
            .delete(
              `/api/campaigns-services/${id}/forceDelete`
            )
            .then((response) => {
              console.log(response);
              Swal.fire(
                "Deleted!",
                "Contact Request has been deleted.",
                "success"
              );
              // this.getSuppliers();
              this.campaignServices = this.campaignServices.filter(
                (c) => c.id != id
              );
            })
            .catch((error) => {
              console.log(error);
              if (error.response.data) {
                this.$toast.error(error.response.data.message);
              } else {
                this.$toast.error(error.message);
              }
            });
        }
      });
    },
  },
};
</script>
