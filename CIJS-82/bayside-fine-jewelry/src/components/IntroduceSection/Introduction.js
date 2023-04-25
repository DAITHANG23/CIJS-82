import './Introduction.css'

const Introduction = () => {
    return <section className="introduction">

        <div className="intro-content">
            <h2>{'Hand Crafted fine pieces.'.toUpperCase()}</h2>
            <p>We also firmly believed that our customers deserved more choices, straightforward information and legendary service.</p>
            <button>LEARN MORE</button>
        </div>
        <div className="intro-img">
            <img src="./images/Image.png" alt="" />
        </div>

    </section>
}

export default Introduction;