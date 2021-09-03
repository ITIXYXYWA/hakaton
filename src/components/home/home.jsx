import { useEffect } from 'react';
import { fetchPOST, SendFile } from '../../api/send';
import { URL_SEND_DATA } from '../../api/urls';
import './home.css';

export const Home = () => {

    return (
        <div className="home">
            <div className="home__form">
                <form className='home__Form' id='sendData'>
                    <input type="text" id='nameFile' value='Устав_действующий' placeholder='name' />
                    <input type="text" id='inn' value='2315014748' placeholder='INN' />
                    <input type="file" id="File-doc" placeholder='file' />
                    <button onClick={SendFile } id='submit-data' type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}