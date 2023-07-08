<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Role</h3>

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
                <th>name</th>
                <th>continued</th>
                <th>Actions</th>
                <th>Permissioms</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in roles" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.guard_name }}</td>
                <td>
                  <button @click="givePermission(item.id)" class="btn btn-info">
                    <i class="fas fa-user-tag"></i>
                    give permissioms
                  </button>
                </td>
                <td>
                  <div class="btn-group">
                    <button class="btn btn-warning">
                      Edit
                      <i class="fas fa-edit"></i>
                    </button>

                    <button @click="deleteRow(item.id)" class="btn btn-danger">
                      Delete
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
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
//import TableComp from "../../components/Table.vue";

export default {
  name: "RoleView",
  // components: { TableComp },
  props: [],
  mounted() {
    this.getRoles();
  },
  data() {
    return {
      roles: [],
      //headers: ["id", "name", "guard_name" , "permissions"],
    };
  },
  methods: {
    getRoles() {
      axios
        .get(`${this.$store.state.url}/roles`)
        .then((response) => {
          console.log(response);
          this.roles = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    deleteRow(id) {
      //   console.log(event);
      console.log(id);
      axios
        .delete(`${this.$store.state.url}/roles/${id}`)
        .then((response) => {
          this.roles = this.roles.filter((c) => c.id != id);
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
    givePermission(id) {
      //   console.log(event);
      let _id = id;
      console.log(id);
      this.$axios
        .get(`/api/roles-permissions/${id}`)
        .then((response) => {
          let data = response.data.data;
          console.log(data);
          // this.$router.push({
          //   name: "rolePermisssion",
          //   params: { dataArray: data },
          // });
          this.$router.push(`role-permisssion/${_id}`);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); // from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
  },
};
</script>
