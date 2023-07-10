<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Update Donor</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="editDonor(this.$route.params.id)">
          <div class="card-body">
            <div class="form-group">
              <label for="username">Name</label>
              <input
                type="text"
                required
                v-model="Donor.name"
                class="form-control"
                id="name"
                placeholder="Enter  Name"
              />
            </div>
            <div class="form-group">
              <label for="username">UserName</label>
              <input
                type="text"
                required
                v-model="Donor.username"
                class="form-control"
                id="username"
                placeholder="Enter UserName"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                required
                v-model="Donor.email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="Password">Phone</label>
              <input
                type="number"
                v-model="Donor.phone"
                class="form-control"
                id="Phone"
                placeholder="Phone"
              />
            </div>
            <div class="form-group">
              <label>Area</label>
              <select class="form-control" v-model="Donor.area_id">
                <option
                  v-for="(item, index) in areas"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
                <option :value="Donor.area_id">
                  {{ Donor.area_name }}
                </option>
              </select>
            </div>
            <!-- <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" v-model="Donor.password" class="form-control" id="Password"
                                placeholder="Password">
                        </div> -->
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
import axios from "axios";
export default {
  name: "EditDonor",
  mounted() {
    this.indexAreas();
    this.indexDonor(this.$route.params.id);
  },
  data() {
    return {
      Donor: {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        // password: '',
        area_id: "",
      },
      areas: [],
    };
  },
  methods: {
    indexDonor(id) {
      this.$axios
        .get(`/api/donors/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.Donor = response.data.data;
          // console.log(this.Donor.area_id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editDonor(id) {
      this.$axios
        .put(`/api/donors/${id}`, this.Donor)
        .then((response) => {
          console.log(response);
          this.Donor = {
            id: "",
            name: "",
            username: "",
            email: "",
            phone: "",
            // password: '',
            area_id: "",
          };
          this.$toast.success(response.data.message);
          // redirect view index All donors
          this.$router.push("/donors");
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
    indexAreas() {
      this.$axios
        .get(`/api/areas`)
        .then((response) => {
          this.areas = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
