export const getAllNames = (data) => {
    return data.map((item) => item.name)
}

export const getBefore1990 = (data) => {
    return data.filter((item) =>{
        const birthYear = new Date(item.birthday).getFullYear();
        return birthYear < 1990;
    })
}