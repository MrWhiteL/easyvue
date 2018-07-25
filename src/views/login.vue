<template>
  <div id="login">
    <div class="login-form">
      <Card :bordered="false">
        <p slot="title">
          <i class="fa fa-sign-in" aria-hidden="true"></i>
            欢迎登录
        </p>
        <div>
            <Form ref="login" :model="user" :rules="rules">
              <FormItem prop="name">
                <Input v-model="user.name" placeholder="请输入用户名">
                  <span slot="prepend">
                      <i class="fa fa-user" aria-hidden="true"></i>
                  </span>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="user.password" placeholder="请输入密码">
                  <span slot="prepend">
                      <i class="fa fa-key" aria-hidden="true"></i>
                  </span>
                </Input>
              </FormItem>
              <FormItem>
                <Button @click="login" type="primary" long>登录</Button>
              </FormItem>
            </Form>
            <p class="login-tip"></p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
  export  default {
    data(){
      return{
        user:{
           name:'admin',
           password:''
        },
        rules:{
          name: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      login(){
        this.$router.push({
          name: 'main'
        });
      }
    }
  }


</script>


<style lang="scss" scoped="" type="text/css">
  #login{
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/login.jpg);
    background-size: cover;
    background-position: 50%;
    position: relative;
    .login-form{
      background-color: white;
      width: 300px;
      height: 250px;
      border-radius: 2px;
      position: absolute;
      left: calc(50% - 150px);
      top:calc(50% - 130px);
    }
  }
</style>
