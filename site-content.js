/**
 * 網站不定期內容設定。
 * 發布新消息時，將圖片放入 images 資料夾，並修改 latestNews 的文字與 imagePath。
 * 沒有消息需要顯示時，將 enabled 改為 false。
 */
window.SITE_CONTENT = {
    latestNews: {
        enabled: false,
        badge: "門市公告",
        title: "來店前請先查看門市說明",
        description: "營業方式與現場注意事項整理於公告圖片，出發前可先確認。",
        imagePath: "images/banner_1.png",
        imageAlt: "情趣時光門市說明公告",
        footnote: "公告內容如有異動，以門市現場為準"
    }
};
