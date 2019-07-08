<template>
    <div>
        <app-Navbar
            class="mb-5"
            :title="''"
            :leftBtn="{text: 'last', method: null}"
            :rightBtn="{text: 'New', method: gotoCreateBook}"
        ></app-Navbar>


        <div class="container">
            <div class="row">
                <template v-for="book in books.slice(0, amountToShow)">
                    <div class="col-6 mb-4">
                        <app-book-card
                            :description="book.description"
                            :author="book.author"
                            :publicationDate="book.publicationDate"
                        ></app-book-card>
                    </div>
                </template>
            </div>

            <button 
                id="load-more"
                class="btn btn-block btn-lg mb-5 py-3"
                @click="loadMore"
            >Load More</button>
        </div>
        
        

    </div>
</template>


<script>
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import axios from "axios";

export default {
    components: {
        appNavbar: Navbar,
        appBookCard: BookCard
    },

    data(){
        return {
            books: [],
            amountToShow: 6,
            loadMoreIncrease: 6
        }
    },

    created(){
        axios.get("https://demo.api-platform.com/books?order[isbn]").then(res => {
            const books = res.data[`hydra:member`];
            this.books = books;
        })
    },

    methods: {
        loadMore(){
            this.amountToShow += this.loadMoreIncrease;
        },

        gotoCreateBook(){
            this.$router.push({ name: "createBook" });
        }
    }
}
</script>

<style lang="scss" scope>
    #load-more {
        background: #FFC35F;
        color: white;
        font-size: 1.8rem;
    }
</style>