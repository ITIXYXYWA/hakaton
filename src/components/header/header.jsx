import './header.css';
import { Container } from '../container/container';

export const Header = (props) => {
    console.log(props.disabled);
    if (props.disabled === true) {
        console.log(12313123123);
    }
    return (
        <div className="header">
            <Container>
                <div className="header__nav">
                    <ul className="header__nav-list">
                        {props.disabled === true ?
                            <>
                                <li className="header__nav-item">
                                    <a className='disabled-nav'>Проверка файлов</a>
                                </li>
                                <li className="header__nav-item">
                                    <a className='disabled-nav'>Хранилище</a>
                                </li>
                            </>
                            :
                            <>
                                <li className="header__nav-item active">
                                    <a href="">Проверка файлов</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="">Хранилище</a>
                                </li>
                            </>
                        }


                    </ul>
                </div>
            </Container>
        </div>
    )
}