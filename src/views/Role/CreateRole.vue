<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create Role</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="createRole($event)">
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">Name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Country name"
                    v-model="Roles.name"
                  />
                </div>
                <div class="form-group">
                  <label for="post_title">guard_name:</label>
                  <select
                    type="text"
                    name="guard_name"
                    class="form-control"
                    id="guard_name"
                    placeholder="guard_name"
                    v-model="Roles.guard_name"
                  >
                    <option value="admin">admin</option>
                    <option value="beneficiarie">beneficiarie</option>
                    <option value="donor">donor</option>
                  </select>
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "CreateRoelView",
  data() {
    return {
      Roles: {
        name: "",
        guard_name: "",
      },
    };
  },
  methods: {
    createRole(event) {
      this.$axios
        .post(`/api/roles`, this.Roles)
        .then((response) => {
          console.log(response);
          // if (response.data.message) {
          //   // console.log(response.data.message);
          //   this.$toast.error(response.data.message);
          // } else {
          this.$toast.success(response.data.message);
          this.Roles = "";
          this.$router.push("/roles");
          // }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message); //from laravel
          } else {
            this.$toast.error(error.message); // from axios
          }
        });
    },
  },
};
</script>
