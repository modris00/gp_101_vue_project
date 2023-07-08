<template scoped >
  <div class="login-box">
    <!-- /.login-logo -->
    <div class="card card-outline card-primary">
      <div class="card-header text-center">
        <h3>Medical Consulting</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="input-group mb-3">
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control"
              placeholder="Email"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              v-model="password"
              id="password"
              class="form-control"
              placeholder="Password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" v-model="remember" />
                <label for="remember"> Remember Me </label>
              </div>
            </div>
            <div class="col-4">
              <button
                type="button"
                @click="csrfCookie()"
                class="btn btn-primary btn-block"
              >
                Sign In
              </button>
            </div>
          </div>
          <br />
          <div class="social-auth-links text-center mt-2 mb-3">
            <router-link
              :to="{
                name: 'login',
                params: {
                  guard: 'admin',
                },
              }"
              class="btn btn-block btn-primary"
            >
              <i class="fas fa-user-shield"></i>
              <span>Login Admin</span>
            </router-link>

            <router-link
              :to="{
                name: 'login',
                params: {
                  guard: 'beneficiary',
                },
              }"
              class="btn btn-block btn-primary"
            >
              <i class="fas fa-user-shield"></i>
              <span>Login Beneficiary</span>
            </router-link>

            <router-link
              :to="{
                name: 'login',
                params: {
                  guard: 'donor',
                },
              }"
              class="btn btn-block btn-primary"
            >
              <i class="fas fa-user-shield"></i>
              <span>Login Donor</span>
            </router-link>
          </div>
        </form>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    
    };
  },
  methods: {
    csrfCookie() {
      const guard = this.$route.params.guard;
      this.$axios
        .get("/sanctum/csrf-cookie")
        .then((response) => {
          console.log(response);
          this.login(guard);
        })
        .catch((error) => {});
    },
    login(guard) {
      this.$axios
        .post(`/api/login/${guard}`, {
          email: this.email,
          password: this.password,
          guard: guard,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "home" });
          this.$toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.response.data.message);
        });
    },
  },
};
</script>
