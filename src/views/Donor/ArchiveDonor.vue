<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Archives Donors</h3>

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
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>deleted_at</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in donor" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
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
      donor: [],
    };
  },
  methods: {
    getDonors() {
      this.$axios
        .get(`/api/donors/archive`)
        .then((response) => {
          console.log(response);
          this.donor = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    restoreItem(id) {
      this.$axios
        .put(`/api/donors/${id}/restore`)
        .then((response) => {
          this.$toast.success("donor restored successfully");
          this.getDonors();
        })
        .catch((error) => {
          this.$toast.warning("Failed to restore donor");
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
            .delete(`/api/donors/${id}/force-delete`)
            .then((response) => {
              console.log(response);
              Swal.fire("Deleted!", "donors has been deleted.", "success");
              // this.getDonors();
              this.donor = this.donor.filter((c) => c.id != id);
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
    this.getDonors();
  },
};
</script>
