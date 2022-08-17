<template>
    <div class="container">
        <h1 class="text-center my-3">Country List</h1>
        <div v-if="this.countries" class="row">
            <div class="col-4" style="max-height: 90vh; overflow: scroll">
                <ul class="list-group">
                    <router-link
                        :to="`/list/${country.alpha3Code}`"
                        v-for="(country, index) in countries"
                        :key="index"
                    >
                        <li
                            class="list-group-item d-flex flex-column justify-content-center"
                        >
                            <img
                                :src="`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`"
                                :alt="'flag from ' + country.name.official"
                                style="width: 120px"
                            />

                            <p class="text-center fw-bold">
                                {{ country.name.official }}
                            </p>
                        </li>
                    </router-link>
                </ul>
            </div>
            <div class="col-8">
                <!-- <CountriesDetails /> -->
                <router-view />
            </div>
        </div>
        <!-- -------------------SPINNER------------------- -->
        <div v-else class="row">
            <Spinner text="Loading Countries..." />
        </div>
    </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import CountriesDetails from "../components/CountriesDetails.vue";
export default {
    name: "CountriesList",
    components: { Spinner, CountriesDetails },

    data() {
        return {
            // un valor de dato de estilo null para poder recibir la info del API
            countries: null,
            url: "https://ih-countries-api.herokuapp.com/countries",
        };
    },

    methods: {
        async fetchCountries() {
            try {
                const response = await fetch(this.url);
                const finalResponse = await response.json();
                // console.log(finalResponse);
                this.countries = finalResponse.sort((a, b) =>
                    a.name.official.localeCompare(b.name.official)
                );
            } catch (err) {
                console.log(err);
                console.log(err.name + " in Countries List");
            } finally {
                console.log(
                    `finally loading after try{} and catch{} in Countries List`
                );
            }
        },
    },

    // Created hook para hacer la llamada a la base de datos
    created() {
        setTimeout(() => {
            this.fetchCountries();
        }, 2000);
    },
};
</script>

<style></style>
