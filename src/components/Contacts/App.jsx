import './App.css'

function Contacts() {
    return (
        <section className="contacts">
            <div className="container flex">
                <h4>Получите эксклюзивное <br /> предложение на тренажеры <br /> TRUE FITNESS</h4>
                <h6>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</h6>

                <form action="#" className='flex'>
                    <input type="text" name="name" id="name" placeholder='имя' required/>
                    <input type="email" name="email" id="email" placeholder='EMail' required/>
                    <input type="tel" name="tel" id="tel" placeholder='+998 (99)-999-99-99' required/>
                    <button>ОТПРАВИТЬ</button>
                </form>

                <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
            </div>
        </section>
    )
}


export default Contacts;