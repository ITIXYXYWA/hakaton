import './header.css';
import { Container } from '../container/container';

export const Header = ({disabled}) => {
    return (
        <div className="header">
            <Container>
                <div className="header__nav">
                    <ul className="header__nav-list">
                          <li className="header__nav-item">
                            <a {...disabled ? {className:'disabled-nav'} : {href:'/'}}>
                                Проверка файлов
                            </a>
                        </li>
                    </ul>
                </div>
            </Container >
        </div >
    )
}