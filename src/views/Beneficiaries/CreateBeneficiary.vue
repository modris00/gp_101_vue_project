<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create Beneficiary</h3>
            </div>

            <!-- form start -->
            <form @submit.prevent="createBeneficiary($event)">
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">Name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="name of beneficiary"
                    v-model="name"
                  />
                </div>

                <div class="form-group">
                  <label for="post_title">Age:</label>
                  <input
                    type="number"
                    name="age"
                    class="form-control"
                    id="age"
                    placeholder="age of beneficiary"
                    v-model="age"
                  />
                </div>

                <div class="form-group">
                  <label>Select gender: </label>
                  <select class="form-control" v-model="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="post_title">Email:</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="email of beneficiary"
                    v-model="email"
                  />
                </div>

                <div class="form-group">
                  <label for="post_title">Username:</label>
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    id="username"
                    placeholder="username of beneficiary"
                    v-model="username"
                  />
                </div>

                <div class="form-group">
                  <label>Select area: </label>
                  <select class="form-control" v-model="area_id">
                    <option v-for="area in areas" :value="area.id">
                      {{ area.name }}
                    </option>
                  </select>
                </div>
              </div>
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
  name: "CreateBeneficiaryView",
  mounted() {
    this.getAreas();
  },
  data() {
    return {
      areas: [],
      name: "",
      age: "",
      gender: "",
      email: "",
      username: "",
      area_id: null,
    };
  },
  methods: {
    getAreas() {
      axios
        .get(`${this.$store.state.url}/areas`)
        .then((response) => {
          console.log(response);
          this.areas = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    createBeneficiary(event) {
      axios
        .post(`${this.$store.state.url}/beneficiaries`, {
          name: this.name,
          age: this.age,
          gender: this.gender,
          email: this.email,
          username: this.username,
          area_id: this.area_id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);
          this.name = "";
          this.age = "";
          this.gender = "";
          this.email = "";
          this.username = "";
          this.area_id = null;
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
