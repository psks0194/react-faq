import { useEffect, useState } from "react";

const FAQList = ({faq, index}) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        if(index === 0){
            setIsShow(true)
        }
    },[index])

    const clickHandler = ()=>{
        setIsShow(isShow => !isShow);
    }

    return <>
    <div className="faq-box">
        <div className="faq-que" onClick={clickHandler}>
            <button className={isShow ? 'arrow' : ''}>&gt;</button>
            <div>{faq.que}</div>
        </div>
        {isShow && <div className="faq-ans">{faq.ans}</div>}
    </div>
    </>
}

export default FAQList;