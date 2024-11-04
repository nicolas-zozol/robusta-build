// @ts-ignore
import fs from "fs"
// @ts-ignore
import path from "path"
import { parseStringPromise } from "xml2js"
import axios from "axios"

async function validateSitemap(sitemapPath) {
  const xml = fs.readFileSync(sitemapPath, "utf8")
  const parsed = await parseStringPromise(xml)
  const urls = parsed.urlset.url.map(urlEntry => urlEntry.loc[0])

  for (const url of urls) {
    try {
      const response = await axios.get(url)
      if (response.status === 200) {
        console.log(`URL is valid: ${url}`)
      } else {
        console.warn(`URL returned non-200 status: ${url}`)
      }
    } catch (error) {
      console.error(`Error accessing URL: ${url}`)
    }
  }
}

const sitemapPath = path.join(process.cwd(), "public/sitemap.xml")
validateSitemap(sitemapPath)
