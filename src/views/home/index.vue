<template>
    <div class="home">
        <h1 @click="handleChangeUser('王五', 30)">home</h1>
        <div class="">{{ count }}</div>
        <div class="">{{ user.name }}</div>
        <div class="">{{ user.age }}</div>
    </div>

</template>

<script setup lang="ts">
import {ref, reactive, computed} from 'vue';
// import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/modules/home'
import { loginApi } from '@/api/home'


const userStore = useUserStore()

const { userInfo, token } = storeToRefs(userStore)
let userName = ref(userInfo.value.name)
let userToken = ref(token)

    const count = ref(0);
    let user = reactive({ name: '张三', age: 18 });

    // const handleAdd = () => {
    //     count.value++;
    //     console.log(count.value)
    // };
    // const router = useRouter()

    const handleChangeUser = (name: string, age: number) => {
        user.name = name;
        user.age = age;
        handleLogin()
        // router.push('/about');
    };
    // 获取state使用computed或者使用storeToRefs，直接使用不具备响应式（拿到的永远是初次的值）
    const username = computed(() => userStore.userInfo.name)
    // 获取getter使用storeToRefs，或者直接使用，在模板里 userStore.namePic

    console.log(username.value)
    console.log(token.value)

    const handleLogin = () => {
        loginApi({
            name: userName.value
        })
        .then((res) => {
            userName.value = res.name
            userToken.value = res.token
        })
        .catch((err) => {
            console.log(err)
        })
    }    
   
</script>

<style scoped>
    .home {
        --size: 60px;
        --fontColor: '#253612'
    }
    h1{
        font-size: calc(var(--size) / 2) ;
        color: var(--fontColor)
    }
</style>