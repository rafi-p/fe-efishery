export const customNum = (data, isNotCurrency) => {
    if (data || data === 0) {
        return (isNotCurrency ? '' : 'Rp ') + new Number(data).toLocaleString('id', 'ID');
    }
};

export const customDateFormat = (date) => {
    return new Date(date).toLocaleDateString();
};