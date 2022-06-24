const bucketUrl = 'https://townsquareinteractive.s3.amazonaws.com'
const localUrl = 'elitesports.com/preview'
const env = process.env.NEXT_PUBLIC_URL_ENV
const domain = process.env.NEXT_PUBLIC_BASE_URL

function envCheck(api: string) {
    if (env === '1') {
        let liveUrl = encodeURI(api + '/' + domain + '/live')
        return liveUrl
    } else if (env === '0') {
        let previewUrl = encodeURI(api + '/' + domain + '/preview')
        return previewUrl
    } else {
        return api + '/' + localUrl
    }
}

export function getDomain() {
    const apiUrl = process.env.API_URL_DATA || bucketUrl
    let domainUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(apiUrl) : apiUrl + '/' + localUrl
    return domainUrl
}
//Adds current domain name in amazon for image urls
export function domainImage(url: string) {
    const assetsApi = process.env.NEXT_PUBLIC_API_URL_ASSETS || bucketUrl
    let imageUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(assetsApi) + '/assets' + url : assetsApi + '/' + localUrl + '/assets' + url
    /* let imageUrl = assetUrl + '/assets' + url */
    return encodeURI(imageUrl)
}

//jedwards4044.github.io/website-assets/jremodeling.com/live/assets/bathroom-1.jpg

//Capitalize first letter of word
export function capitalize(str: string) {
    if (!str) {
        return ''
    }

    return str[0].toUpperCase() + str.slice(1)
}
