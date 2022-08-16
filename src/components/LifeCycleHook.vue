<template>
    <h1>CountriesList</h1>
    <router-view></router-view>
</template>

<script>
export default {
    name: "CountriesList",
    beforeCreate: function () {
        setTimeout(function () {
            console.log("beforeCreate()");
        }, 2000);
    },
    created: function () {
        console.log("created()");
    },
    beforeMount: function () {
        setTimeout(function () {
            console.log("beforeMount()");
        }, 2000);
    },
    mounted: function () {
        setTimeout(function () {
            console.log("mounted()");
        }, 3000);
    },
    beforeUpdate: function () {
        console.log("beforeUpdate()");
    },
    updated: function () {
        console.log("updated()");
    },
};
</script>

<style></style>
