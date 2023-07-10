<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Archives Campaigns Donors</h3>

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
                <th>amount</th>
                <th>campaign_name</th>
                <th>donor_name</th>
                <th>deleted_at</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in campaignsDonors" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.campaign_name }}</td>
                <td>{{ item.donor_name }}</td>
                <td>{{ item.deleted_at }}</td>
                <td>
                  <button @click="restoreItem(item.id)" class="btn btn-success">
                    Restore
                    <i class="fas fa-trash-restore"></i>
                  </button>

                  <button @click="deleteItem(item.id)" class="btn btn-danger">
                    Permanent deletion
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
      campaignsDonors: [],
    };
  },
  methods: {
    getCampaignDonor() {
      this.$axios
        .get(`/api/campaigns-donors/archive`)
        .then((response) => {
          console.log(response);
          this.campaignsDonors = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    restoreItem(id) {
      this.$axios
        .put(`/api/campaigns-donors/${id}/restore`)
        .then((response) => {
          this.$toast.success("campaign donor restored successfully");
          this.getCampaignDonor();
        })
        .catch((error) => {
          this.$toast.warning("Failed to restore campaign donor");
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
            .delete(`/api/campaigns-donors/${id}/forceDelete`)
            .then((response) => {
              console.log(response);
              Swal.fire(
                "Deleted!",
                "campaign donor has been deleted.",
                "success"
              );
              this.campaignsDonors = this.campaignsDonors.filter(
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
  mounted() {
    this.getCampaignDonor();
  },
};
</script>
