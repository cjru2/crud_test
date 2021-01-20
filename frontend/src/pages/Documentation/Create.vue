<template>
<div class="documentation">

<!-- markdown -->
<q-markdown >
Fill up Basic Information
===

</q-markdown>
<!-- /markdown -->

<div class="component q-ma-lg">
    <div class="form-container">
        <u-q-add></u-q-add>
    </div>
</div>

<!-- markdown -->
<q-markdown >

The __code below__ is for `Create`

``` html
{{ code }}
```

</q-markdown>
<!-- /markdown -->


</div>
</template>

<script>
import UQAdd from '../../components/UQAdd'

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
    components: { UQAdd },
    mounted()
    {
    },
    methods: { },
}
</script>