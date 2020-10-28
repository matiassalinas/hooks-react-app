export const process = ( iter ) => {
    for(let i = 0; i < iter; i++) {
        console.log("iter");
    }
    return `${iter} iter done`;
}