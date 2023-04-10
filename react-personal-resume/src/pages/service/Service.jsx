import {Header} from "../../components";
import styles from './Service.module.css';
import { Divider } from 'antd';

export function Service(){
    return <>
    <Header/>
    <div className={styles.container}>
        <h1 className={styles.title}>项目一：<h4>全球新闻发布网站</h4></h1>
        <h3>技术栈</h3>
        <ul>
            <li>creact-react-app搭建项目</li>
            <li>使用组件化思维</li>
            <li>引入UI组件库Antd</li>
            <li>使用redux-thunk、redux-saga等中间件</li>
            <li>使用styled-components阻止组件之间样式污染</li>
            <li>使用规范的代码编写</li>
        </ul>
        <h3>使用介绍</h3>
        <ul>
            <li>一共有两种身份，一种是超级管理员，权限最高；一种是区域管理员，分别掌管五个区域</li>
            <li>超级管理员 用户名：admin   密码：123456</li>
        </ul>
        <h3 className={styles.btn}><a href="http://175.178.114.226:12/#/login">项目链接</a></h3>


        <h1 className={styles.title}>项目一：<h4>贪吃蛇小游戏</h4></h1>
        <h3>技术栈</h3>
        <ul>
            <li>纯JS实现</li>
        </ul>
        <h3>使用介绍</h3>
        <ul>
            <li>这个应该大家都会玩嘻嘻</li>
        </ul>
        <h3 className={styles.btn}><a href="http://175.178.114.226:12/#/login">项目链接</a></h3>
    </div>
    </>
}