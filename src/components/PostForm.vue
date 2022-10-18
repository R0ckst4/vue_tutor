<template>
    <div>
        <form @submit.prevent >
                <h4> Создание поста</h4>

                <my-input v-model="post.title"  type="text" placeholder="Название"></my-input>
                <my-input v-model="post.body" type="text" placeholder="Описание"></my-input> 

                <my-button @click="createPost" style="align-self: flex-end; margin-top: 15px;" class="btn" >Создать</my-button>
         </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            post:{
                title: "",
                body: "",
            },
        }
    },

    methods: {
        createPost(){
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
            title: '',
            body : '',
        }
                
        }
    }
}

</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;

}
</style>