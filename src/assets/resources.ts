import { stringifyQuery } from "vue-router"

const _rls_list: Array<string> = ['thgo005', 'thgo004', 'thgo003', 'tgsp001', 'thgo002', 'tgsg001', 'thgo001']

function readResources(raw: Record<string, any>) {
  let ret: Record<string, any> = {}
  for (let k in raw) {
    let nk = k.substring(k.indexOf('assets/') + 'assets/'.length)
    ret[nk] = raw[k]
  }
  return ret
}

// ===============================================
// shop icon(bandcamp.png, etc.), saved in shops/
// ===============================================
const _shop_icon = readResources(import.meta.glob(`@/assets/shops/*.png`, { eager: true, import: "default" }))
const shop_icon = (name: string) => _shop_icon[`shops/${name}.png`]

// ===============================================
// releases infomation
// ===============================================
const _rls_info: Record<string, any> = import.meta.glob(`../assets/releases/*/info.json`, { eager: true, import: "default" })
// a simple infomation
let rls_info_s: Array<Record<string, any>> = []
_rls_list.forEach(name => {
  for (let k in _rls_info) {
    if (k.indexOf(name) >= 0) {
      let item: Record<string, any> = {
        "id": _rls_info[k]["id"],
        "type": _rls_info[k]["type"],
        "homepage": _rls_info[k]["homepage"],
        "title": _rls_info[k]["title"],
        "sources": _rls_info[k]["sources"],
      }
      _rls_info[k]["infos"].forEach((i: Record<string, string>) => {
        if (i.name.indexOf("RELEASE DATE") >= 0)
          item["date"] = i["value"]
        if (i.name.indexOf("MODEL NUMBER") >= 0)
          item["code"] = i["value"]
      })
      if (item["homepage"] == null)
        item["homepage"] = `/releases/${item["id"]}`
      rls_info_s.push(item)
      break
    }
  }
})
// infomation in detail
let rls_info_l: Record<string, any> = {}
for (let k in _rls_info) {
  if (_rls_info[k].url == null) {
    rls_info_l[_rls_info[k].id] = _rls_info[k]
  }
}

// banner
const banner = readResources(import.meta.glob(`@/assets/releases/*/banner.png`, { eager: true, import: "default" }))[`releases/${_rls_list[0]}/banner.png`]
// release covers(***/cover.png), saved in releases/
const _rls_cover = readResources(import.meta.glob(`@/assets/releases/*/cover.png`, { eager: true, import: "default" }))
const rls_cover = (name: string) => _rls_cover[`releases/${name}/cover.png`]
// release bar(***/bar.png), saved in releases/
const _rls_bar = readResources(import.meta.glob(`@/assets/releases/*/bar.png`, { eager: true, import: "default" }))
const rls_bar = (name: string) => _rls_bar[`releases/${name}/bar.png`]
// release banner(***/banner.png), saved in releases/
const _rls_banner = readResources(import.meta.glob(`@/assets/releases/*/banner.png`, { eager: true, import: "default" }))
const rls_banner = (name: string) => _rls_banner[`releases/${name}/banner.png`]

// ===============================================
// bar masks
// ===============================================
const _masks = readResources(import.meta.glob(`@/assets/masks/*.png`, { eager: true, import: "default" }))
const masks = (name: string) => _masks[`masks/${name}.png`]

// ===============================================
// profile photos
// ===============================================
const _profile_photos = readResources(import.meta.glob(`@/assets/profiles/*`, { eager: true, import: "default" }))
const profile_photos = (name: string) => _profile_photos[`profiles/${name}`]

// ===============================================
// crossfade audios
// ===============================================
const _crossfade_audios = readResources(import.meta.glob(`@/assets/releases/*/xfd.mp3`, { eager: true, import: "default" }))
const crossfade_audios = (name: string) => _crossfade_audios[`releases/${name}/xfd.mp3`]


// ===============================================
// news
// ===============================================
const _news: Record<string, any> = import.meta.glob(`../assets/news/contents/*.json`, { eager: true, import: "default" })
const _news_images: Record<string, any> = import.meta.glob(`../assets/news/images/*.png`, { eager: true, import: "default" })
// number: 001, 002, 003, ...
const news = (number: string) => _news[`../assets/news/content/${number}.json`]
const news_images = (number: string) => _news_images[`../assets/news/images/${number}.png`]

let news_s: Array<Record<string, any>> = []
for (let k in _news) {
  let item: Record<string, any> = {
    "id": _news[k]["id"],
    "title": _news[k]["title"],
    "date": _news[k]["date"].replaceAll('-','.'),
    "content": _news[k]["content"],
  }
  news_s.push(item)
}
news_s.reverse()

let news_images_s: Array<Record<string, any>> = []
for (let k in _news_images) {
  let item: Record<string, any> = {
    "id": k.substring(k.indexOf('images/') + 'images/'.length, k.indexOf('.png')),
    "url": _news_images[k],
  }
  news_images_s.push(item)
}
news_images_s.reverse()

console.log("found number of news: ", Object.keys(_news).length)
console.log("dump news content: ", news_s)
console.log("dump news images: ", news_images_s)

export { rls_info_s, rls_info_l, shop_icon, banner, rls_cover, rls_bar, rls_banner, masks, profile_photos, crossfade_audios, news, news_images, news_s, news_images_s }