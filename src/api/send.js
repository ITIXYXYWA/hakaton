import { CONVERT } from "./urls";
import { getText } from './get-text';
export const getFormData = (file) => {

    const formData = new FormData();
    formData.append('file', file, {type: file.type})
    return formData
}

export const getConverData = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");

            fetch(CONVERT, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                Parameters: [
                    {
                        Name: "File",
                        FileValue: {
                            Name: file[0].name,
                            Data: base64String
                        }
                    },
                    {
                        Name: "StoreFile",
                        Value: true
                    }
                ]
            })
        }).then(response => response.json())
        .then(res => getText(res.Files[0].Url));
    };
    
    reader.readAsDataURL(new Blob([file[0]], {type: "application/octet-stream"}));

}