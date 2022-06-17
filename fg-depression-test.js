import Enquirer from "enquirer" 
const { Survey } = Enquirer

async function keypress() {
    console.log("Press any key to exit...")
    process.stdin.resume()
    process.stdin.setRawMode(true)
    return new Promise((resolve,reject)=> {
        const handler = buffer => {
            process.stdin.setRawMode(false)
            process.stdin.pause()
            process.nextTick(resolve)
        }
        process.stdin.once('data', handler)
    })
}


const prompt = new Survey({
    name: 'Feeling Great depression test',
    message: "Select answers to indicate how you're feeling right now.",
    scale: [
        { name: 0, message: 'Not at all'},
        { name: 1, message: 'Somewhat' },
        { name: 2, message: 'Moderately' },
        { name: 3, message: 'A lot' },
        { name: 4, message: 'Extremely' }
    ],
    margin: [0,0,2,1],
    choices: [
        {
            name: 'sad',
            message: 'Sad or down in the dumps'
        }
    ]
})

let val = await prompt.run()

console.log(val)
await keypress()