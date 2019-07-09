<template>
    <router-link :to="{name: 'editBook', params: { id }}" class="card border-0">
        <div class="card-body p-3 d-flex flex-column justify-content-between">
            <div>
                <h1 class="card-title text-center">X</h1>
                <p class="card-text text-secondary">{{description | limitDescription(70)}}</p>
            </div>
            
            <div>
                <cite class="text-secondary">by {{author}} {{publicationDate | formatDate}}</cite>
            </div>
            
        </div>
    </router-link>
</template>

<script>
import moment from "moment";

export default {
    props: ["id", "description", "author", "publicationDate"],

    filters: {
        limitDescription(description, max){
            if(description.length > max){
                return description.substring(0, max) + "...";
            } else {
                return description;
            };            
        },

        formatDate(date){
            return moment(date).format("YYYY-MM-DD");
        }
    }
}
</script>


<style lang="scss" scope>
    a.card {
        color: inherit !important;
        text-decoration: none !important;
    }

    .card {
        font-size: 1.4rem;
        height: 20rem;
    }
</style>