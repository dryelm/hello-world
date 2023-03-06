function formatDate (date) {
    const formatFunc = (x => x.toString().padStart(2, '0'));
    const day = formatFunc(date.getDate());
    const month = formatFunc(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}