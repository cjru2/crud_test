<template>
<div class="documentation">

<!-- markdown -->
<q-markdown >
Personal Details
===

</q-markdown>
<!-- /markdown -->

<div class="component q-ma-lg">
    <div class="form-container">
        <u-q-crud></u-q-crud>
    </div>
</div>

<!-- markdown -->
<q-markdown >

The __code below__ is for `CRUD`

``` html
{{ code }}
```

</q-markdown>
<!-- /markdown -->


</div>
</template>

<script>
import UQCrud from '../../components/UQCrud'

export default
{
    data:() =>
    ({
        code: `<div class="component q-ma-lg">
    <div class="form-container">
        <u-q-crud></u-q-crud>
    </div>
</div>`
    }),
    components: { UQCrud },
    mounted()
    {
    },
    methods: { },
}
</script>