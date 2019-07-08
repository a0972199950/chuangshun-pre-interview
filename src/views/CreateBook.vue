<template>
    <div>
        <app-Navbar
            class="mb-5"
            :title="'Add new book'"
            :leftBtn="{text: 'Back'}"
            :rightBtn="{text: 'Save', link: 'createBook'}"
        ></app-Navbar>

        <div class="container">
            <form action="" id="form">
                <div class="form-group">
                    <input type="text" class="form-control form-control-lg" placeholder="Author">
                </div>
                
                <div class="form-group">
                    <input type="text" class="form-control form-control-lg" placeholder="Created at">
                </div>
                
                <div class="form-group">
                    <textarea name="" class="form-control" rows="10" placeholder="description"></textarea>
                </div>                
            </form>
        </div>
        
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
    components: {
        appNavbar: Navbar
    },
}
</script>

<style lang="scss" scope>
    #form {
        input {
            font-size: 1.6rem;
            border: none;
        }
        
        textarea {
            font-size: 1.6rem;
            border: none;
        }
    }
</style>