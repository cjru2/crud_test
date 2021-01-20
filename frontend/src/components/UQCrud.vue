<template>
    <div>
	    <!-- content -->   
       <div class="q-mt-xs">
           <div class="q-pa-md">
             <q-table
               title=""
               table-header-class="bg-blue-grey-1"
               :data="user_data"
               :columns="user_columns"
               row-key="name"
               @row-click=""
               >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn dense round flat color="orange-3" @click="editRow(props)" icon="edit"></q-btn>
                    <q-btn dense round flat color="red-4" @click="deleteRow(props)" icon="delete"></q-btn>
                  </q-td>          
                </template>
             </q-table>
           </div>
       </div>
      <div class="q-pa-xl">
        <div class='content text-left'>
          <q-form>
            <div class="field q-mt-xs">
                <label>First Name</label>
                <div><q-input v-model="form_data.first_name" placeholder="Enter First Name" outlined dense
                      onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || event.charCode == 32"
                      lazy-rules :rules="[ val => val && val.length > 0 || 'Please type your First Name', val => val && val.length < 40 || 'Maximum of 40 characters']">
                </q-input></div>
            </div>
            <div class="field q-mt-xs">
                <label>Last Name</label>
                <div><q-input v-model="form_data.last_name" placeholder="Enter Last Name" outlined dense
                      onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || event.charCode == 32"
                      lazy-rules :rules="[ val => val && val.length > 0 || 'Please type your Last Name', val => val && val.length < 40 || 'Maximum of 40 characters']">
                      </q-input></div>
            </div>
            <div class="field q-mt-xs">
                <label>Address</label>
                <div><q-input v-model="form_data.address" placeholder="Enter Address" outlined dense
                      lazy-rules :rules="[ val => val && val.length > 0 || 'Please type your Address', val > val && val.length < 200 || 'Maximum of 200 characters']">
                     </q-input></div>
            </div>
            <div class="field q-mt-xs">
                <label>Age</label>
                <div><q-input v-model="form_data.age" placeholder="Enter Age" outlined dense
                      onkeypress="return (event.charCode > 47 && event.charCode < 58)"
                      lazy-rules :rules="[ val => val && val > 17 
                                        || 'Age must be 18 and up', val => val && val < 101 || 'Age is invalid. Must not exceed to 100 years old']">
                     </q-input></div>
            </div>
            <div class="q-pa-md q-gutter-sm">
                <div><q-btn type="button" @click="update()" color="primary" unelevated class="full-width">Update</q-btn></div>
                <div><q-btn type="button" @click="cancel()" color="grey-5" unelevated class="full-width">Cancel</q-btn></div>
            </div>
          </q-form>
        </div>
	    </div>
    </div>
</template>

<script>
// <div><q-btn type="button" @click="del()" color="deep-orange" unelevated class="full-width">Remove</q-btn></div>
import { postGetData, postTestUpdate, postTestDelete } from '../references/url';

export default
{
    data:() =>(
    {
        form_data:
        {
            first_name: '',
            last_name: '',
            user_id: '',
        },
        user_columns:[
          {
            name: 'first_name',
            required: true,
            label: 'First Name',
            align: 'left',
            field: row => row.first_name,
            format: val => `${val}`,
            sortable: true,
            
          },
          {
            name: 'last_name',
            required: true,
            label: 'Last Name',
            align: 'left',
            field: row => row.last_name,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'address',
            required: true,
            label: 'Address',
            align: 'left',
            field: row => row.address,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'age',
            required: true,
            label: 'Age',
            align: 'left',
            field: row => row.age,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'actions',
            required: true,
            label: 'Actions',
            align: 'left',
            field: row => row.age,
            format: val => `${val}`,
            sortable: true
          },
        ],
        user_data:[],
    }),
    async mounted()
    {  
      this.find();
    },
    methods:
    {
        async find()
        {
          let get = await this.$_post(postGetData);
          this.user_data = get.data.getdata;
          console.log('data',this.user_data);
        },

        async update()
        {
             this.$q.loading.show();
            let update = await this.$_post(postTestUpdate, this.form_data);
            console.log(this.form_data,'form');
            if(update)
            {
              this.$q.dialog({ title: `Success Message`, message: "Successfully Updated" });
              this.find();
            }
             this.$q.loading.hide();
            // this.find();
        },

        async del()
        {
            this.$q.loading.show();
            let del = await this.$_post(postTestDelete, this.form_data);
            console.log(this.form_data,'del');
            if(del)
            {
                this.$q.dialog({ title: `Success Message`, message: "Successfully Removed" });
                this.cancel();
            }
            this.$q.loading.hide();
            this.find();
        },

        // clickRow (evt, row)
        // {
        //   console.log('clicked on', row._id);
        //   this.form_data.first_name = row.first_name;
        //   this.form_data.last_name = row.last_name;
        //   this.form_data.user_id = row._id;
        //   this.form_data.address = row.address;
        //   this.form_data.age = row.age;
        //   console.log('ID HERE',this.form_data.user_id);
        // },

        editRow(props) {
          console.log('clicked on', props.row._id);
          this.form_data.user_id = props.row._id;
          this.form_data.first_name = props.row.first_name;
          this.form_data.last_name = props.row.last_name;
          this.form_data.address = props.row.address;
          this.form_data.age = props.row.age;
          // this.clickRow();
        },
        
        deleteRow(props){
           this.form_data.user_id = props.row._id;
           let fname = props.row.first_name + ' ' + props.row.last_name;
          //  this.del();
          this.$q.dialog({
          title: 'Confirm',
          message: 'Do you want to remove ' + fname + '?',
          ok: true,
          cancel: true,
          }).onOk(() => {
            this.del();
          })
        },       
      
        cancel(){
            this.form_data.first_name = "";
            this.form_data.last_name = "";
            this.form_data.address = "";
            this.form_data.age = "";
            this.form_data.user_id = "";
        }   
     }
 }
</script>