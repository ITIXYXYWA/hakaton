export const RedirectByRezult = ({
    data,
    history
}) => {
    data.rootCheck ?
        history.push('/accept')
    :
        history.push('/error')
    return data
}