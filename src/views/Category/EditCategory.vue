<template>
    <div class="row">
        <!-- left column -->
        <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Update Category</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form @submit.prevent="updateCategory(this.$route.params.id)">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name Category</label>
                            <input type="text" v-model="Category.name" class="form-control" id="name"
                                placeholder="Enter Name">
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" v-model="Category.description" class="form-control" id="description"
                                placeholder="Description">
                        </div>

                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "EditCategory",
    mounted() {
        console.log(this.$route.params.id);;
        this.indexCategory(this.$route.params.id);
        console.log("sari")
    },
    data() {
        return {
            Category: {
                id: '',
                name: '',
                description: '',
            }
        }
    },
    methods: {

        indexCategory(id) {
            axios.get(`${this.$store.state.url}/categories/${id}`).then((response) => {
                console.log(response.data.data)
                this.Category = response.data.data;

            }).catch((error) => {
                console.log(error)
            })
        },
        updateCategory(id) {
            axios.put(`${this.$store.state.url}/categories/${id}`, this.Category).then((response) => {
                console.log(response);
                console.log(id)
                this.Category = {
                    id: '',
                    name: '',
                    description: '',
                };
                this.$toast.success(response.data.message);

                // redirect view index All categories
                this.$router.push('/categories');
            }).catch((error) => {
                console.log(error)
                if (error.response.data) {
                    this.$toast.error(error.response.data.message);

                } else {
                    this.$toast.error(error.message);

                }
            })
        },
    }
}
</script>

<style></style>