import { stringifyQuery } from "vue-router"

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
const _rls_list: Array<string> = ['thgo004', 'thgo003', 'tgsp001', 'thgo002', 'tgsg001','thgo001']
const _rls_info: Record<string, any> = import.meta.glob(`../assets/releases/*/info.json`, { eager: true, import: "default" })
let rls_info_s: Array<Record<string, any>> = []
_rls_list.forEach(name => {
  for (let k in _rls_info) {
    if (k.indexOf(name) >= 0){
      let item: Record<string, any> = {
        "id": _rls_info[k]["id"],
        "type": _rls_info[k]["type"],
        "homepage": _rls_info[k]["homepage"],
        "title": _rls_info[k]["title"],
        "sources": _rls_info[k]["sources"],
        "infos": _rls_info[k]["infos"],
      }
      item["infos"].forEach((i: Record<string, string>) => {
        if (i.name.indexOf("RELEASE DATE") >= 0)
          item["date"] = i["value"]
        if (i.name.indexOf("MODEL NUMBER") >= 0)
          item["code"] = i["value"]
      })
      rls_info_s.push(item)
      break
    }
  }
})

// release covers(***/cover.png), saved in releases/
const _rls_cover = readResources(import.meta.glob(`@/assets/releases/*/cover.png`, { eager: true, import: "default" }))
const rls_cover = (name: string) => _rls_cover[`releases/${name}/cover.png`]

export { rls_cover, rls_info_s, shop_icon }