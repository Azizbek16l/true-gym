import './App.css'

import Product from '../../assets/product.svg'

function Features() {
    return (
        <section className="features">
            <div className="container flex">
                <div className="features-txt">
                    <h1>TRUE <br /> <span>FITNESS</span></h1>
                    <hr width="100px"/>
                    <p>Современное и надежное оборудование для фитнес-клубов</p>
                    <span>КАРдио <br /> тренажеры</span>
                </div>

                <img src={Product} className="product" />
            </div>
        </section>
    )
}


export default Features;