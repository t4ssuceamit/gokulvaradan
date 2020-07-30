export default function swDev(){
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((res) => {
        console.log('Registered', res)
    }).catch((err) => console.log("pwa error", err))
}