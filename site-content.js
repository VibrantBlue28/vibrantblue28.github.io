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
    },
    products: [
        {
            name: "KISSTOY Doris",
            description: "門市商品外觀展示，圖片僅供辨識與參考。",
            footnote: "實際庫存、售價與包裝版本以門市現場為準。",
            images: [
                {
                    path: "images/products/kisstoy-doris/kisstoy-doris-main.jpg",
                    alt: "KISSTOY Doris 商品與外盒外觀"
                },
                {
                    path: "images/products/kisstoy-doris/kisstoy-doris-package.jpg",
                    alt: "KISSTOY Doris 外盒包裝外觀"
                },
                {
                    path: "images/products/kisstoy-doris/imgi_39_6def66484c644494bfe5891b4e0f676c.jpg",
                    alt: "KISSTOY Doris 商品功能示意"
                },
                {
                    path: "images/products/kisstoy-doris/imgi_42_848b3db8a28e4fcea8c3491c97948eed.jpg",
                    alt: "KISSTOY Doris 遙控器與商品外觀"
                },
                {
                    path: "images/products/kisstoy-doris/imgi_43_ddf704f1e132478494f9262ff29c1076.jpg",
                    alt: "KISSTOY Doris 操作強度示意"
                },
                {
                    path: "images/products/kisstoy-doris/imgi_45_94ea3d460766420fb002eb26c2e57a04.jpg",
                    alt: "KISSTOY Doris 遙控器與商品展示"
                },
                {
                    path: "images/products/kisstoy-doris/imgi_50_ce3a47583ed240c2a673c6d2f73bb4ba.jpg",
                    alt: "KISSTOY Doris 商品與遙控器外觀"
                }
            ]
        }
    ]
};
