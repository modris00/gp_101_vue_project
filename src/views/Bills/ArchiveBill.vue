<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Archives Bills</h3>

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
                <th>cost</th>
                <th>image</th>
                <th>description</th>
                <th>currency_name</th>
                <th>campaign_title</th>
                <th>supplier_name</th>
                <th>campaignService</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in bills" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.cost }}</td>
                <td>image</td>
                <td>{{ item.description }}</td>
                <td>{{ item.currency_name }}</td>
                <td>{{ item.campaign_title }}</td>
                <td>{{ item.supplier_name }}</td>
                <td>{{ item.campaignService }}</td>
                <td>
                  <button
                    @click="restoreItem(item.id)"
                    class="btn btn-success ml-2"
                  >
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
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2";

export default {
  data() {
    return {
      bills: [],
    };
  },
  methods: {
    getBill() {
      axios
        .get(`${this.$store.state.url}/bills/archive`)
        .then((response) => {
          console.log(response);
          this.bills = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    restoreItem(id) {
      axios
        .put(`${this.$store.state.url}/bills/${id}/restore`)
        .then((response) => {
          this.$toast.success("bills restored successfully");
          //this.getBill();
          this.bills = this.bills.filter((c) => c.id != id);
        })
        .catch((error) => {
          this.$toast.warning("Failed to restore bills");
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
            .delete(`${this.$store.state.url}/bills/${id}/force-delete`)
            .then((response) => {
              console.log(response);
              Swal.fire("Deleted!", "bills has been deleted.", "success");

              this.bills = this.bills.filter((c) => c.id != id);
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
    this.getBill();
  },
};
</script>
