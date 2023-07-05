<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create Country</h3>
            </div>

            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="createCountry($event)">
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">Name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Country name"
                    v-model="name"
                  />
                </div>
              </div>
              <!-- /.card-body -->
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
  name: "CreateCountryView",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    createCountry(event) {
      axios
        .post(`${this.$store.state.url}/countries`, {
          name: this.name,
        })
        .then((response) => {
          console.log(response);
          // if (response.data.message) {
          //   // console.log(response.data.message);
          //   this.$toast.error(response.data.message);
          // } else {
          this.$toast.success(response.data.message);
          this.name = "";
          this.$router.push("/countries");
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
