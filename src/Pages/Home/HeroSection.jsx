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
                        I am currently a senior majoring in Linguistics and Computer Science at BU.
                        <br/>
                        I'm looking for Full Time new Graduate Roles.
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