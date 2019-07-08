<template>
    <div class="card border-0">
        <div class="card-body p-3">
            <h1 class="card-title text-center">X</h1>

            <p class="card-text text-secondary">{{description | limitDescription(5)}}</p>

            <cite class="text-secondary">by {{author}} {{publicationDate | formatDate}}</cite>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    props: ["description", "author", "publicationDate"],

    filters: {
        limitDescription(description, num){
            const descriptionArr = description.split(" ");
            return descriptionArr.slice(0, num).join(" ");
        },

        formatDate(date){
            return moment(date).format("YYYY-MM-DD");
        }
    }
}
</script>


<style lang="scss" scope>
    .card {
        font-size: 1.4rem;
    }
</style>