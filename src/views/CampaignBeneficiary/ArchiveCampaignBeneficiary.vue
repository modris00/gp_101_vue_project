<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Archives | CampaignBeneficiaries</h3>

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
                <th>Beneficiary</th>
                <th>Campaign Title</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(CB, index) in campaignBeneficiaries" :key="CB.id">
                <td>{{ index + 1 }}</td>
                <td>{{ CB.beneficiary_name ?? "--" }}</td>
                <td>{{ CB.campaign_title ?? "--" }}</td>
                <td>{{ CB.amount }}</td>
                <td>{{ CB.status }}</td>
                <td>{{ CB.description }}</td>
                <td>
                  <button @click="restoreItem(CB.id)" class="btn btn-success">
                    Restore
                    <i class="fas fa-trash-restore"></i>
                  </button>

                  <button @click="deleteItem(CB.id)" class="btn btn-danger">
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
      campaignBeneficiaries: [],
    };
  },
  mounted() {
    this.getCampaignBeneficiaries();
  },
  methods: {
    getCampaignBeneficiaries() {
      this.$axios
        .get(`/api/campaigns-beneficiaries/archive`)
        .then((response) => {
          console.log(response);
          this.campaignBeneficiaries = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    restoreItem(id) {
      this.$axios
        .get(`/api/campaigns-beneficiaries/${id}/restore`)
        .then((response) => {
          console.log(response);
          this.$toast.success("restored successfully");
          // this.getArchivedCRs();
          this.campaignBeneficiaries = this.campaignBeneficiaries.filter(
            (cb) => cb.id != id
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
            .delete(`/api/campaigns-beneficiaries/${id}/forceDelete`)
            .then((response) => {
              console.log(response);
              Swal.fire(
                "Deleted!",
                "Contact Request has been deleted.",
                "success"
              );
              // this.getSuppliers();
              this.campaignBeneficiaries = this.campaignBeneficiaries.filter(
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
