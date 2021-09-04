import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { createWorker } from "tesseract.js";

const worker = createWorker()
export const Input = ({ className }) => {
    const onDrop = useCallback(acceptedFiles => {

    })

    const { getInputProps, getRootProps, isDragActive } = useDropzone({onDrop})

    return (
        <div {...getRootProps()} className={className}>
            <input {...getInputProps()} id='files' className='input__field' />
            Загрузить файл
        </div>
    )
}