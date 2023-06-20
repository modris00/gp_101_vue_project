<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create City</h3>
            </div>

            <!-- form start -->
            <form>
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">City name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    v-model="name"
                  />
                </div>
                <div class="form-group">
                  <label>Select Country</label>
                  <select class="form-control" v-model="country_id">
                    <option v-for="country in countries" :value="country.id">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="createCity($event)"
                >
                  Create
                </button>
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
  name: "CreateCityView",
  mounted() {
    this.getCountries();
  },
  data() {
    return {
      countries: [],
      name: "",
      country_id: null,
    };
  },
  methods: {
    getCountries() {
      axios
        .get(`${this.$store.state.url}/countries`)
        .then((response) => {
          console.log(response);
          this.countries = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.$toast.warning(error.message); // this key is from axios not laravel
        });
    },
    createCity(event) {
      axios
        .post(`${this.$store.state.url}/cities`, {
          name: this.name,
          country_id: this.country_id,
        })
        .then((response) => {
          console.log(response);
          this.$toast.success(response.data.message);
          this.name = "";
          this.country_id = null;
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
