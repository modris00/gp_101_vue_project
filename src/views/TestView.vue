<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Campaigns</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <!-- prettier-ignore -->
          <!-- <table id="example1" class="table table-bordered table-striped"></table> -->
          <DataTable
            :data="data"
            :options="{
              responsive: true,
              autoWidth: false,
              dom: 'Bfrtip',
            }"
            class="table table-bordered table-striped"
          >
            <thead>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </thead>

            <tfoot>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </tfoot>
          </DataTable>

          <!-- <table id="example1" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Webkit</td>
                <td>Safari 1.3</td>
                <td>OSX.3</td>
                <td>312.8</td>
                <td>A</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
              </tr>
            </tfoot>
          </table> -->
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
    <!-- /.col -->
  </div>
  <!-- /.row -->
</template>
<script>
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
// import pdfmake from "pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfmake.vfs = pdfFonts.pdfMake.vfs;
import "datatables.net-responsive-bs5";
import JsZip from "jszip";
window.JSZip = JsZip;
DataTable.use(DataTableLib);
// DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);

export default {
  name: "CampaignsView",
  components: { DataTable },
  data() {
    return {
      data: [
        [1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
      ],
    };
  },
  created() {
    // $(function () {
    //   $("#example1")
    //     .DataTable({
    //       responsive: true,
    //       lengthChange: false,
    //       autoWidth: false,
    //       buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
    //     })
    //     .buttons()
    //     .container()
    //     .appendTo("#example1_wrapper .col-md-6:eq(0)");
    //
    ////////
    // $('#example2').DataTable({
    //     "paging": true,
    //     "lengthChange": false,
    //     "searching": false,
    //     "ordering": true,
    //     "info": true,
    //     "autoWidth": false,
    //     "responsive": true,
    // });
    // });
  },
};
</script>
<style></style>
