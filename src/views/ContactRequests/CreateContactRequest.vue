<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Create Admin</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="createAdmin">
          <div class="card-body">
            <div class="form-group">
              <label for="username">User Name</label>
              <input
                type="text"
                required
                v-model="Admin.username"
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
                v-model="Admin.email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="password"
                v-model="Admin.password"
                class="form-control"
                id="Password"
                placeholder="Password"
              />
            </div>

            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAdmin",
  data() {
    return {
      Admin: {
        id: "",
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createAdmin() {
      this.$axios
        .post(`/api/admins`, this.Admin)
        .then((response) => {
          console.log(response);
          this.Category = {
            id: "",
            username: "",
            email: "",
            password: "",
          };
          this.$toast.success(response.data.message);

          // redirect view index All categories
          this.$router.push("/admins");
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.response.data.message);
        });
    },
  },
};
</script>

<style></style>
