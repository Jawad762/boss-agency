import fs from "fs"

const renameFiles = async () => {
    const dir = fs.readdirSync("./public/portfolio/pdf-pages")
    dir.forEach((file, i) => {
        fs.renameSync(`./public/portfolio/pdf-pages/${file}`, `./public/portfolio/pdf-pages/${i + 1}.png`)
    })
}

renameFiles()