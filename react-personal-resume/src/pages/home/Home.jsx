import styles from './Home.module.css'
import { Header } from '../../components';
import { useEffect } from 'react';
import Typed from 'typed.js';
import {notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export function Home() {
  useEffect(() => {  
    var type = new Typed('.typing-text',{
        strings : [ 'web designer', 'front end developer', 'graphic designer', 'photographer' ],
        typeSpeed:200,
        backSpeed: 50,
        loop:true
        
    });
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      type.destroy();
    }
},[]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: ``,
      description:
        '嘻嘻就不给你看~',
      placement,
      style:{
        background:'#DDE8DC',
        width:'300px'
      },
      icon:<SmileOutlined />,
      duration: 2,
    });
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.home} id="home">
          <h3>hi &#128512;大家好，这里是...</h3>
          <h3 className={styles.name}>
            一个才华集美貌于一体的女子，我叫 <span>Li Yuan</span>
          </h3>
          <h3 className={styles.post}>
            我认为，我是一个<span className="typing-text">front end developer</span>
          </h3>
          <h3 className={styles.post}>
            如果你想更加具体地了解我，欢迎下载我的简历&#128151;~
          </h3>
          <h3 className={styles.post}>
          &dArr;
          </h3>


          <a href="#">
            {contextHolder}
            <button className={styles.btn} onClick={()=>openNotification('top')}>下载简历</button>
          </a>

          <div className={styles.share}>
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-pinterest"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </section>
      </div>
    </>
  )
}
