<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Add Response to Contact Request</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="updateContactRequest(this.$route.params.id)">
          <div class="card-body">
            <div class="form-group">
              <label for="username">Response: </label>
              <input
                type="text"
                required
                v-model="response"
                class="form-control"
                id="response"
                placeholder="Enter Response"
              />
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  v-model="isClosed"
                  id="isClosed"
                />
                <label class="custom-control-label" for="isClosed"
                  >Closed</label
                >
              </div>
            </div>
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditAdmin",
  mounted() {
    console.log(this.$route.params.id);
    this.indexContactRequest(this.$route.params.id);
  },
  data() {
    return {
      contactRequest: "",
      response: "",
      isClosed: 0,
    };
  },
  methods: {
    indexContactRequest(id) {
      axios
        .get(`${this.$store.state.url}/contact-requests/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.contactRequest = response.data.data;
          this.response = this.contactRequest.response;
          this.isClosed = this.contactRequest.isClosed == 1 ? true : false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateContactRequest(id) {
      axios
        .put(`${this.$store.state.url}/contact-requests/${id}`, {
          response: this.response,
          isClosed: this.isClosed,
        })
        .then((response) => {
          console.log(response);

          this.$toast.success(response.data.message);

          // redirect view index All admins
          this.$router.push("/contact-requests");
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
  },
};
</script>

<style></style>
