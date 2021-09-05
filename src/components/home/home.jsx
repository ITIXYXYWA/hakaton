/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import { useCallback, useEffect, useState } from 'react';
import { Header } from '../header/header';
import { Container } from '../container/container';
import { useDropzone } from 'react-dropzone';
import { getConverData } from '../../api/send';
import { validationForm } from '../../util/form-validation';
import errorStar from '../../assets/img/error-star.svg';
import './home.css';

export const Home = () => {
    const [files, setFiles] = useState()

    useEffect(() => {
        localStorage.clear()
    }, [])

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles)
    }, [])

    const { getInputProps, getRootProps } = useDropzone({onDrop})

    return (
        <div className="home">
            <Header />
            <Container>
                <div className="home__form">
                    <form className='home__Form' id='sendData'>
                        <span className="error-message error-message--name hide"><img src={errorStar} alt="" /> Невернно введено название</span>
                        <input onChange={() => validationForm(files)} type="text" id='nameFile' placeholder='Название файла' className='home__input__name' />
                        <span className="error-message error-message--inn hide"><img src={errorStar} alt="" /> Неверно введён ИНН</span>
                        <input onChange={() => validationForm(files)} type="text" id='inn' placeholder='ИНН' className='home__input__inn' />
                        <span className="error-message error-message--file hide"><img src={errorStar} alt="" /> {files === undefined ? " Вы не загрузили файл" : (validationForm(files), "Не верный формат файла")} </span>
                        <div {...getRootProps()} className='home__upload'>
                            <input {...getInputProps()} id='files' className='input__field' />
                            {files !== undefined ?
                                files[0].name.length > 25 ?
                                    files[0].name.slice(0, 25) + '...'
                                    : files[0].name
                                : "Загрузить файл"}
                        </div>
                        <div className="home__container__btn">
                            <a
                            className='home__submit'
                            id='submit-data'
                                onClick={() => {
                                    const validObject = Object.values(validationForm(files)).every((el) => {
                                        return el.check === true;
                                    });

                                    if (validObject === true) {
                                        localStorage.setItem('form', JSON.stringify(validationForm(files)));
                                        getConverData(files)
                                        window.location.href = '/pending'
                                        localStorage.setItem('fileNaming', files)
                                    }
                                }}
                            >
                                Отправить
                            </a>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}