<template>
        <nav 
            id="navbar" 
            class="d-flex align-items-center p-2"
            :class="!!rightBtn + !!title + !!leftBtn > 1 ? 'justify-content-between' : 'justify-content-end'"
        >
            <button v-if="leftBtn === 'default'" class="btn btn-link text-white" @click="$router.go(-1)">
                Back
            </button>

            <button v-else-if="leftBtn" class="btn btn-link text-white" @click="leftBtn.method">
                {{leftBtn.text}}
            </button>

            <h3 v-if="title" class="title text-white">
                {{title}}
            </h3>

            <button v-if="rightBtn" class="btn btn-link text-white" @click="rightBtn.method">
                {{rightBtn.text}}
            </button>

        </nav>
</template>

<script>
export default {
    props: ["title", "leftBtn", "rightBtn"],
}
</script>


<style lang="scss" scope>
    h3 {
        margin: 0;
        font-weight: normal;
    }
    
    #navbar {
        background: #FFC35F;
        position: fixed;
        top: 0;
        z-index: 200;
        width: 100%;
        max-width: 576px;

        button {
            font-size: 2rem;
            text-decoration: none;
        }        

        .title {
            font-size: 2.5rem;
        }
    }
</style>