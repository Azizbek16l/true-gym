import './App.css'

import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdSmartDisplay } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { ImHome } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";

import Run from '../../assets/run.svg'

function Services() {
    return (
        <section className="services">
            <div className="flex">
                <div className="services-txt">
                    <h1>Мы предлагаем <br /> полный комплекс услуг</h1>

                    <div className="cards flex">

                        <div className="card">
                            <FaHeadphonesSimple className='icon'/>
                            <h5>КОНСАЛТИНГ</h5>
                            <p>Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.</p>
                        </div>

                        <div className="card">
                            <MdSmartDisplay className='icon'/>
                            <h5>МОНТАЖ И СЕРВИСНОЕ <br /> ОБСЛУЖИВАНИЕ</h5>
                            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
                        </div>

                        <div className="card">
                            <SiNintendogamecube className='icon'/>
                            <h5>ПОДБОР ОБОРУДОВАНИЯ <br /> И 3D ПРОЕКТ</h5>
                            <p>Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.</p>
                        </div>

                        <div className="card">
                            <ImHome className='icon'/>
                            <h5>ФИРМЕННЫЙ SHOW-ROOM</h5>
                            <p>Пройдите тест-драйв оборудования перед приобретением.</p>
                        </div>

                        <div className="card">
                            <IoMdSettings className='icon'/>
                            <h5>ПОСТАВКА ЗАПЧАСТЕЙ</h5>
                            <p>Поставка как гарантийных, так и постгарантийных запчастей.</p>
                        </div>

                        <div className="card">
                            <FaShippingFast className='icon'/>
                            <h5>Доставка по всему <br /> Узбекистану</h5>
                            <p>Мы доставляем оборудование по всему Узбекистану.</p>
                        </div>

                    </div>
                </div>

                <aside>
                    <img src={Run} alt="" />
                </aside>
            </div>
        </section>
    )
}


export default Services;