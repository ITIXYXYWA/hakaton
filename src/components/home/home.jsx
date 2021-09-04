import { useCallback, useEffect, useState } from 'react';
import { Header } from '../header/header';
import { Container } from '../container/container';
import { useDropzone } from 'react-dropzone';
import './home.css';
import { validationForm } from '../../util/form-validation';
import errorStar from '../../assets/img/error-star.svg';

export const Home = () => {
    const [files, setFiles] = useState()

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles)
    })

    const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop })

    useEffect(() => {
        console.log(files);
    }, [files])

    return (
        <div className="home">
            <Header />
            <Container>
                <div className="home__form">
                    <form className='home__Form' id='sendData'>
                        <span className="error-message error-message--name hide"><img src={errorStar} alt="" /> Невернно введено название</span>
                        <input type="text" id='nameFile' placeholder='Название файла' className='home__input__name' />
                        <span className="error-message error-message--inn hide"><img src={errorStar} alt="" /> Неверно введён ИНН</span>
                        <input type="text" id='inn' placeholder='ИНН' className='home__input__inn' />
                        <span className="error-message error-message--file hide"><img src={errorStar} alt="" /> Вы не загрузили файл</span>
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
                                    validationForm(files)
                                }
                                }
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