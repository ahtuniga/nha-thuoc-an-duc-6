/* =========================================================
   NHÀ THUỐC AN ĐỨC 6 — SEO-PRODUCT.JS (MỚI)
   Tự tạo dữ liệu có cấu trúc schema.org (JSON-LD) loại ItemList + Product
   cho trang Từ điển Y khoa, đọc thẳng từ products.js và prices.js.
   → Thêm / sửa sản phẩm hay đổi giá ở 2 file đó là dữ liệu SEO tự khớp,
     không cần sửa tay.

   Quy tắc:
   - Chỉ có "offers" (giá) khi sản phẩm CÓ giá > 0 trong prices.js.
     Sản phẩm "Liên hệ báo giá" thì không khai giá (khai giá 0đ là sai sự thật).
   - Không khai availability / đánh giá sao vì website không có dữ liệu thật
     về tồn kho hay review — khai bừa có thể bị Google phạt.
   - Địa chỉ gốc (domain) lấy từ thẻ <link rel="canonical"> của trang.
   ========================================================= */
(function () {
    "use strict";

    if (typeof products === "undefined" || !Array.isArray(products)) return;

    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) return;

    var pageUrl = canonical.href;
    var origin = new URL(pageUrl).origin;

    var categoryLabels = {
        thuc_pham: "Thực phẩm bổ sung",
        my_pham: "Mỹ phẩm",
        dung_cu: "Dụng cụ y tế"
    };

    function plainText(htmlString, maxLen) {
        var tmp = document.createElement("div");
        tmp.innerHTML = htmlString || "";
        var text = (tmp.textContent || "").replace(/\s+/g, " ").trim();
        if (text.length > maxLen) text = text.slice(0, maxLen - 1).replace(/\s+\S*$/, "") + "…";
        return text;
    }

    function priceOf(id) {
        var table = (typeof PRICES !== "undefined" && PRICES) ? PRICES : {};
        var p = Number(table[id]);
        return isFinite(p) && p > 0 ? p : 0;
    }

    var items = products.map(function (p, index) {
        var product = {
            "@type": "Product",
            "name": p.name,
            "image": origin + "/" + String(p.image || "").replace(/^\/+/, ""),
            "description": plainText(p.description, 200) || p.name,
            "category": categoryLabels[p.category] || p.category
        };

        var price = priceOf(p.id);
        if (price > 0) {
            product.offers = {
                "@type": "Offer",
                "price": String(price),
                "priceCurrency": "VND",
                "url": pageUrl,
                "seller": { "@id": origin + "/#pharmacy" }
            };
        }

        return { "@type": "ListItem", "position": index + 1, "item": product };
    });

    var data = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Danh mục sản phẩm — " + document.title.split("|").pop().trim(),
        "numberOfItems": items.length,
        "itemListElement": items
    };

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "productJsonLd";
    script.textContent = JSON.stringify(data).replace(/</g, "\\u003c");
    document.head.appendChild(script);
})();
