import { Storage } from './mega.js'

async function uploadFile(email, password, keepalive, userAgent) {
    console.log('running')
    try {
        const storage = await new Storage({
            email: email,
            password: password,
            keepalive: keepalive,
            userAgent: userAgent
        }).ready()

            const file = await storage.upload('hello-world.txt', 'Hello world!').complete()
        // console.log('The file was uploaded!')
    } catch (error) {
        console.error('Error:', error)
    }
}

// Call the function with the specific parameters
uploadFile('heliumface770@gmail.com', 'Hoodwink770!', true, null)
