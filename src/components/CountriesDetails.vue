<template>
    <div class="col-7">
        <img
            :src="`https://flagcdn.com/w640/${alpha2Code.toLowerCase()}.png`"
            alt="country flag"
            style="width: 300px"
        />
        <h1>
            <!-- {{ item.name.common }} -->
            {{ name }}
        </h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{{ capital }}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{{ area }} km <sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td v-if="borders.length === 0">
                        <ul>
                            <li>This Coutry has not borders</li>
                        </ul>
                    </td>
                    <td v-else>
                        <ul v-for="(border, idx) in borders" :key="idx">
                            <li>
                                <router-link
                                    :to="`/list/${border}`"
                                    :href="`${border}`"
                                >
                                    <!-- {{ this.newObj.get(countryBorder) }} -->
                                    {{ border }}
                                </router-link>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import { reactive, ref } from "@vue/reactivity";
// import { reactive, ref, computed, watch, onMounted } from "vue";
// import { useRoute } from "vue-router";
export default {
    // name: "CountriesDetails",

    // setup() {
    //     const name = ref("");
    //     const capital = ref(""):
    //     const alpha3Code = ref("");
    //     const area = ref("");
    //     const borders = ref([]);
    //     const alpha2Code = ref("");
    //     const countryinfo = ref(null);

    //     const countryData = reactive({
    //         name: "",
    //         area: "",
    //         capital: "",
    //         borders: [],
    //         alpha3Code: "",
    //         alpha2Code: "",
    //     })

    //     const route =  useRoute();

    //     const getCountryByAlphaCode = async {} => {

    //         alpha3Code = route.params.alpha3Code;

    //         const response = await fetch(
    //             `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
    //         );
    //         const finalResponse = await response.json();
    //         const name = finalResponse.name.common;
    //         const area = finalResponse.area;
    //         const capital = finalResponse.capital[0];
    //         const borders = finalResponse.borders;
    //         const alpha2Code = finalResponse.alpha2Code;
    //          const countryInfo.value = finalResponse;
    //          return {name, area, capital, borders, alpha2code, countryInfo};

    //     }

    // onMounted(()=>{
    //     getCountryByAlphaCode();
    // })

    // const countryCode = computed(()=> {
    //     return route.params.alpha3Code;
    // })
    // // const countryCode = computed(function() {
    // //     return route.params.alpha3Code;
    // // })

    // watch(countryCode(newCountryCode)=>{
    //      getCountryByAlphaCode();
    // })

    //     return {
    //         name,
    //         capital,
    //         alpha3Code,
    //         alpha2Code,
    //         area,
    //         borders,
    //         getCountryByAlphaCode,
    //         countryCode,
    //     };
    // },
    name: "CountriesDetails",
    data() {
        return {
            url: "https://ih-countries-api.herokuapp.com/countries",
            name: "",
            area: "",
            capital: "",
            borders: [],
            alpha3Code: "",
            alpha2Code: "",
            // Data from API inse and object
            countryData: {},
        };
    },

    methods: {
        async getCountryByAlphaCode() {
            this.alpha3Code = this.$route.params.alpha3Code;
            // const response = await fetch(this.url);
            const response = await fetch(
                `https://ih-countries-api.herokuapp.com/countries/${this.alpha3Code}`
            );
            const finalResponse = await response.json();
            // console.log(finalResponse);
            this.name = finalResponse.name.common;
            this.area = finalResponse.area;
            this.capital = finalResponse.capital[0];
            this.borders = finalResponse.borders;
            this.alpha2Code = finalResponse.alpha2Code;
            this.countryData = finalResponse;
        },
    },
    // Es mounted porque el created es antes que ya esta siendo llamado en el otro componente countriesList
    mounted() {
        this.getCountryByAlphaCode();
    },

    computed: {
        countryCode() {
            return this.$route.params.alpha3Code;
        },
    },

    // WATCH monitorea un tipo de cambio en alguna función, pasamos un valor o dos el valor antiguo y nuevo valor
    watch: {
        countryCode(newCountryCode) {
            this.getCountryByAlphaCode();
        },
    },
};
</script>

<style></style>
