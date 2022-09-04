export const formatPrice = (price) => {
    let formattedPrice = Math.floor(price).toString();

    switch (formattedPrice.length) {
        case 7: {
            const firstPart = formattedPrice[0];
            const secondPart = formattedPrice.slice(1, 4);
            const thirdPart = formattedPrice.slice(4);

            formattedPrice = `${firstPart} ${secondPart} ${thirdPart}`;
            break;
        }
        case 6: {
            const firstPart = formattedPrice.slice(0, 3);
            const secondPart = formattedPrice.slice(3);

            formattedPrice = `${firstPart} ${secondPart}`;
            break;
        }
        case 5: {
            const firstPart = formattedPrice.slice(0, 2);
            const secondPart = formattedPrice.slice(2);

            formattedPrice = `${firstPart} ${secondPart}`;
            break;
        }
        // no default
    }

    return formattedPrice;
};