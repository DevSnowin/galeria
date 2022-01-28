
export default function saveImages(array){
    // array.forEach(image => {
    //     console.log(image.urls.raw);
    // });
    var url = array[0].urls.raw;

    const reader = new FileReader();
    reader.readAsDataURL(url);

    reader.addEventListener("load", () => {
        console.log(reader.result);
    })
    
    
}