import { getValue } from "../util/getters";
import { URL_SEND_DATA } from "./urls";

export const SendFile = ( file ) => {

    document.getElementById('sendData').addEventListener('submit', event => {
        event.preventDefault()
    })

    document.getElementById('files').addEventListener('change', (evt) => {
        console.log(evt);
        console.log('asdasfasfw41');
        const fileData = evt.target["files"]
        console.log(fileData);
    })
    

    // const dataFile = getFormData(file)
    fetchPOST(URL_SEND_DATA, {
        // File: dataFile,
        file: 'some data',
        Inn: getValue('inn'),
        fileName: getValue('nameFile')
    }).then(response => response.json())
}

export const getFormData = (file) => {

    const formData = new FormData();
    formData.append('file', file, {type: file.type})
    return formData
}


export const fetchPOST = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(r => r.json())
} 