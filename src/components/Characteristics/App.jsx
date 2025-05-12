import './App.css'

function Characteristics() {
    return (
        <section className="characteristics">
            <div className="container flex">
                 <div className="flex">

                    <div className="card">
                        <h2 className='display-m'>Лучшие <br /> характеристики</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>    

                    <div className="s-card">
                        <h2 className='display-m'>ВЫСОКОЕ КАЧЕСТВО И <br /> НАДЕЖНОСТЬ</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>
                    </div>
                    
                </div>

                 <div className="flex">

                    <div className="s-card">
                        <h2 className='display-m'>Низкая СТОИМОСТЬ <br /> ВЛАДЕНИЕ</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание, так по стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов.</p>
                    </div>

                    <div className="card c-img">
                        <h2 className='display-m'>КАЧЕСТВЕННЫЕ И ОПЕРАТИВНЫЙ СЕРВИС</h2>
                        <hr className='hr'/>
                        <p className='body-m'>Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования.</p>
                    </div>    

                </div>
            </div>
        </section>
    )
}

export default Characteristics;