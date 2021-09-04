import { useCallback, useEffect, useState } from 'react';
import { SendFile } from '../../api/send';
import { Header } from '../header/header';
import './home.css';
import { Container } from '../container/container';
import { Input } from '../input/input';
import { useDropzone } from 'react-dropzone';

export const Home = () => {
    const [files, setFiles] = useState()

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles)
    })

    const { getInputProps, getRootProps, isDragActive } = useDropzone({onDrop})

    useEffect(() => {
        console.log(files);
    }, [files])

    return (
        <div className="home">
            <Header />
            <Container>
                <div className="home__form">
                    <form className='home__Form' id='sendData'>
                        <input type="text" id='nameFile' placeholder='Название файла' />
                        <input type="text" id='inn' placeholder='ИНН' />
                        <div {...getRootProps()} className='home__upload'>
                            <input {...getInputProps()} id='files' className='input__field' />
                            Загрузить файл
                        </div>                        
                        <div className="home__container__btn">
                            <button onClick={SendFile} className='home__submit' id='submit-data' type="submit">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}