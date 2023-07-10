<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create Area</h3>
            </div>

            <!-- form start -->
            <form @submit.prevent="createArea($event)">
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">Area name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    v-model="name"
                  />
                </div>
                <div class="form-group">
                  <label>Select City</label>
                  <select class="form-control" v-model="city_id">
                    <option v-for="city in cities" :value="city.id">
                      {{ city.name }}
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
  name: "CreateAreaView",
  mounted() {
    this.getCities();
  },
  data() {
    return {
      cities: [],
      name: "",
      city_id: null,
    };
  },
  methods: {
    getCities() {
      // "http://127.0.0.1:8000/api/cities"
      this.$axios
        .get(`/api/cities`)
        .then((response) => {
          console.log(response);
          this.cities = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    createArea(event) {
      this.$axios
        .post(`/api/areas`, {
          name: this.name,
          city_id: this.city_id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);
          this.name = "";
          this.city_id = null;
          this.$router.push("/areas");
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
