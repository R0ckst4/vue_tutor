<template>
    <div class="app">
         <form @submit.prevent >
                <h4> Создание поста</h4>

                <input :value="title" @input="title = $event.target.value" class="input"  type="text" placeholder="Название">
                <input :value="body" @input="body = $event.target.value" class="input" type="text" placeholder="Описание"> 

                <button class="createButton" @click="createPost">Создать</button>
         </form>
        <div class="post" v-for="post in posts">
            <div><strong>Название:</strong> {{post.title}}</div>
            <div><strong>Описание:</strong> {{post.body}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            posts: [
            {id: 1, title: 'Орумджек комнатный', body: 'Описание орумджека'},
            {id: 2, title: 'Орумджек комнатный 2', body: 'Описание орумджека'},
            {id: 3, title: 'Орумджек комнатный 3', body: 'Описание орумджека'},
            ],
            title: '',
            body: '',
        
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,

            };

            this.posts.push(newPost);
            this.title = '';
            this.body = '';
            
        },
        
    },
}

</script>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;

}
form {
    display: flex;
    flex-direction: column;

}

.createButton {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px ;
    background-color: white;
    color: teal;
    border: 1px solid teal;

}

</style>
