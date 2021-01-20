<template>
	    <div class='content text-left'>
	    	<q-form @submit="save()">
		     	<div class="field">
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
                       lazy-rules :rules="[ val => val && val.length > 0 || 'Please type your Address', val => val && val.length < 200 || 'Maximum of 200 characters']"></q-input></div>
		       </div>
               <div class="field q-mt-xs">
                    <label>Age</label>
                    <div><q-input v-model="form_data.age" placeholder="Enter Age" outlined dense
                        onkeypress="return (event.charCode > 47 && event.charCode < 58)"
                        lazy-rules :rules="[ val => val && val > 17 || 'Age must be 18 and up', val => val && val < 101 || 'Age must not exceed to 100 years old and up']">
                    </q-input></div>
                </div>
          <div class="q-pa-md q-gutter-sm">
              <div><q-btn type="submit" color="secondary" unelevated class="full-width">Save</q-btn></div> 
          </div>
         </q-form>
	    </div>
        
    </div>
    
</template>

<script>
import { postTestSave, Toast } from '../references/url';

export default
{
    data:() =>(
    {
        form_data:
        {
            first_name: '',
            last_name: '',
            address: '',
            age: '',
            user_id: '',
        },

        
    }),
    async mounted()
    {  
    },
    methods:
    {
        async save()
        {
            this.$q.loading.show();
            let register = await this.$_post(postTestSave, this.form_data);
            if(register)
            {
                console.log('s', this.form_data)
                this.$q.dialog({ title: `Success Message`, message: "Successfully Saved" });
            }
            this.$q.loading.hide();
        },
    }
}
</script>