<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Edit Beneficiary</h3>
            </div>

            <!-- form start -->
            <form @submit.prevent="updateItem($event, this.$route.params.id)">
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
                  <label for="Password">Phone</label>
                  <input
                    type="number"
                    v-model="phone"
                    class="form-control"
                    id="Phone"
                    placeholder="Phone"
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
                  <select class="form-control" v-model="areaId">
                    <option
                      v-for="area in areas"
                      :value="area.id"
                      :selected="area.id == areaId"
                    >
                      {{ area.name }}
                    </option>
                  </select>
                </div>
              </div>
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
  name: "EditBeneficiaryView",
  mounted() {
    this.getAreas();
    this.getBeneficiary(this.$route.params.id);
  },
  data() {
    return {
      beneficiary: "",
      areas: [],
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      username: "",
      areaId: null,
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
    getBeneficiary(id) {
      axios
        .get(`${this.$store.state.url}/beneficiaries/${id}`)
        .then((response) => {
          console.log(response);
          this.beneficiary = response.data.data;
          this.name = this.beneficiary.name;
          this.age = this.beneficiary.age;
          this.phone = this.phone;
          this.gender = this.beneficiary.gender;
          this.email = this.beneficiary.email;
          this.username = this.beneficiary.username;
          this.areaId = this.beneficiary.area_id;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    updateItem(event, id) {
      axios
        .put(`${this.$store.state.url}/beneficiaries/${id}`, {
          name: this.name,
          age: this.age,
          gender: this.gender,
          email: this.email,
          username: this.username,
          area_id: this.areaId,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);
          this.$router.push({ name: "beneficiaries" });
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
