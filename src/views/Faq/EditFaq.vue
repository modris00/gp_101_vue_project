<template>
  <div class="row">
    <!-- left column -->
    <div class="col-md-12">
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Update Faq</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="updateFaq(this.$route.params.id)">
          <div class="card-body">
            <div class="form-group">
              <label for="question">Question</label>
              <input
                type="text"
                v-model="faq.question"
                class="form-control"
                id="question"
                placeholder="Enter question"
              />
            </div>
            <div class="form-group">
              <label for="answer">Answer</label>
              <input
                type="text"
                v-model="faq.answer"
                class="form-control"
                id="answer"
                placeholder="answer"
              />
            </div>
            <div class="col-sm-6">
              <!-- select -->
              <div class="form-group">
                <label>Question type</label>
                <select class="form-control" v-model="faq.question_type">
                  <option value="For Beneficiary">For Beneficiary</option>
                  <option value="For Donor">For Donor</option>
                </select>
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
  name: "EditFaq",
  mounted() {
    console.log(this.$route.params.id);
    this.indexFaq(this.$route.params.id);
  },
  data() {
    return {
      faq: {
        id: "",
        answer: "",
        question: "",
        question_type: "",
      },
    };
  },
  methods: {
    indexFaq(id) {
      axios
        .get(`${this.$store.state.url}/faqs/${id}`)
        .then((response) => {
          console.log(response.data.data);
          this.faq = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateFaq(id) {
      axios
        .put(`${this.$store.state.url}/faqs/${id}`, this.faq)
        .then((response) => {
          console.log(response);
          console.log(id);
          this.faq = {
            id: "",
            answers: "",
            questions: "",
            question_type: "",
          };
          this.$toast.success(response.data.message);

          // redirect view index All Faq
          this.$router.push("/faqs");
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
