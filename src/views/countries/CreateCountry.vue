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
            <form>
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="createCountry($event)"
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
  name: "CreateCountryView",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    createCountry(event) {
      axios
        .post("http://127.0.0.1:8000/api/countries", {
          name: this.name,
        })
        .then((response) => {
          console.log(response);
          // if (response.data.message) {
          //   // console.log(response.data.message);
          //   this.$toast.error(response.data.message);
          // } else {
          this.$toast.success("Successfully Created!");
          this.name = "";
          // }
        })
        .catch((error) => {
          // console.log(error);
          this.$toast.error(error.response.data.message);
        });
    },
  },
};
</script>
