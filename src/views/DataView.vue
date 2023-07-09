<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">All Campaigns</h3>
        </div>
        <div class="card-body">
          <!-- prettier-ignore -->
          <!-- <table id="example1" class="table table-bordered table-striped"></table> -->
          <table id="my_table" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>h1</th>
                <th>h2</th>
                <th>h3</th>
                <th>h4</th>
                <th>h5</th>
                <th>h6</th>
                <th>h7</th>
                <th>h8</th>
                <th>h9</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="item in data">
                <td v-for="(value, key) in data">
                  {{ value }}
                </td>
              </tr> -->
              <tr>
                <td>1</td>
                <td>Name name name</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Name name name</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Name name name</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Name name name</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
                <td>value valuevalue value valuevalue value valuevalue</td>
              </tr>
            </tbody>
            <!-- <tfoot>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
                <th>Type</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </tfoot> -->
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import "datatables.net-bs4";
// import "@/assets/plugins/bootstrap/js/bootstrap";
import "@/assets/plugins/datatables/jquery.dataTables";
import "@/assets/plugins/datatables-bs4/js/dataTables.bootstrap4";
import "@/assets/plugins/datatables-responsive/js/dataTables.responsive";
import "@/assets/plugins/datatables-responsive/js/responsive.bootstrap4";
import "@/assets/plugins/datatables-buttons/js/dataTables.buttons";
import "@/assets/plugins/datatables-buttons/js/buttons.bootstrap4";
import "@/assets/plugins/jszip/jszip";
// import "@/assets/plugins/pdfmake/pdfmake";
// import "@/assets/plugins/pdfmake/vfs_fonts";
import "@/assets/plugins/datatables-buttons/js/buttons.html5";
import "@/assets/plugins/datatables-buttons/js/buttons.print";
import "@/assets/plugins/datatables-buttons/js/buttons.colVis";
export default {
  mounted() {
    $(function () {
      $("#my_table")
        .DataTable({
          responsive: true,
          lengthChange: false,
          autoWidth: false,
          buttons: ["copy", "csv", "excel", "print", "colvis"],
        })
        .buttons()
        .container()
        .appendTo("#my_table_wrapper .col-md-6:eq(0)");
      // $("#my_table").DataTable({
      //   paging: true,
      //   lengthChange: false,
      //   searching: false,
      //   ordering: false,
      //   info: true,
      //   autoWidth: false,
      //   responsive: true,
      // });
    });
  },
  data() {
    return {
      dt: null,
      data: [
        {
          id: 1,
          name: "name1",
          type: "type1",
          value: "value1",
          label: "label1",
          age: "100",
          date: "100",
          address: "address address 1",
          actions: "Edit",
        },
        {
          id: 2,
          name: "name2",
          type: "type2",
          value: "value2",
          label: "label2",
          age: "200",
          date: "200",
          address: "address address 2",
          actions: "Edit",
        },
        {
          id: 3,
          name: "name3",
          type: "type3",
          value: "value3",
          label: "label3",
          age: "300",
          date: "300",
          address: "address address 3",
          actions: "Edit",
        },
        {
          id: 4,
          name: "name4",
          type: "type4",
          value: "value4",
          label: "label4",
          age: "400",
          date: "400",
          address: "address address 4",
          actions: "Edit",
        },
      ],
    };
  },
  methods: {
    deleteItem(id) {
      console.log(id);
    },
  },
};
</script>
<style></style>
