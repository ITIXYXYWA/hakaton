import './header.css';
import { Container } from '../container/container';

export const Header = () => {

    return (
        <div className="header">
            <Container>
                <div className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item active">
                            <a href="">Проверка файлов</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">Хранилище</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}