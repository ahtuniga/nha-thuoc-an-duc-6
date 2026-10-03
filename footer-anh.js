/* =========================================================
   ẢNH THẬT NHÀ THUỐC — FOOTER ĐỒNG BỘ EDITORIAL DARK GREEN
   ========================================================= */
(function () {
    "use strict";

    var CONFIG = {
        enabled: true,
        image: "images/nha-thuoc-an-duc-6.webp",
        alt: "Mặt tiền Nhà Thuốc An Đức 6",
        name: "Nhà Thuốc An Đức 6",
        address: "112B, đường số 9, phường Linh Xuân, Thủ Đức",
        phone: "0932101016"
    };

    if (!CONFIG.enabled) return;

    var script = document.currentScript;
    var BASE = script && script.src ? script.src.split("?")[0].replace(/[^\/]*$/, "") : "";
    var footer = document.querySelector(".site-footer");
    if (!footer || footer.querySelector(".fphoto")) return;
    var host = footer.querySelector(".footer-right") || footer.querySelector(".footer-container");
    if (!host) return;

    var style = document.createElement("style");
    style.textContent = `
        .fphoto{position:relative;margin:40px 0 0;border-radius:20px;overflow:hidden;background:#102d1d;border:1px solid rgba(207,235,190,.28);box-shadow:0 18px 45px rgba(0,0,0,.18)}
        .fphoto>img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;transition:transform .5s ease}
        .fphoto::after{content:"";position:absolute;inset:46% 0 0;background:linear-gradient(to bottom,transparent,rgba(6,27,16,.86));pointer-events:none}
        .fphoto:hover>img{transform:scale(1.012)}
        .fphoto-cap{position:absolute;z-index:2;left:0;right:0;bottom:0;display:flex;align-items:flex-end;gap:14px;padding:28px 25px 20px;background:transparent;color:#fff}
        .fphoto-info{display:grid;gap:4px;min-width:0}
        .fphoto-info strong{display:flex;align-items:center;gap:9px;font-size:17px;font-weight:700;letter-spacing:-.15px;color:#fff}
        .fphoto-info strong::before{content:"";width:14px;height:14px;flex:0 0 14px;border:2px solid #d8efc8;border-radius:50% 50% 50% 0;transform:rotate(-45deg);position:relative}
        .fphoto-info span{font-size:13px;line-height:1.45;color:rgba(255,255,255,.9);padding-left:23px}
        .fphoto-actions{display:none}
        @media(max-width:700px){.fphoto{margin-top:30px}.fphoto-cap{padding:24px 17px 15px}.fphoto-info strong{font-size:15px}.fphoto-info span{font-size:11.5px}}
        @media(max-width:480px){.fphoto>img{aspect-ratio:4/3}.fphoto-cap{padding:25px 14px 13px}.fphoto-info strong{font-size:14px}.fphoto-info span{font-size:11px;padding-left:22px}}
        @media(prefers-reduced-motion:reduce){.fphoto>img{transition:none}.fphoto:hover>img{transform:none}}
    `;
    document.head.appendChild(style);

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text) e.textContent = text;
        return e;
    }

    var fig = el("figure", "fphoto");
    var img = document.createElement("img");
    img.src = BASE + CONFIG.image;
    img.alt = CONFIG.alt;
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", function () { fig.remove(); });

    var info = el("div", "fphoto-info");
    info.appendChild(el("strong", "", CONFIG.name));
    info.appendChild(el("span", "", CONFIG.address));

    var actions = el("div", "fphoto-actions");
    var call = el("a", "", "Gọi ngay");
    call.href = "tel:" + CONFIG.phone;
    var map = el("a", "", "Chỉ đường");
    map.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.name + ", " + CONFIG.address);
    map.target = "_blank";
    map.rel = "noopener";
    actions.appendChild(call);
    actions.appendChild(map);

    var cap = el("figcaption", "fphoto-cap");
    cap.appendChild(info);
    cap.appendChild(actions);

    fig.appendChild(img);
    fig.appendChild(cap);
    host.appendChild(fig);
})();
