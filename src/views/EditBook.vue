<template>
    <div>
        <app-loading v-if="loading"></app-loading>

        <app-Navbar
            :title="'Edit book'"
            :leftBtn="'default'"
            :rightBtn="{text: 'Edit', method: editBook}"
        ></app-Navbar>

        <div class="container" id="context">
            <div class="d-flex justify-content-between text-secondary">
                <p>Author: {{author}}</p>
                <p>{{createdAt}}</p>
            </div>

            <textarea v-model="description" class="form-control bg-light border-0 p-0" rows="10"></textarea>
        </div>
    </div>
</template>


<script>
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import axios from "axios";
import moment from "moment";
export default {
    components: {
        appNavbar: Navbar,
        appLoading: Loading
    },

    data(){
        return {
            id: null,
            author: null,
            createdAt: null,
            description: null,
            loading: true
        }
    },

    created(){
        axios.get(`/books/${this.$route.params.id}`).then(res => {
            const book = res.data;
            this.id = this.$route.params.id;
            this.author = book.author;
            this.createdAt = moment(book.publicationDate).format("YYYY-MM-DD");
            this.description = book.description;
            this.loading = false;
        }).catch(err => {
            console.log(err);
        })
    },

    methods: {
        editBook(){
            axios.put(`/books/${this.id}`, { 
                description: this.description
            }).then(res => {
                alert("編輯成功，即將跳轉回書籍總攬");
                this.$router.push({ name: "books" });
            }).catch(err => {
                alert("編輯失敗");
            })
        }
    }
}
</script>


<style lang="scss" scope>
    #context {
        p {
            font-size: 1.2rem;
        }

        textarea {
            font-size: 1.6rem;
            resize: none;
        }
    }
</style>