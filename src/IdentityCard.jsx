import React from "react";

export default function IdentityCard(){
    
    function Rotate(){
        const idCard = document.querySelector(".idCard");
        const heading = document.querySelector(".heading");
        const idCardHead = document.querySelector(".idCardHead");
        const idCardBody = document.querySelector(".idCardBody");
        const idCardFooter = document.querySelector(".idCardFooter");     
        idCard.setAttribute("className", "rotate idCardRotated");
        // idCard.style.display = "none";
        heading.style.display = "none";
        idCardHead.style.display = "none";
        idCardBody.style.display = "none";
        idCardFooter.style.display = "none";
        let div = document.createElement("div");
        div.setAttribute("className", "new-body rotate");
        div.innerHTML = "<h2>Identity Card</h2><p>Hobby : Travelling</p>";
        idCard.append(div);
        
    }
    return (
        <>
            <div className="idCardContainer">                  
                <div onClick={Rotate} className="idCard">
                    <h1 className="heading">Identity Card</h1>
                    <div className="idCardHead">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgdPnMdBjCdxkKFnwvfzcvEA6RTfYRMuEA&usqp=CAU" />
                    </div>
                    <div className="idCardBody">
                        <p>Name : Shri Ram Chandra</p>
                        <p>Date of Birth : 28 May 1999</p>
                        <p>Father's Name : Raja Dashrath</p>
                    </div>
                    <div className="idCardFooter">
                        <p>Gmail: <a href="#">ramchandra@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </>


    );
}