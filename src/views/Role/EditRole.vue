<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Update Role</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="updateRole(this.$route.params.id)">
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
                  <input
                    type="text"
                    name="guard_name"
                    class="form-control"
                    id="guard_name"
                    placeholder="guard_name"
                    v-model="Roles.guard_name"
                  />
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Update</button>
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
  mounted() {
    this.getRoles(this.$route.params.id);
  },
  data() {
    return {
      Roles: {
        name: "",
        guard_name: "",
      },
    };
  },
  methods: {
    getRoles(id) {
      axios
        .get(`${this.$store.state.url}/roles/${id}`)
        .then((response) => {
          console.log(response);
          this.Roles = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    updateRole(id) {
      axios
        .put(`${this.$store.state.url}/roles/${id}`, this.Roles)
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
