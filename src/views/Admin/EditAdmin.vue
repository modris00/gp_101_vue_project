<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Update Admin</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="updateAdmin(this.$route.params.id)">
          <div class="card-body">
            <div class="form-group">
              <label for="username">User Name</label>
              <input
                type="text"
                required
                v-model="admin.username"
                class="form-control"
                id="username"
                placeholder="Enter User Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                required
                v-model="admin.email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <!-- <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="text" v-model="admin.password" class="form-control" id="Password"
                                placeholder="Password">
                        </div> -->
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditAdmin",
  mounted() {
    console.log(this.$route.params.id);
    this.indexAdmin(this.$route.params.id);
  },
  data() {
    return {
      admin: {
        id: "",
        username: "",
        email: "",
        // password:''
      },
    };
  },
  methods: {
    indexAdmin(id) {
      axios
        .get(`${this.$store.state.url}/admins/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.admin = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateAdmin(id) {
      axios
        .put(`${this.$store.state.url}/admins/${id}`, this.admin)
        .then((response) => {
          console.log(response);
          console.log(id);
          this.admin = {
            id: "",
            username: "",
            email: "",
            // password: ''
          };
          this.$toast.success(response.data.message);

          // redirect view index All admins
          this.$router.push("/admins");
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.error(error.message);
          }
        });
    },
  },
};
</script>

<style></style>
