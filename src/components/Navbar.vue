<template>
    <nav id="navbar" class="d-flex justify-content-between align-item-center p-2">

        <button class="btn btn-link text-white" @click="leftBtn.method">
            {{leftBtn.text}}
        </button>


        <h3 class="title text-white">
            {{title}}
        </h3>

        <button class="btn btn-link text-white" @click="rightBtn.method">
            {{rightBtn.text}}
        </button>

    </nav>
</template>

<script>
export default {
    props: ["title", "leftBtn", "rightBtn"]
}
</script>


<style lang="scss" scope>
    h3 {
        margin: 0;
        font-weight: normal;
    }

    
    
    #navbar {
        background: #FFC35F;

        button {
            font-size: 2rem;
            text-decoration: none;
        }        

        .title {
            font-size: 2.5rem;
        }
    }
</style>