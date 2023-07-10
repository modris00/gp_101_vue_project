<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create Currency</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="updateCurrency(this.$route.params.id)">
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">Name:</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Country name"
                    v-model="Currency.name"
                  />
                </div>
                <div class="form-group">
                  <label for="post_title">Abbreviation:</label>
                  <input
                    type="text"
                    name="abbreviation"
                    class="form-control"
                    id="abbreviation"
                    placeholder="abbreviation"
                    v-model="Currency.abbreviation"
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
export default {
  name: "CreateCurrencyView",
  mounted() {
    this.getCurrency(this.$route.params.id);
  },
  data() {
    return {
      Currency: {
        name: "",
        abbreviation: "",
      },
    };
    currencies;
  },
  methods: {
    getCurrency(id) {
      this.$axios
        .get(`/api/currencies/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.Currency = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCurrency(id) {
      this.$axios
        .put(`/api/currencies/${id}`, this.Currency)
        .then((response) => {
          console.log(response);
          // if (response.data.message) {
          //   // console.log(response.data.message);
          //   this.$toast.error(response.data.message);
          // } else {
          this.$toast.success(response.data.message);
          this.Currency = "";
          this.$router.push("/currencies");
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
