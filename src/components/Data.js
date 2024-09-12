
import img from './placeholder.png'
import img_masseg from './message.png'
import img_wh from "./free-icon-whatsapp-1384023.png"
import img_tg from "./icons8-telegram-logo-94.png"
import img_fb from "./free-icon-facebook-733547.png"
import styled from 'styled-components'
import styles from "./Data.module.css"

const Footer = styled.footer`
margin-top: 30px;
`
const Title = styled.div`
    width: 100%;
    height: 60px;
    background-color: rgba(165, 42, 42, 0.705);
    display: flex;
    justify-content: space-between; 
`
const Adress = styled.div`
 font-size: 13px;
    width: 20%;
    display: flex;
    align-items: center;
   
    margin-left: 20px;
` 
const ImgDiv = styled.div`
  margin-right: 50px;
    align-items: center;
    display: flex;
    font-size: 13px;
`
const Img = styled.img`
width: 22px;
`



const Data=()=>{
    
    return(
           <Footer>
              <Title >
                <Adress>
                <img className={styles.img} src={img}/>
                <h3>г.Бишкек    Ул. Исанова</h3>
                </Adress>
             </Title>
              <div className={styles.title_two}>
                
              </div>
           </Footer>
           )
}

export default Data;