<template>
  <form id="form">
    <h3>Login - A Charity</h3>
    <label for="email">Email</label>
    <input
      type="email"
      placeholder="Enter Your Email"
      id="email"
      v-model="email"
    />

    <label for="password">Password</label>
    <input
      type="password"
      placeholder="Enter Your Password"
      id="password"
      v-model="password"
    />
    <button class="mt-4" type="button" @click="csrfCookie()">Sign in</button>

    <div class="row mt-3">
      <div class="col-md-4">
        <div class="social-auth-links text-center mt-2 mb-3">
          <router-link
            :to="{ name: 'login', params: { guard: 'admin' } }"
            class="btn btn-block btn-success"
          >
            <!-- <i class="fas fa-user-tie mr-2"></i> -->
            <span>Login Admin</span>
          </router-link>
        </div>
      </div>
      <div class="col-md-4">
        <div class="social-auth-links text-center mt-2 mb-3">
          <router-link
            :to="{ name: 'login', params: { guard: 'donor' } }"
            class="btn btn-block btn-info"
          >
            <!-- <i class="fas fa-user-plus mr-2"></i> -->
            <span>Login Donor</span>
          </router-link>
        </div>
      </div>
      <div class="col-md-4">
        <div class="social-auth-links text-center mt-2 mb-3">
          <router-link
            :to="{ name: 'login', params: { guard: 'beneficiary' } }"
            class="btn btn-block btn-warning"
          >
            <!-- <i class="fas fa-users mr-2"></i> -->
            <span>Login Beneficiary</span>
          </router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
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
        .post(`/api/login`, {
          email: this.email,
          password: this.password,
          guard: guard,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "home" });
          this.$toast.success(response.data.message);
          // localStorage.setItem("isLoggedIn", "1");
          this.$store.commit("setAuthentication", true);
        })
        .catch((error) => {
          // localStorage.setItem("isLoggedIn", '0');
          console.log(error);
          if (error.response.data) {
            this.$toast.error(error.response.data.message);
          } else {
            this.$toast.warning(error.message);
          }
        });
    },
  },
};
</script>
<style scoped>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#form {
  height: auto;
  width: 400px;
  background-color: #e8e5e5;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 40px;
  text-align: left;
}

#form h3 {
  font-size: 28px;
  font-weight: bold;
  color: #283046;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

label {
  display: block;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #283046;
}

input {
  display: block;
  height: 40px;
  width: 100%;
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #d2d2d2;
}

::placeholder {
  color: #9c9c9c;
}

button {
  margin-top: 30px;
  width: 100%;
  background-color: #283046;
  color: #ffffff;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1d2731;
}
</style>
