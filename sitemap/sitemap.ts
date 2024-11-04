import * as path from "path"
import * as fs from "fs"
// @ts-ignore
import matter from "gray-matter"
const URL = "https://www.swaap.finance"

interface SiteMapItem {
  id: string
  date: string
  change: string
  priority: string
}
async function doWork() {
  const sitemap = await generateSiteMap()
  writeSitemapToFile(sitemap)
}

doWork().then(() => {
  console.log("sitemap job done")
})

interface PostData {
  slug: string
  date: string
}

function getPosts(): PostData[] {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    // Assuming the file name is the slug
    const slug = filename.replace(/\.md$/, "").toLowerCase()

    // Extracting date from the front matter
    const date = data.date ? data.date : ""
    let isoDate: string

    if (date instanceof Date) {
      isoDate = date.toISOString()
    } else {
      if (date !== "") {
        isoDate = new Date(date).toISOString()
      } else {
        isoDate = new Date().toISOString()
      }
    }

    return { slug, date: isoDate }
  })

  return posts
}

function generateStaticSiteMap() {
  const home: SiteMapItem = {
    id: "",
    date: "2023-09-01",
    change: "weekly",
    priority: "1",
  }
  const staticPagesItem: SiteMapItem[] = [
    { id: "blog", date: "2023-09-01", change: "yearly", priority: "0.9" },
    { id: "team", date: "2023-09-01", change: "monthly", priority: "0.9" },
    { id: "research", date: "2023-09-01", change: "monthly", priority: "0.9" },
  ]

  const legalPagesItem: SiteMapItem[] = [
    { id: "legal-notice.pdf", date: "2023-09-01", change: "monthly", priority: "0.1" },
    { id: "terms-of-use.pdf", date: "2023-09-01", change: "monthly", priority: "0.1" },
  ]

  const homePageXML = `
           <url>
               <loc>${URL}</loc>
               <lastmod>${home.date}T12:00:00+00:00</lastmod>
                <changefreq>${home.change}</changefreq>
                <priority>${home.priority}</priority>
           </url>
`
  const staticPagesXML = staticPagesItem
    .map(({ id, date, change, priority }) => {
      return `
           <url>
               <loc>${URL}/${id}</loc>
               <lastmod>${date}T12:00:00+00:00</lastmod>
                <changefreq>weekly</changefreq>
                <priority>${priority}</priority>
           </url>
         `
    })
    .join("")
  const legalPagesXML = legalPagesItem
    .map(({ id, date, change, priority }) => {
      return `
           <url>
               <loc>${URL}/${id}</loc>
               <lastmod>${date}T12:00:00+00:00</lastmod>
                <changefreq>weekly</changefreq>
                <priority>${priority}</priority>
           </url>
         `
    })
    .join("")
  return homePageXML + staticPagesXML + legalPagesXML
}

async function generateBlogSiteMap() {
  const posts: PostData[] = getPosts()
  return posts
    .map(({ slug, date }) => {
      return `
           <url>
               <loc>${URL}/blog/${slug}</loc>
               <lastmod>${date}</lastmod>
                <changefreq>yearly</changefreq>
                <priority>0.5</priority>
           </url>
         `
    })
    .join("")
}

async function generateSiteMap() {
  const staticXml = generateStaticSiteMap()
  const dynamicXml = await generateBlogSiteMap()
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs  -->
      ${staticXml}
     
     <!-- Add the dynamic URLs  -->
      ${dynamicXml}
   </urlset>
 `
}

function writeSitemapToFile(sitemap: string): void {
  const sitemapPath = path.join(process.cwd(), "public/sitemap.xml")
  fs.writeFileSync(sitemapPath, sitemap)
  console.log(`Sitemap written to ${sitemapPath}`)
}
