import "./Style.css";

const Form = ({theme}) => {
    return (
        <div>
            <div className="form" style={theme}>
                <div className="box1">
                    <p className="active">Active Users</p>
                    <p className="aug"> <a>for</a> August 2020</p>
                </div>
               
                <div className="box2">
                    <div className="name">
                        <div className="nameBox">
                           <img className="img" src="data:image/jpeg;base64,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" alt="" />
                           <div className="pname">
                            <p>Nrupul Dev</p>
                            <p className="grey">Copenhagen, Denmark</p>
                            </div>
                        </div>
                        <div className="points">
                        <p>&bull;</p>
                        <p>&bull;</p>
                        <p>&bull;</p>
                     </div>
                    </div>
                    
                    <div className="line">
                        <div className="color"></div>
                        <div className="light"></div>
                    </div>
                    <div className="prof">
                        <p>Professional level 15</p>
                        <p>4723 Points</p>
                    </div>
                </div>
                
                <div className="box2">
                    <div className="name">
                        <div className="nameBox">
                           <img className="img" src="data:image/jpeg;base64,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" alt="" />
                           <div className="pname">
                            <p>Sandhy</p>
                            <p className="grey">Copenhagen, Denmark</p>
                            </div>
                        </div>
                        <div className="points">
                        <p>&bull;</p>
                        <p>&bull;</p>
                        <p>&bull;</p>
                     </div>
                    </div>
                    
                    <div className="line">
                        <div className="color2"></div>
                        <div className="light2"></div>
                    </div>
                    <div className="prof">
                        <p>Professional level 15</p>
                        <p>4723 Points</p>
                    </div>
                </div>
                
                <div className="box2">
                    <div className="name">
                        <div className="nameBox">
                           <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" alt="" />
                           <div className="pname">
                            <p>Elon Tusk</p>
                            <p className="grey">Copenhagen, Denmark</p>
                            </div>
                        </div>
                        <div className="points">
                        <p>&bull;</p>
                        <p>&bull;</p>
                        <p>&bull;</p>
                     </div>
                    </div>
                    
                    <div className="line">
                        <div className="color3"></div>
                        <div className="light3"></div>
                    </div>
                    <div className="prof">
                        <p>Professional level 15</p>
                        <p>4723 Points</p>
                    </div>
                 </div>
            </div>
            
            
        </div>
    );
}

export default Form;