export const getFormData = (file) => {

    const formData = new FormData();
    formData.append('file', file, {type: file.type})
    return formData
}