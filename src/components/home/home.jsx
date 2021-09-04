import { useEffect } from 'react';
import { fetchPOST, SendFile } from '../../api/send';
import { URL_SEND_DATA } from '../../api/urls';
import { Header } from '../header/header';
import './home.css';

export const Home = () => {

    return (
        <div className="home">
            <Header/>
            <div className="home__form">
                <form className='home__Form' id='sendData'>
                    <input type="text" id='nameFile' placeholder='Название файла' />
                    <input type="text" id='inn' placeholder='ИНН' />
                    <button className='home__upload'>
                        <input type="file" hidden id="File-doc" name='file' placeholder='file' />
                        Загрузить файл
                    </button>
                    <div className="home__container__btn">
                        <button onClick={SendFile } className='home__submit' id='submit-data' type="submit">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}