export default function HeroSection() {
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section-title">Hi, I'm Kit!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            BU CS Student
                        </span>{" "}
                        <br/>
                        Aspiring SWE
                    </h1>
                    <p className="hero--section-description">
                        I am a highly driven Boston University Computer Science and Linguistics graduate with strong technical skills seeking a full-time 
position as a Junior Software Development and IT Support Specialist. Eager to contribute to a forward-thinking organization 
by solving complex problems, work on maintaining high quality code, and ensuring the seamless operation of IT systems. 
                        
                        <br/>
                        <br/>

                        Feel free to learn more about me below or shoot an email!
                        <br/>
                        Email: kityan3002@gmail.com
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/BUCS.png" alt="Hero Section" />
            </div>

        </section>
    )
};