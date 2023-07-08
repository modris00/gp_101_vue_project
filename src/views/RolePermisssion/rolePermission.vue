<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Name Role : <span class="text-primary"></span></h3>
      <div class="card-tools"></div>
    </div>
    <!-- /.card-header -->
    <div class="card-body table-hover text-nowrap">
      <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
        <form
          action=""
          method="get"
          class="input-group input-group-sm mb-3"
          style="width: 150px"
        ></form>
        <div class="row">
          <div class="col-sm-12">
            <table
              class="table table-bordered table-striped table-hover text-nowrap"
            >
              <thead>
                <th>#</th>
                <th>اسم الصلاحية</th>
                <th>اعطاء صلاحية / تراجع عن صلاحية</th>
              </thead>

              <tbody>
                <tr v-for="(item, index) in rolePermission" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.guard_name }}</td>
                  <td class="text-center">
                    <div class="form-check">
                      <input
                        :checked="item.assigned"
                        @click="GiveRolePermission(item.id)"
                        class="form-check-input"
                        style="width: 20px; height: 20px"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.card-body -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  // props: ["dataArray"],
  data() {
    return {
      rolePermission: [],
      
    };
  },

  mounted() {
    // this.rolePermission = this.dataArray;

    this.$axios
      .get(`/api/roles-permissions/${this.$route.params.id}`)
      .then((response) => {
        let data = response.data.data;
        this.rolePermission = data;
        console.log(data);
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
  methods: {
    GiveRolePermission(permission) {
      this.$axios
        .put(`/api/roles/${this.$route.params.id}/permission/${permission}`)
        .then((response) => {
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
  },
};
</script>
