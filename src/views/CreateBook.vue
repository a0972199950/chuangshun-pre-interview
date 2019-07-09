<template>
    <div>
        <app-Navbar
            :title="'Add new book'"
            :leftBtn="'default'"
            :rightBtn="{text: 'Save', method: createBook}"
        ></app-Navbar>

        <div id="form" class="container">
            <div class="form-group">
                <input type="text" v-model="isbn" @blur="$v.isbn.$touch()" class="form-control form-control-lg" placeholder="ISBN">
                <small v-if="$v.isbn.$error" class="form-text text-danger">ISBN is not correct!!</small>
            </div>

            <div class="form-group">
                <input type="text" v-model="title" @blur="$v.title.$touch()" class="form-control form-control-lg" placeholder="Title">
                <small v-if="$v.title.$error" class="form-text text-danger">Title is required!!</small>
            </div>

            <div class="form-group">
                <input type="text" v-model="author" @blur="$v.author.$touch()" class="form-control form-control-lg" placeholder="Author">
                <small v-if="$v.author.$error" class="form-text text-danger">Author is required!!</small>
            </div>
            
            <div class="form-group">
                <textarea v-model="description" @blur="$v.description.$touch()" class="form-control" rows="10" placeholder="Description"></textarea>
                <small v-if="$v.description.$error" class="form-text text-danger">Description is required!!</small>
            </div>                

        </div>
        
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import axios from "axios";
import moment from "moment";
import ISBN from "isbn-validate";
import { required } from "vuelidate/lib/validators"
export default {
    components: {
        appNavbar: Navbar
    },

    data(){
        return {
            isbn: "9789869744546",
            title: null,
            author: null,
            description: null
        }
    },

    methods: {
        createBook(){
            if(this.$v.$invalid){
                // 表單較驗失敗
                this.$v.$touch();
            } else {
                // 表單較驗成功
                const isbn = this.isbn;
                const title = this.title;
                const author = this.author;
                const description = this.description;
                const _this = this;

                axios.post('/books', {
                    isbn, title, author, description,
                    publicationDate: moment().format() // 使用者沒填時間就自動幫他抓現在的時間
                }).then(function (response) {
                    console.log(response);
                    alert("書籍新增成功，將跳轉回總攬頁面");
                    _this.$router.push({ name: "books" });
                }).catch(function (error) {
                    console.log(error);
                    alert("書籍新增失敗，請再試一次");
                });
            }            
        }
    },

    validations: {
        isbn: {
            correctISBN: value => ISBN.Validate(value)
        },
        title: { required },
        author: { required },
        description: { required }
    }
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
            resize: none;
        }

        small {
            font-size: 1.2rem;
            padding: 0 1rem;
        }
    }
</style>