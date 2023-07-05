<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Archives | Contact Requests</h3>

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
                <th>Actor Name</th>
                <th>Type</th>
                <th>Title</th>
                <th>Message</th>
                <th>Email</th>
                <th>Phone</th>
                <th>isClosed</th>
                <th>Response</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(contactRequest, index) in contactRequests"
                :key="contactRequest.id"
              >
                <!-- <td v-for="column in contactRequest" v-show="column != id"></td> -->
                <td>{{ index + 1 }}</td>
                <td>{{ contactRequest.actor_name ?? "--" }}</td>
                <td>
                  {{
                    contactRequest.actor_type == "App\\Models\\Beneficiary"
                      ? "Beneficiary"
                      : "Donor"
                  }}
                </td>
                <td>{{ contactRequest.title }}</td>
                <td>{{ contactRequest.message }}</td>
                <td>{{ contactRequest.email }}</td>
                <td>{{ contactRequest.phone }}</td>
                <td>{{ contactRequest.isClosed ? "Yes" : "No" }}</td>
                <td>{{ contactRequest.response ?? "--" }}</td>
                <td>
                  <button
                    @click="restoreItem(contactRequest.id)"
                    class="btn btn-success"
                  >
                    Restore
                    <i class="fas fa-trash-restore"></i>
                  </button>

                  <button
                    @click="deleteItem(contactRequest.id)"
                    class="btn btn-danger"
                  >
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
import axios from "axios";

export default {
  data() {
    return {
      contactRequests: [],
    };
  },
  mounted() {
    this.getArchivedCRs();
  },
  methods: {
    getArchivedCRs() {
      axios
        .get(`${this.$store.state.url}/contact-requests/archive`)
        .then((response) => {
          console.log(response);
          this.contactRequests = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    restoreItem(id) {
      axios
        .put(`${this.$store.state.url}/contact-requests/${id}/restore`)
        .then((response) => {
          console.log(response);
          this.$toast.success("restored successfully");
          this.getArchivedCRs();
        })
        .catch((error) => {
          this.$toast.warning("Failed to restore");
          console.log(error);
        });
    },
    // deleteItem(id) {
    //   axios
    //     .delete(`${this.$store.state.url}/suppliers/${id}/force-delete`)
    //     .then((response) => {
    //       this.$swal({
    //         title: "Success",
    //         text: "Supplier permanently deleted",
    //         icon: "success",
    //       });

    //       this.getSuppliers();
    //     })
    //     .catch((error) => {
    //       this.$swal({
    //         title: "Error",
    //         text: "Failed to permanently delete supplier",
    //         icon: "error",
    //       });
    //       console.log(error);
    //     });
    // },
  },
};
</script>
