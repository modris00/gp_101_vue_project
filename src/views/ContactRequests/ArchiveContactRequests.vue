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
import Swal from "sweetalert2/dist/sweetalert2";

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
          // this.getArchivedCRs();
          this.contactRequests = this.contactRequests.filter((c) => c.id != id);
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
          axios
            .delete(
              `${this.$store.state.url}/contact-requests/${id}/force-delete`
            )
            .then((response) => {
              console.log(response);
              Swal.fire(
                "Deleted!",
                "Contact Request has been deleted.",
                "success"
              );
              // this.getSuppliers();
              this.contactRequests = this.contactRequests.filter(
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
