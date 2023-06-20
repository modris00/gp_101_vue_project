<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Create {{ title }}</h3>
            </div>

            <!-- /.card-header -->
            <!-- form start -->
            <form method="POST" enctype="multipart/form-data">
              <div class="card-body">
                <div class="form-group">
                  <label for="post_title">Title</label>
                  <input
                    type="text"
                    name="post_title"
                    class="form-control"
                    id="post_title"
                    placeholder="Enter Title"
                    value=""
                  />
                </div>

                <div class="form-group">
                  <label for="post_content">Content</label>
                  <input
                    type="text"
                    name="post_content"
                    class="form-control"
                    id="post_content"
                    placeholder="Enter Content"
                    value=""
                  />
                </div>

                <div class="form-group">
                  <label for="post_image">Image</label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        name="post_image"
                        id="post_image"
                      />
                      <label class="custom-file-label" for="post_image"
                        >Choose file</label
                      >
                    </div>
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
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
export default {
  name: "InsertDataForm",
  props: ["title"],
};
</script>
