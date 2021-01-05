import { promises as fs } from 'fs'
import Cache from 'node-cache'

const cache = new Cache()

const mix = async (path) => {
    let manifest = cache.get('mix-manifest')

    if (!manifest) {
        const raw = await fs.readFile(`${__dirname}/../public/mix-manifest.json`)
        cache.set('mix-manifest', (manifest = JSON.parse(raw.toString('utf-8'))))
    }

    return manifest[path]
}

export { cache, mix }
