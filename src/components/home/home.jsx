import { useCallback, useEffect, useState } from 'react';
import { Header } from '../header/header';
import { Container } from '../container/container';
import { useDropzone } from 'react-dropzone';
import './home.css';
import { getConverData } from '../../api/send';
// import { convertSome } from '../../api/root.api';

export const Home = () => {
    const [files, setFiles] = useState()

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles)
    })

    useEffect(() => {
        if (files !== undefined) {
            console.log(files);
            getConverData(files).then(data => console.log(data))
        }
    },[files])

    const { getInputProps, getRootProps, isDragActive } = useDropzone({onDrop})

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
                            <button className='home__submit' id='submit-data' type="submit">
                                Отправить
                            </button>
                        </div>
                    </form>

                            {/* <form action="https://v2.convertapi.com/convert/pdf/to/jpg?Secret=ZSh7pIpkM2iPWvuI" method="post" encType="multipart/form-data">
                                <input type="file" name="File" />
                                <input type="hidden" name="StoreFile" value="true" />
                                <input type="submit" value="Convert file" onSubmit={(e) => {
                                    console.log(e);
                                }}/>
                            </form> */}

                </div>
            </Container>
        </div>
    )
}