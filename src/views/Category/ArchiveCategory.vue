<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Archives Categories</h3>

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
                <th>deleted_at</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in category" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
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
import axios from "axios";

export default {
  data() {
    return {
      category: [],
    };
  },
  methods: {
    getSuppliers() {
      axios
        .get(`${this.$store.state.url}/categories/archive`)
        .then((response) => {
          console.log(response);
          this.category = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message);
        });
    },
    restoreItem(id) {
      axios
        .put(`${this.$store.state.url}/categories/${id}/restore`)
        .then((response) => {
          this.$toast.success("category restored successfully");
          this.getSuppliers();
        })
        .catch((error) => {
          this.$toast.warning("Failed to restore category");
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
  mounted() {
    this.getSuppliers();
  },
};
</script>
