<template>
    <q-layout class="main q-px-xl" view="hHh Lpr lFf">
        <q-header class="text-h5 bg-white text-black">
            <div class="q-px-xl q-pt-md">
                <!-- <q-toolbar class="bg-white text-black shadow-2"> -->
                  <!-- <q-btn @click="$router.push({name: 'front_dashboard'})" flat no-caps label="CrowdCoin" /> -->
                  <!-- <q-space /> -->

                  <!--
                    notice shrink property since we are placing it
                    as child of QToolbar
                  -->
                  <!-- <q-tabs v-model="tab" shrink>
                    <q-tab @click="$router.push({name: 'front_dashboard'})" name="campaigns" no-caps label="Campaigns" />
                    <q-tab @click="$router.push({name: 'new_campaign'})" name="plus" icon="add" />
                  </q-tabs> -->
                  <!-- <q-btn-toggle
                    @click="$router.push({name: route_name})"
                    v-model="route_name"
                    flat stretch
                    toggle-color="black"
                    :options="[
                      {label: 'Campaigns', value: 'front_dashboard'},
                      {icon: 'add', value: 'new_campaign'},
                    ]"
                  /> -->
                <!-- </q-toolbar> -->
            </div>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import EssentialLink    from 'components/EssentialLink.vue'
import navigation       from '../references/nav'

export default
{
    name: 'FrontLayout',
    components: {
        EssentialLink
    },
	data: () =>
	({
		package_data: { version: '0.0.0' },
		leftDrawerOpen: false,
		navigation: [],
        tab: '',
        route_name: 'front_dashboard'
	}),
    mounted()
    {
        this.navigation = navigation;
    },
    methods:
    {
    },
}
</script>
