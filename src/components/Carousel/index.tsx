import React,{useState,useEffect} from 'react'
import { render } from '@testing-library/react'
import './index.scss'
interface ImgProps {
    imgUrl?:string[],
}


const Carousel:React.FC<ImgProps> = (props)=>{
    console.log(props)
    let length = props.imgUrl?.length;
    let imgUrl = props.imgUrl;
    useEffect(()=>{
        let demoImg = document.getElementsByClassName('img_box')[0];
        console.log(demoImg)
    },[])
    return (
        <div className="carousel_box">
            <div className="img_box">
                {
                    imgUrl?.map((item,index)=>{
                        return (
                            <img src={item} alt="" key={item}/>
                        )
                    })
                }
            </div>
            <div className="line_box"></div>
        </div>
    )
}
export default Carousel